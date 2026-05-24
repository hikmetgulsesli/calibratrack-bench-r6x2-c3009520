import { useCallback, useEffect, useMemo, useState } from 'react';
import type {
  AppPanel,
  AppRoute,
  CalibrationRecord,
  CalibrationStatus,
  CalibraTrackPreferences,
} from '../../__fixtures__/calibratrack-bench-r6x2.fixture';
import {
  type CalibraTrackPersistedState,
  type StorageStatus,
  loadCalibraTrackState,
  saveCalibraTrackState,
} from './calibratrack-bench-r6x2.repo';

export type { AppPanel, AppRoute, CalibrationRecord, CalibrationStatus, StorageStatus };

export interface CalibraTrackCounts {
  total: number;
  due: number;
  inProgress: number;
  certified: number;
  archived: number;
}

export interface CalibraTrackAppSnapshot {
  activeScreen: AppPanel;
  activeRoute: AppRoute;
  selectedRecord: CalibrationRecord | null;
  counts: CalibraTrackCounts;
  storageStatus: StorageStatus;
  lastError: string | null;
  activePanel: AppPanel;
}

export interface CalibraTrackStore extends CalibraTrackAppSnapshot {
  records: CalibrationRecord[];
  selectRecord: (recordId: string) => void;
  setActiveRoute: (route: AppRoute) => void;
  setActivePanel: (panel: AppPanel) => void;
  updateSelectedStatus: (status: CalibrationStatus) => void;
  addReading: () => void;
  addInstrument: () => void;
  retryLoad: () => void;
  clearFilters: () => void;
}

const countRecords = (records: CalibrationRecord[]): CalibraTrackCounts => ({
  total: records.length,
  due: records.filter((record) => record.status === 'due').length,
  inProgress: records.filter((record) => record.status === 'in-progress').length,
  certified: records.filter((record) => record.status === 'certified').length,
  archived: records.filter((record) => record.status === 'archived').length,
});

const getSelectedRecord = (records: CalibrationRecord[], selectedRecordId: string | null) =>
  records.find((record) => record.id === selectedRecordId) ?? records[0] ?? null;

const persistablePreferences = (
  preferences: CalibraTrackPreferences,
  updates: Partial<CalibraTrackPreferences>,
): CalibraTrackPreferences => ({
  ...preferences,
  ...updates,
});

const createRecordId = () => `ctb-r6x2-${globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`}`;

export function useCalibraTrackStore(): CalibraTrackStore {
  const [repositorySnapshot, setRepositorySnapshot] = useState(() => loadCalibraTrackState());
  const [state, setState] = useState<CalibraTrackPersistedState>(repositorySnapshot.state);
  const [storageStatus, setStorageStatus] = useState<StorageStatus>(repositorySnapshot.storageStatus);
  const [lastError, setLastError] = useState<string | null>(repositorySnapshot.lastError);

  useEffect(() => {
    const result = saveCalibraTrackState(state);
    setStorageStatus((current) => (current === 'recovered' ? current : result.storageStatus));
    setLastError(result.lastError);
  }, [state]);

  const selectedRecord = useMemo(
    () => getSelectedRecord(state.records, state.preferences.selectedRecordId),
    [state.preferences.selectedRecordId, state.records],
  );

  const counts = useMemo(() => countRecords(state.records), [state.records]);

  const updatePreferences = useCallback((updates: Partial<CalibraTrackPreferences>) => {
    setState((current) => ({
      ...current,
      preferences: persistablePreferences(current.preferences, updates),
    }));
  }, []);

  const setActiveRoute = useCallback(
    (route: AppRoute) => {
      updatePreferences({
        activeRoute: route,
        activePanel: route === 'inventory' ? 'editor' : route === 'archive' ? 'recovery' : 'operations',
      });
    },
    [updatePreferences],
  );

  const setActivePanel = useCallback(
    (panel: AppPanel) => {
      updatePreferences({ activePanel: panel });
    },
    [updatePreferences],
  );

  const selectRecord = useCallback(
    (recordId: string) => {
      updatePreferences({ selectedRecordId: recordId, activePanel: 'editor', activeRoute: 'inventory' });
    },
    [updatePreferences],
  );

  const updateSelectedStatus = useCallback(
    (status: CalibrationStatus) => {
      if (!selectedRecord) {
        updatePreferences({ activePanel: 'recovery' });
        return;
      }

      setState((current) => ({
        ...current,
        records: current.records.map((record) => (record.id === selectedRecord.id ? { ...record, status } : record)),
        preferences: persistablePreferences(current.preferences, {
          selectedRecordId: selectedRecord.id,
          activePanel: 'operations',
          activeRoute: status === 'archived' ? 'archive' : 'calibration-log',
        }),
      }));
    },
    [selectedRecord, updatePreferences],
  );

  const addReading = useCallback(() => {
    if (!selectedRecord) {
      updatePreferences({ activePanel: 'recovery' });
      return;
    }

    setState((current) => ({
      ...current,
      records: current.records.map((record) =>
        record.id === selectedRecord.id
          ? { ...record, readings: record.readings + 1, status: 'in-progress' }
          : record,
      ),
      preferences: persistablePreferences(current.preferences, {
        selectedRecordId: selectedRecord.id,
        activePanel: 'operations',
        activeRoute: 'calibration-log',
      }),
    }));
  }, [selectedRecord, updatePreferences]);

  const addInstrument = useCallback(() => {
    const id = createRecordId();
    const record: CalibrationRecord = {
      id,
      assetTag: 'R6X2-NEW',
      instrumentName: 'New instrument',
      location: 'Bench R6X2',
      technician: 'Unassigned',
      status: 'due',
      dueDate: new Date().toISOString().slice(0, 10),
      lastReading: 'Pending',
      readings: 0,
    };

    setState((current) => ({
      ...current,
      records: [record, ...current.records],
      preferences: persistablePreferences(current.preferences, {
        selectedRecordId: id,
        activePanel: 'editor',
        activeRoute: 'inventory',
      }),
    }));
  }, []);

  const retryLoad = useCallback(() => {
    const nextSnapshot = loadCalibraTrackState();
    setRepositorySnapshot(nextSnapshot);
    setState(nextSnapshot.state);
    setStorageStatus(nextSnapshot.storageStatus);
    setLastError(nextSnapshot.lastError);
  }, []);

  const clearFilters = useCallback(() => {
    updatePreferences({ activeRoute: 'dashboard', activePanel: 'operations' });
    setLastError(null);
  }, [updatePreferences]);

  return {
    activeScreen: state.preferences.activePanel,
    activeRoute: state.preferences.activeRoute,
    selectedRecord,
    records: state.records,
    counts,
    storageStatus,
    lastError,
    activePanel: state.preferences.activePanel,
    selectRecord,
    setActiveRoute,
    setActivePanel,
    updateSelectedStatus,
    addReading,
    addInstrument,
    retryLoad,
    clearFilters,
  };
}
