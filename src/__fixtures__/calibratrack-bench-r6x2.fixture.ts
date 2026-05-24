export type CalibrationStatus = 'due' | 'in-progress' | 'certified' | 'archived';

export interface CalibrationRecord {
  id: string;
  assetTag: string;
  instrumentName: string;
  location: string;
  technician: string;
  status: CalibrationStatus;
  dueDate: string;
  lastReading: string;
  readings: number;
}

export interface CalibraTrackPreferences {
  activeRoute: AppRoute;
  activePanel: AppPanel;
  selectedRecordId: string | null;
}

export type AppRoute = 'dashboard' | 'inventory' | 'calibration-log' | 'reports' | 'standards' | 'support' | 'archive';
export type AppPanel = 'operations' | 'editor' | 'recovery';

export const calibratrackBenchR6x2Fixture: CalibrationRecord[] = [
  {
    id: 'ctb-r6x2-001',
    assetTag: 'R6X2-TQ-014',
    instrumentName: 'Torque transducer',
    location: 'Bench R6X2',
    technician: 'Mara Chen',
    status: 'due',
    dueDate: '2026-06-03',
    lastReading: '24.98 Nm',
    readings: 12,
  },
  {
    id: 'ctb-r6x2-002',
    assetTag: 'R6X2-PR-221',
    instrumentName: 'Pressure reference',
    location: 'Bench R6X2',
    technician: 'Owen Patel',
    status: 'in-progress',
    dueDate: '2026-05-29',
    lastReading: '101.31 kPa',
    readings: 8,
  },
  {
    id: 'ctb-r6x2-003',
    assetTag: 'R6X2-DMM-073',
    instrumentName: 'Digital multimeter',
    location: 'Electronics bay',
    technician: 'Iris Novak',
    status: 'certified',
    dueDate: '2026-07-15',
    lastReading: '4.9998 V',
    readings: 21,
  },
  {
    id: 'ctb-r6x2-004',
    assetTag: 'R6X2-TMP-118',
    instrumentName: 'Temperature probe',
    location: 'Thermal station',
    technician: 'Sam Rivera',
    status: 'archived',
    dueDate: '2026-04-18',
    lastReading: '37.2 C',
    readings: 5,
  },
];

export const defaultCalibraTrackPreferences: CalibraTrackPreferences = {
  activeRoute: 'dashboard',
  activePanel: 'operations',
  selectedRecordId: calibratrackBenchR6x2Fixture[0]?.id ?? null,
};
