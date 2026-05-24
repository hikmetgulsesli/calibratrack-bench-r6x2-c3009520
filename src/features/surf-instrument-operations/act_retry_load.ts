import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

type RetryLoadStore = Pick<CalibraTrackStore, 'retryLoad'>;

export function actRetryLoad(store: RetryLoadStore) {
  store.retryLoad();
}
