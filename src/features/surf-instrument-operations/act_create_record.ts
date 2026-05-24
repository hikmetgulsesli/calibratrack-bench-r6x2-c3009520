import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

type CreateRecordStore = Pick<CalibraTrackStore, 'addInstrument'>;

export function actCreateRecord(store: CreateRecordStore) {
  store.addInstrument();
}
