import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

export function actRetryLoad(store: CalibraTrackStore) {
  store.retryLoad();
}
