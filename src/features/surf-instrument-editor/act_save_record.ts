import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

type SaveRecordStore = Pick<CalibraTrackStore, 'selectedRecord' | 'setActivePanel' | 'updateSelectedStatus'>;

export function actSaveRecord(store: SaveRecordStore) {
  if (!store.selectedRecord) {
    store.setActivePanel('recovery');
    return;
  }

  store.updateSelectedStatus(store.selectedRecord.status);
}
