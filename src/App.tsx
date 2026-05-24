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
  const {
    activePanel,
    activeRoute,
    activeScreen,
    addInstrument,
    addReading,
    clearFilters,
    counts,
    lastError,
    retryLoad,
    selectedRecord,
    selectRecord,
    setActivePanel,
    setActiveRoute,
    storageStatus,
    updateSelectedStatus,
  } = store;

  const bridgeSnapshot = useMemo(
    () => ({
      activeScreen,
      activeRoute,
      selectedRecord,
      counts,
      storageStatus,
      lastError,
      activePanel,
    }),
    [activePanel, activeRoute, activeScreen, counts, lastError, selectedRecord, storageStatus],
  );

  useEffect(() => {
    publishAppBridge(bridgeSnapshot);
  }, [bridgeSnapshot]);

  const navigate = useCallback((actionId: string) => {
    const route = routeByAction[actionId];
    if (route) {
      setActiveRoute(route);
    }
  }, [setActiveRoute]);

  const selectRecordForEditAction = useCallback((actionId: InstrumentOperationsCalibratrackBenchR6x2ActionId) => {
    const recordId = recordIdByEditAction[actionId];
    if (recordId) {
      selectRecord(recordId);
    }
  }, [selectRecord]);

  const operationsActions = useMemo<Partial<Record<InstrumentOperationsCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => setActiveRoute('calibration-log'),
      'button-2-2': () => setActiveRoute('reports'),
      'button-3-3': () => setActiveRoute('standards'),
      'certify-4': () => updateSelectedStatus('certified'),
      'add-reading-5': addReading,
      'add-instrument-6': addInstrument,
      'status-7': () => updateSelectedStatus('in-progress'),
      'technician-8': () => setActiveRoute('inventory'),
      'date-range-9': () => setActiveRoute('calibration-log'),
      'edit-10': () => selectRecordForEditAction('edit-10'),
      'edit-11': () => selectRecordForEditAction('edit-11'),
      'edit-12': () => selectRecordForEditAction('edit-12'),
      'edit-13': () => selectRecordForEditAction('edit-13'),
      'button-14-14': () => setActiveRoute('support'),
      'button-15-15': () => setActiveRoute('archive'),
      'dashboard-1': () => navigate('dashboard-1'),
      'inventory-2': () => navigate('inventory-2'),
      'calibration-log-3': () => navigate('calibration-log-3'),
      'reports-4': () => navigate('reports-4'),
      'standards-5': () => navigate('standards-5'),
      'support-6': () => navigate('support-6'),
      'archive-7': () => navigate('archive-7'),
    }),
    [addInstrument, addReading, navigate, selectRecordForEditAction, setActiveRoute, updateSelectedStatus],
  );

  const editorActions = useMemo<Partial<Record<InstrumentEditorCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'button-1-1': () => setActivePanel('operations'),
      'cancel-2': () => setActivePanel('operations'),
      'save-instrument-3': () => setActivePanel('operations'),
      'button-4-4': addReading,
      'button-5-5': () => updateSelectedStatus('due'),
      'button-6-6': () => updateSelectedStatus('archived'),
    }),
    [addReading, setActivePanel, updateSelectedStatus],
  );

  const recoveryActions = useMemo<Partial<Record<EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId, () => void>>>(
    () => ({
      'new-calibration-1': () => setActiveRoute('calibration-log'),
      'add-reading-2': addReading,
      'certify-3': () => updateSelectedStatus('certified'),
      'button-4-4': () => setActiveRoute('support'),
      'button-5-5': () => setActiveRoute('standards'),
      'retry-load-6': retryLoad,
      'add-instrument-7': addInstrument,
      'clear-all-filters-8': clearFilters,
      'dashboard-1': () => navigate('dashboard-1'),
      'inventory-2': () => navigate('inventory-2'),
      'calibration-log-3': () => navigate('calibration-log-3'),
      'reports-4': () => navigate('reports-4'),
      'standards-5': () => navigate('standards-5'),
      'support-6': () => navigate('support-6'),
      'archive-7': () => navigate('archive-7'),
    }),
    [addInstrument, addReading, clearFilters, navigate, retryLoad, setActiveRoute, updateSelectedStatus],
  );

  return (
    <div data-setfarm-root="calibratrack-bench-r6x2" className="min-h-screen bg-[#f4f2ec] text-[#171914]">
      <section className="calibratrack-shell" aria-label="CalibraTrack Bench R6X2 application shell">
        <div className="calibratrack-statusbar" aria-live="polite">
          <span>Route: {activeRoute}</span>
          <span>Panel: {activePanel}</span>
          <span>Records: {counts.total}</span>
          <span>Storage: {storageStatus}</span>
          {selectedRecord ? <span>Selected: {selectedRecord.assetTag}</span> : <span>No selection</span>}
          {lastError ? <strong>{lastError}</strong> : null}
        </div>

        {activePanel === 'editor' ? (
          <InstrumentEditorCalibratrackBenchR6x2 actions={editorActions} />
        ) : activePanel === 'recovery' ? (
          <EmptyAndErrorRecoveryCalibratrackBenchR6x2 actions={recoveryActions} />
        ) : (
          <InstrumentOperationsCalibratrackBenchR6x2 actions={operationsActions} />
        )}
      </section>
    </div>
  );
}
