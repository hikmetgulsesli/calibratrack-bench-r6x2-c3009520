import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

type CancelEditStore = Pick<CalibraTrackStore, 'setActivePanel'>;

export function actCancelEdit(store: CancelEditStore) {
  store.setActivePanel('operations');
}
