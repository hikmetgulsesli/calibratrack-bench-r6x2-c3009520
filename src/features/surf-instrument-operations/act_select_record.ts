import type { CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

const recordIdByEditAction: Record<string, string> = {
  'edit-10': 'ctb-r6x2-001',
  'edit-11': 'ctb-r6x2-002',
  'edit-12': 'ctb-r6x2-003',
  'edit-13': 'ctb-r6x2-004',
};

export function actSelectRecord(store: CalibraTrackStore, actionId: string) {
  const recordId = recordIdByEditAction[actionId];
  if (recordId) {
    store.selectRecord(recordId);
  }
}
