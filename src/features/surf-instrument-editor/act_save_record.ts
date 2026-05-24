import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

export function actSaveRecord(store: CalibraTrackStore) {
  store.setActivePanel('operations');
}
