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
  const {
    addInstrument,
    addReading,
    clearFilters,
    retryLoad,
    selectedRecord,
    selectRecord,
    setActivePanel,
    setActiveRoute,
    updateSelectedStatus,
  } = store;

  const bridgeSnapshot = useMemo(
    () => ({
      activeScreen: store.activeScreen,
      activeRoute: store.activeRoute,
      selectedRecord,
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
      selectedRecord,
      store.storageStatus,
    ],
  );

  useEffect(() => {
    publishAppBridge(bridgeSnapshot);
  }, [bridgeSnapshot]);

  const operationsActions = useMemo<Partial<Record<InstrumentOperationsCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => setActiveRoute('calibration-log'),
      'button-2-2': () => setActiveRoute('reports'),
      'button-3-3': () => setActiveRoute('standards'),
      'certify-4': () => updateSelectedStatus('certified'),
      'add-reading-5': addReading,
      'add-instrument-6': () => actCreateRecord({ addInstrument }),
      'status-7': () => updateSelectedStatus('in-progress'),
      'technician-8': () => setActiveRoute('inventory'),
      'date-range-9': () => setActiveRoute('calibration-log'),
      'edit-10': () => actSelectRecord({ selectRecord }, 'edit-10'),
      'edit-11': () => actSelectRecord({ selectRecord }, 'edit-11'),
      'edit-12': () => actSelectRecord({ selectRecord }, 'edit-12'),
      'edit-13': () => actSelectRecord({ selectRecord }, 'edit-13'),
      'button-14-14': () => setActiveRoute('support'),
      'button-15-15': () => setActiveRoute('archive'),
      'dashboard-1': () => actSearchRecords({ setActiveRoute }, 'dashboard-1'),
      'inventory-2': () => actSearchRecords({ setActiveRoute }, 'inventory-2'),
      'calibration-log-3': () => actSearchRecords({ setActiveRoute }, 'calibration-log-3'),
      'reports-4': () => actSearchRecords({ setActiveRoute }, 'reports-4'),
      'standards-5': () => actSearchRecords({ setActiveRoute }, 'standards-5'),
      'support-6': () => actSearchRecords({ setActiveRoute }, 'support-6'),
      'archive-7': () => actSearchRecords({ setActiveRoute }, 'archive-7'),
    }),
    [addInstrument, addReading, selectRecord, setActiveRoute, updateSelectedStatus],
  );

  const editorActions = useMemo<Partial<Record<InstrumentEditorCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'button-1-1': () => setActivePanel('operations'),
      'cancel-2': () => actCancelEdit({ setActivePanel }),
      'save-instrument-3': () => actSaveRecord({ selectedRecord, setActivePanel, updateSelectedStatus }),
      'button-4-4': addReading,
      'button-5-5': () => updateSelectedStatus('due'),
      'button-6-6': () => updateSelectedStatus('archived'),
    }),
    [addReading, selectedRecord, setActivePanel, updateSelectedStatus],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => setActiveRoute('calibration-log'),
      'add-reading-2': addReading,
      'certify-3': () => updateSelectedStatus('certified'),
      'button-4-4': () => setActiveRoute('support'),
      'button-5-5': () => setActiveRoute('standards'),
      'retry-load-6': () => actRetryLoad({ retryLoad }),
      'add-instrument-7': () => actCreateRecord({ addInstrument }),
      'clear-all-filters-8': clearFilters,
      'dashboard-1': () => actSearchRecords({ setActiveRoute }, 'dashboard-1'),
      'inventory-2': () => actSearchRecords({ setActiveRoute }, 'inventory-2'),
      'calibration-log-3': () => actSearchRecords({ setActiveRoute }, 'calibration-log-3'),
      'reports-4': () => actSearchRecords({ setActiveRoute }, 'reports-4'),
      'standards-5': () => actSearchRecords({ setActiveRoute }, 'standards-5'),
      'support-6': () => actSearchRecords({ setActiveRoute }, 'support-6'),
      'archive-7': () => actSearchRecords({ setActiveRoute }, 'archive-7'),
    }),
    [addInstrument, addReading, clearFilters, retryLoad, setActiveRoute, updateSelectedStatus],
  );

  return (
    <div data-setfarm-root="calibratrack-bench-r6x2" className="min-h-screen bg-[#f4f2ec] text-[#171914]">
      <section className="calibratrack-shell" aria-label="CalibraTrack Bench R6X2 application shell">
        <div className="calibratrack-statusbar" aria-live="polite">
          <span>Route: {store.activeRoute}</span>
          <span>Panel: {store.activePanel}</span>
          <span>Records: {store.counts.total}</span>
          <span>Storage: {store.storageStatus}</span>
          {selectedRecord ? <span>Selected: {selectedRecord.assetTag}</span> : <span>No selection</span>}
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
