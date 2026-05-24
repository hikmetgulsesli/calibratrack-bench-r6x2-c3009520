import {
  type CalibrationRecord,
  type CalibraTrackPreferences,
  calibratrackBenchR6x2Fixture,
  defaultCalibraTrackPreferences,
} from '../../__fixtures__/calibratrack-bench-r6x2.fixture';

const STORAGE_KEY = 'calibratrack-bench-r6x2:v1';

export interface CalibraTrackPersistedState {
  records: CalibrationRecord[];
  preferences: CalibraTrackPreferences;
}

export type StorageStatus = 'ready' | 'restored' | 'recovered' | 'unavailable';

export interface RepositorySnapshot {
  state: CalibraTrackPersistedState;
  storageStatus: StorageStatus;
  lastError: string | null;
}

const fallbackState = (): CalibraTrackPersistedState => ({
  records: calibratrackBenchR6x2Fixture,
  preferences: defaultCalibraTrackPreferences,
});

const isRecord = (value: unknown): value is CalibrationRecord => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const record = value as Partial<CalibrationRecord>;
  return (
    typeof record.id === 'string' &&
    typeof record.assetTag === 'string' &&
    typeof record.instrumentName === 'string' &&
    typeof record.location === 'string' &&
    typeof record.technician === 'string' &&
    typeof record.status === 'string' &&
    typeof record.dueDate === 'string' &&
    typeof record.lastReading === 'string' &&
    typeof record.readings === 'number'
  );
};

const isPersistedState = (value: unknown): value is CalibraTrackPersistedState => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const state = value as Partial<CalibraTrackPersistedState>;
  const preferences = state.preferences as Partial<CalibraTrackPreferences> | undefined;

  return (
    Array.isArray(state.records) &&
    state.records.every(isRecord) &&
    !!preferences &&
    typeof preferences.activeRoute === 'string' &&
    typeof preferences.activePanel === 'string' &&
    (preferences.selectedRecordId === null || typeof preferences.selectedRecordId === 'string')
  );
};

export function loadCalibraTrackState(storage: Storage | undefined = globalThis.localStorage): RepositorySnapshot {
  const state = fallbackState();

  if (!storage) {
    return {
      state,
      storageStatus: 'unavailable',
      lastError: 'Local storage is not available in this browser context.',
    };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) {
      storage.setItem(STORAGE_KEY, JSON.stringify(state));
      return { state, storageStatus: 'ready', lastError: null };
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!isPersistedState(parsed)) {
      storage.setItem(STORAGE_KEY, JSON.stringify(state));
      return {
        state,
        storageStatus: 'recovered',
        lastError: 'Saved CalibraTrack data was invalid and has been reset.',
      };
    }

    return { state: parsed, storageStatus: 'restored', lastError: null };
  } catch {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      return {
        state,
        storageStatus: 'unavailable',
        lastError: 'CalibraTrack could not write recovered data to local storage.',
      };
    }

    return {
      state,
      storageStatus: 'recovered',
      lastError: 'Saved CalibraTrack data could not be read and has been reset.',
    };
  }
}

export function saveCalibraTrackState(
  state: CalibraTrackPersistedState,
  storage: Storage | undefined = globalThis.localStorage,
): { storageStatus: StorageStatus; lastError: string | null } {
  if (!storage) {
    return {
      storageStatus: 'unavailable',
      lastError: 'Local storage is not available in this browser context.',
    };
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(state));
    return { storageStatus: 'ready', lastError: null };
  } catch {
    return {
      storageStatus: 'unavailable',
      lastError: 'CalibraTrack changes could not be saved to local storage.',
    };
  }
}
