import { useEffect, useMemo } from 'react';
import {
  EmptyAndErrorRecoveryCalibratrackBenchR6x2,
  type EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId,
  InstrumentEditorCalibratrackBenchR6x2,
  type InstrumentEditorCalibratrackBenchR6x2ActionId,
  InstrumentOperationsCalibratrackBenchR6x2,
  type InstrumentOperationsCalibratrackBenchR6x2ActionId,
} from './screens';
import { publishAppBridge } from './test/bridge';
import { useCalibraTrackStore } from './features/calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';
import { actCancelEdit } from './features/surf-instrument-editor/act_cancel_edit';
import { actSaveRecord } from './features/surf-instrument-editor/act_save_record';
import { actCreateRecord } from './features/surf-instrument-operations/act_create_record';
import { actRetryLoad } from './features/surf-instrument-operations/act_retry_load';
import { actSearchRecords } from './features/surf-instrument-operations/act_search_records';
import { actSelectRecord } from './features/surf-instrument-operations/act_select_record';

export default function App() {
  const store = useCalibraTrackStore();

  const bridgeSnapshot = useMemo(
    () => ({
      activeScreen: store.activeScreen,
      activeRoute: store.activeRoute,
      selectedRecord: store.selectedRecord,
      counts: store.counts,
      storageStatus: store.storageStatus,
      lastError: store.lastError,
      activePanel: store.activePanel,
    }),
    [
      store.activePanel,
      store.activeRoute,
      store.activeScreen,
      store.counts,
      store.lastError,
      store.selectedRecord,
      store.storageStatus,
    ],
  );

  useEffect(() => {
    publishAppBridge(bridgeSnapshot);
  }, [bridgeSnapshot]);

  const operationsActions = useMemo<Partial<Record<InstrumentOperationsCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => store.setActiveRoute('calibration-log'),
      'button-2-2': () => store.setActiveRoute('reports'),
      'button-3-3': () => store.setActiveRoute('standards'),
      'certify-4': () => store.updateSelectedStatus('certified'),
      'add-reading-5': store.addReading,
      'add-instrument-6': () => actCreateRecord(store),
      'status-7': () => store.updateSelectedStatus('in-progress'),
      'technician-8': () => store.setActiveRoute('inventory'),
      'date-range-9': () => store.setActiveRoute('calibration-log'),
      'edit-10': () => actSelectRecord(store, 'edit-10'),
      'edit-11': () => actSelectRecord(store, 'edit-11'),
      'edit-12': () => actSelectRecord(store, 'edit-12'),
      'edit-13': () => actSelectRecord(store, 'edit-13'),
      'button-14-14': () => store.setActiveRoute('support'),
      'button-15-15': () => store.setActiveRoute('archive'),
      'dashboard-1': () => actSearchRecords(store, 'dashboard-1'),
      'inventory-2': () => actSearchRecords(store, 'inventory-2'),
      'calibration-log-3': () => actSearchRecords(store, 'calibration-log-3'),
      'reports-4': () => actSearchRecords(store, 'reports-4'),
      'standards-5': () => actSearchRecords(store, 'standards-5'),
      'support-6': () => actSearchRecords(store, 'support-6'),
      'archive-7': () => actSearchRecords(store, 'archive-7'),
    }),
    [store],
  );

  const editorActions = useMemo<Partial<Record<InstrumentEditorCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'button-1-1': () => store.setActivePanel('operations'),
      'cancel-2': () => actCancelEdit(store),
      'save-instrument-3': () => actSaveRecord(store),
      'button-4-4': store.addReading,
      'button-5-5': () => store.updateSelectedStatus('due'),
      'button-6-6': () => store.updateSelectedStatus('archived'),
    }),
    [store],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => store.setActiveRoute('calibration-log'),
      'add-reading-2': store.addReading,
      'certify-3': () => store.updateSelectedStatus('certified'),
      'button-4-4': () => store.setActiveRoute('support'),
      'button-5-5': () => store.setActiveRoute('standards'),
      'retry-load-6': () => actRetryLoad(store),
      'add-instrument-7': () => actCreateRecord(store),
      'clear-all-filters-8': store.clearFilters,
      'dashboard-1': () => actSearchRecords(store, 'dashboard-1'),
      'inventory-2': () => actSearchRecords(store, 'inventory-2'),
      'calibration-log-3': () => actSearchRecords(store, 'calibration-log-3'),
      'reports-4': () => actSearchRecords(store, 'reports-4'),
      'standards-5': () => actSearchRecords(store, 'standards-5'),
      'support-6': () => actSearchRecords(store, 'support-6'),
      'archive-7': () => actSearchRecords(store, 'archive-7'),
    }),
    [store],
  );

  return (
    <div data-setfarm-root="calibratrack-bench-r6x2" className="min-h-screen bg-[#f4f2ec] text-[#171914]">
      <section className="calibratrack-shell" aria-label="CalibraTrack Bench R6X2 application shell">
        <div className="calibratrack-statusbar" aria-live="polite">
          <span>Route: {store.activeRoute}</span>
          <span>Panel: {store.activePanel}</span>
          <span>Records: {store.counts.total}</span>
          <span>Storage: {store.storageStatus}</span>
          {store.selectedRecord ? <span>Selected: {store.selectedRecord.assetTag}</span> : <span>No selection</span>}
          {store.lastError ? <strong>{store.lastError}</strong> : null}
        </div>

        {store.activePanel === 'editor' ? (
          <InstrumentEditorCalibratrackBenchR6x2 actions={editorActions} />
        ) : store.activePanel === 'recovery' ? (
          <EmptyAndErrorRecoveryCalibratrackBenchR6x2 actions={recoveryActions} />
        ) : (
          <InstrumentOperationsCalibratrackBenchR6x2 actions={operationsActions} />
        )}
      </section>
    </div>
  );
}
