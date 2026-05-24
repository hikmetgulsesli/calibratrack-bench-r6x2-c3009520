import { useCallback, useEffect, useMemo } from 'react';
import {
  EmptyAndErrorRecoveryCalibratrackBenchR6x2,
  type EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId,
  InstrumentEditorCalibratrackBenchR6x2,
  type InstrumentEditorCalibratrackBenchR6x2ActionId,
  InstrumentOperationsCalibratrackBenchR6x2,
  type InstrumentOperationsCalibratrackBenchR6x2ActionId,
} from './screens';
import { publishAppBridge } from './test/bridge';
import { type AppRoute, useCalibraTrackStore } from './features/calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

const routeByAction: Record<string, AppRoute> = {
  'dashboard-1': 'dashboard',
  'inventory-2': 'inventory',
  'calibration-log-3': 'calibration-log',
  'reports-4': 'reports',
  'standards-5': 'standards',
  'support-6': 'support',
  'archive-7': 'archive',
};

const recordIdByEditAction: Partial<Record<InstrumentOperationsCalibratrackBenchR6x2ActionId, string>> = {
  'edit-10': 'ctb-r6x2-001',
  'edit-11': 'ctb-r6x2-002',
  'edit-12': 'ctb-r6x2-003',
  'edit-13': 'ctb-r6x2-004',
};

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

  const navigate = useCallback((actionId: string) => {
    const route = routeByAction[actionId];
    if (route) {
      store.setActiveRoute(route);
    }
  }, [store]);

  const selectRecordForEditAction = useCallback((actionId: InstrumentOperationsCalibratrackBenchR6x2ActionId) => {
    const recordId = recordIdByEditAction[actionId];
    if (recordId) {
      store.selectRecord(recordId);
    }
  }, [store]);

  const operationsActions = useMemo<Partial<Record<InstrumentOperationsCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => store.setActiveRoute('calibration-log'),
      'button-2-2': () => store.setActiveRoute('reports'),
      'button-3-3': () => store.setActiveRoute('standards'),
      'certify-4': () => store.updateSelectedStatus('certified'),
      'add-reading-5': store.addReading,
      'add-instrument-6': store.addInstrument,
      'status-7': () => store.updateSelectedStatus('in-progress'),
      'technician-8': () => store.setActiveRoute('inventory'),
      'date-range-9': () => store.setActiveRoute('calibration-log'),
      'edit-10': () => selectRecordForEditAction('edit-10'),
      'edit-11': () => selectRecordForEditAction('edit-11'),
      'edit-12': () => selectRecordForEditAction('edit-12'),
      'edit-13': () => selectRecordForEditAction('edit-13'),
      'button-14-14': () => store.setActiveRoute('support'),
      'button-15-15': () => store.setActiveRoute('archive'),
      'dashboard-1': () => navigate('dashboard-1'),
      'inventory-2': () => navigate('inventory-2'),
      'calibration-log-3': () => navigate('calibration-log-3'),
      'reports-4': () => navigate('reports-4'),
      'standards-5': () => navigate('standards-5'),
      'support-6': () => navigate('support-6'),
      'archive-7': () => navigate('archive-7'),
    }),
    [navigate, selectRecordForEditAction, store],
  );

  const editorActions = useMemo<Partial<Record<InstrumentEditorCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'button-1-1': () => store.setActivePanel('operations'),
      'cancel-2': () => store.setActivePanel('operations'),
      'save-instrument-3': () => store.setActivePanel('operations'),
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
      'retry-load-6': store.retryLoad,
      'add-instrument-7': store.addInstrument,
      'clear-all-filters-8': store.clearFilters,
      'dashboard-1': () => navigate('dashboard-1'),
      'inventory-2': () => navigate('inventory-2'),
      'calibration-log-3': () => navigate('calibration-log-3'),
      'reports-4': () => navigate('reports-4'),
      'standards-5': () => navigate('standards-5'),
      'support-6': () => navigate('support-6'),
      'archive-7': () => navigate('archive-7'),
    }),
    [navigate, store],
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
