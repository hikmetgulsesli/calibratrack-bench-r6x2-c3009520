import type { CalibraTrackAppSnapshot } from '../features/calibratrack-bench-r6x2/calibratrack-bench-r6x2.store';

declare global {
  interface Window {
    app?: CalibraTrackAppSnapshot;
  }
}

export function publishAppBridge(snapshot: CalibraTrackAppSnapshot) {
  if (typeof window !== 'undefined') {
    window.app = snapshot;
  }
}
