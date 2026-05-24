import type { AppRoute, CalibraTrackStore } from '../calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

const routeByAction: Record<string, AppRoute> = {
  'dashboard-1': 'dashboard',
  'inventory-2': 'inventory',
  'calibration-log-3': 'calibration-log',
  'reports-4': 'reports',
  'standards-5': 'standards',
  'support-6': 'support',
  'archive-7': 'archive',
};

export function actSearchRecords(store: CalibraTrackStore, actionId: string) {
  const route = routeByAction[actionId];
  if (route) {
    store.setActiveRoute(route);
  }
}
