// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Instrument Operations - CalibraTrack Bench R6X2
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronLeft, ChevronRight, Circle, ListFilter, Plus, Search, Settings } from "lucide-react";


export type InstrumentOperationsCalibratrackBenchR6x2ActionId = "new-calibration-1" | "button-2-2" | "button-3-3" | "certify-4" | "add-reading-5" | "add-instrument-6" | "status-7" | "technician-8" | "date-range-9" | "edit-10" | "edit-11" | "edit-12" | "edit-13" | "button-14-14" | "button-15-15" | "dashboard-1" | "inventory-2" | "calibration-log-3" | "reports-4" | "standards-5" | "support-6" | "archive-7";

export interface InstrumentOperationsCalibratrackBenchR6x2Props {
  actions?: Partial<Record<InstrumentOperationsCalibratrackBenchR6x2ActionId, () => void>>;
}

export function InstrumentOperationsCalibratrackBenchR6x2({ actions }: InstrumentOperationsCalibratrackBenchR6x2Props) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-primary text-primary dark:text-primary-fixed docked left-0 h-full w-64 border-r border-outline-variant dark:border-outline flat no shadows fixed left-0 top-0 h-full flex flex-col py-lg z-40 hidden md:flex">
      <div className="px-lg pb-xl border-b border-outline-variant">
      <h1 className="font-headline-sm text-headline-sm font-extrabold text-on-surface dark:text-on-primary">Bench R6X2</h1>
      <p className="font-label-md text-label-md text-secondary mt-1">Station Active</p>
      </div>
      <div className="flex-1 overflow-y-auto py-md px-sm">
      <ul className="space-y-sm">
      <li>
      <a className="flex items-center gap-md text-on-surface-variant dark:text-surface-variant px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors rounded-lg group" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle className="text-outline group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-lg px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors active:translate-x-1 duration-150 group" href="#" data-action-id="inventory-2" onClick={actions?.["inventory-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Inventory</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md text-on-surface-variant dark:text-surface-variant px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors rounded-lg group" href="#" data-action-id="calibration-log-3" onClick={actions?.["calibration-log-3"]}>
      <Circle className="text-outline group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Calibration Log</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md text-on-surface-variant dark:text-surface-variant px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors rounded-lg group" href="#" data-action-id="reports-4" onClick={actions?.["reports-4"]}>
      <Circle className="text-outline group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Reports</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md text-on-surface-variant dark:text-surface-variant px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors rounded-lg group" href="#" data-action-id="standards-5" onClick={actions?.["standards-5"]}>
      <Circle className="text-outline group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Standards</span>
      </a>
      </li>
      </ul>
      </div>
      <div className="px-lg mt-auto pb-md">
      <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="new-calibration-1" onClick={actions?.["new-calibration-1"]}>
                      New Calibration
                  </button>
      </div>
      <div className="mt-auto border-t border-outline-variant pt-md px-sm pb-md">
      <ul className="space-y-sm">
      <li>
      <a className="flex items-center gap-md text-on-surface-variant dark:text-surface-variant px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors rounded-lg group" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle className="text-outline group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-md text-on-surface-variant dark:text-surface-variant px-md py-sm hover:bg-surface-container-highest dark:hover:bg-primary-container transition-colors rounded-lg group" href="#" data-action-id="archive-7" onClick={actions?.["archive-7"]}>
      <Circle className="text-outline group-hover:text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Archive</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 w-full">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest dark:bg-inverse-surface text-primary dark:text-inverse-primary font-headline-sm text-headline-sm flex justify-between items-center w-full px-margin-desktop h-16 border-b border-outline-variant dark:border-outline flat no shadows sticky top-0 z-30">
      <div className="flex items-center gap-lg flex-1">
      <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed block md:hidden">CalibraTrack</span>
      <div className="hidden md:flex relative w-96">
      <Search className="absolute left-sm top-1/2 transform -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input className="w-full pl-xl pr-sm py-sm bg-surface-container border border-outline-variant rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant transition-colors" placeholder="Search instruments, models, IDs..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md">
      <button className="p-sm text-secondary hover:bg-surface-container rounded-full transition-colors hidden md:block" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="p-sm text-secondary hover:bg-surface-container rounded-full transition-colors hidden md:block" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="h-8 w-px bg-outline-variant mx-sm hidden md:block"></div>
      <button className="hidden md:block bg-surface border border-outline-variant text-primary font-label-md text-label-md py-[6px] px-md rounded hover:bg-surface-container transition-colors" type="button" data-action-id="certify-4" onClick={actions?.["certify-4"]}>
                          Certify
                      </button>
      <button className="bg-primary text-on-primary font-label-md text-label-md py-[6px] px-md rounded hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="add-reading-5" onClick={actions?.["add-reading-5"]}>
                          Add Reading
                      </button>
      <img alt="Technician Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-sm cursor-pointer" data-alt="A close-up portrait of a professional technician in an industrial setting, wearing a clean light grey uniform. The lighting is bright and even, highlighting a modern, reliable corporate aesthetic. The background is a slightly blurred, pristine calibration laboratory to emphasize precision and technical expertise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlX0EfEpivi1ce7tN63hmxoP-QVaUBbkWGKFaCh8frF4blguveH0GGZrMVnCNswZEMNdzleDD0o9jZxY8R193vjX5ty1eusHyJmSi42C9RdRBG34CdmAm6Z_rLeAk2rmUmpXWel-hek9dnDAEJGiNg6iv6r8wOOuVSEXcW8j0JHuuoL3x9oof6EsTImCHPynQ_1__fpnhC_xVXIaPV1X_p74exCFXNfcS07EYrom1c5HbWwbctkmzUpgTWfDw6LC3DAlcO9WfV3Q0h" />
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden">
      <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
      <div>
      <h2 className="font-headline-md text-headline-md text-on-background mb-xs">Instrument Operations</h2>
      <p className="font-body-sm text-body-sm text-secondary">Manage and track equipment calibration status.</p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded hover:bg-primary-container transition-colors flex items-center gap-xs" type="button" data-action-id="add-instrument-6" onClick={actions?.["add-instrument-6"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" /> Add Instrument
                          </button>
      </div>
      </div>
      {/* Summary Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-xs">Total Instruments</span>
      <span className="font-display-lg text-display-lg text-on-surface">124</span>
      </div>
      <div className="bg-error-container/20 border border-error-container rounded p-md flex flex-col relative overflow-hidden">
      <div className="absolute right-0 top-0 w-16 h-16 bg-error/5 rounded-bl-full"></div>
      <span className="font-label-sm text-label-sm text-error uppercase tracking-wider mb-xs relative z-10">Overdue</span>
      <span className="font-display-lg text-display-lg text-error relative z-10">12</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-xs">Active Jobs</span>
      <span className="font-display-lg text-display-lg text-on-surface">8</span>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-xs">Last 24h Activity</span>
      <span className="font-display-lg text-display-lg text-on-surface">42</span>
      </div>
      </div>
      {/* Data Table Section */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col">
      {/* Table Controls */}
      <div className="p-sm md:p-md border-b border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-low/50">
      <div className="w-full md:w-auto flex items-center gap-sm">
      <div className="relative w-full md:w-64">
      <ListFilter className="absolute left-sm top-1/2 transform -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-lg pr-sm py-[6px] bg-surface-container-lowest border border-outline-variant rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant" placeholder="Filter instruments..." type="text" />
      </div>
      </div>
      <div className="w-full md:w-auto flex gap-sm overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
      <button className="whitespace-nowrap bg-surface-container-lowest border border-outline-variant text-secondary font-label-md text-label-md py-[4px] px-sm rounded flex items-center gap-xs hover:bg-surface-container transition-colors" type="button" data-action-id="status-7" onClick={actions?.["status-7"]}>
                                  Status <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="whitespace-nowrap bg-surface-container-lowest border border-outline-variant text-secondary font-label-md text-label-md py-[4px] px-sm rounded flex items-center gap-xs hover:bg-surface-container transition-colors" type="button" data-action-id="technician-8" onClick={actions?.["technician-8"]}>
                                  Technician <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="whitespace-nowrap bg-surface-container-lowest border border-outline-variant text-secondary font-label-md text-label-md py-[4px] px-sm rounded flex items-center gap-xs hover:bg-surface-container transition-colors" type="button" data-action-id="date-range-9" onClick={actions?.["date-range-9"]}>
                                  Date Range <Circle className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant">
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium">ID</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium">Name</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium hidden sm:table-cell">Model</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium hidden lg:table-cell">Last Calibrated</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium">Next Due</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium">Status</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium hidden md:table-cell">Technician</th>
      <th className="font-label-sm text-label-sm text-secondary uppercase py-sm px-md font-medium text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant/50">
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-lowest transition-colors group">
      <td className="py-sm px-md font-data-mono text-data-mono text-on-surface">CAL-8092</td>
      <td className="py-sm px-md font-medium text-on-surface">Digital Multimeter</td>
      <td className="py-sm px-md text-secondary hidden sm:table-cell">Fluke 87V</td>
      <td className="py-sm px-md text-secondary hidden lg:table-cell">2023-10-15</td>
      <td className="py-sm px-md text-on-surface">2024-04-15</td>
      <td className="py-sm px-md">
      <div className="inline-flex items-center gap-[6px] bg-primary-container/10 text-primary px-[6px] py-[2px] rounded font-label-sm text-label-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                              Calibrated
                                          </div>
      </td>
      <td className="py-sm px-md text-secondary hidden md:table-cell">J. Doe</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-container font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100" type="button" data-action-id="edit-10" onClick={actions?.["edit-10"]}>Edit</button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-lowest transition-colors group bg-error-container/5 border-l-2 border-l-error">
      <td className="py-sm px-md font-data-mono text-data-mono text-on-surface pl-[14px]">CAL-8105</td>
      <td className="py-sm px-md font-medium text-on-surface">Torque Wrench</td>
      <td className="py-sm px-md text-secondary hidden sm:table-cell">CDI 2503</td>
      <td className="py-sm px-md text-secondary hidden lg:table-cell">2023-08-01</td>
      <td className="py-sm px-md text-error font-medium">2024-02-01</td>
      <td className="py-sm px-md">
      <div className="inline-flex items-center gap-[6px] bg-error-container/50 text-on-error-container px-[6px] py-[2px] rounded font-label-sm text-label-sm border border-error/20">
      <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
                                              Overdue
                                          </div>
      </td>
      <td className="py-sm px-md text-secondary hidden md:table-cell">A. Smith</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-container font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100" type="button" data-action-id="edit-11" onClick={actions?.["edit-11"]}>Edit</button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-lowest transition-colors group">
      <td className="py-sm px-md font-data-mono text-data-mono text-on-surface">CAL-8112</td>
      <td className="py-sm px-md font-medium text-on-surface">Oscilloscope</td>
      <td className="py-sm px-md text-secondary hidden sm:table-cell">Tek MDO3000</td>
      <td className="py-sm px-md text-secondary hidden lg:table-cell">2023-11-20</td>
      <td className="py-sm px-md text-on-surface">2024-11-20</td>
      <td className="py-sm px-md">
      <div className="inline-flex items-center gap-[6px] bg-surface-variant text-on-surface-variant px-[6px] py-[2px] rounded font-label-sm text-label-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
                                              Pending
                                          </div>
      </td>
      <td className="py-sm px-md text-secondary hidden md:table-cell">M. Johnson</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-container font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100" type="button" data-action-id="edit-12" onClick={actions?.["edit-12"]}>Edit</button>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-lowest transition-colors group">
      <td className="py-sm px-md font-data-mono text-data-mono text-on-surface">CAL-8118</td>
      <td className="py-sm px-md font-medium text-on-surface">Pressure Gauge</td>
      <td className="py-sm px-md text-secondary hidden sm:table-cell">Ashcroft 1009</td>
      <td className="py-sm px-md text-secondary hidden lg:table-cell">2024-01-05</td>
      <td className="py-sm px-md text-on-surface">2025-01-05</td>
      <td className="py-sm px-md">
      <div className="inline-flex items-center gap-[6px] bg-primary-container/10 text-primary px-[6px] py-[2px] rounded font-label-sm text-label-sm">
      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                              Calibrated
                                          </div>
      </td>
      <td className="py-sm px-md text-secondary hidden md:table-cell">J. Doe</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-container font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100" type="button" data-action-id="edit-13" onClick={actions?.["edit-13"]}>Edit</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="p-sm md:p-md border-t border-outline-variant flex justify-between items-center text-secondary font-body-sm text-body-sm">
      <div>Showing 1 to 4 of 124 entries</div>
      <div className="flex gap-xs">
      <button className="p-xs rounded hover:bg-surface-container transition-colors disabled:opacity-50" type="button" data-action-id="button-14-14" onClick={actions?.["button-14-14"]}><ChevronLeft className="text-[20px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-xs rounded hover:bg-surface-container transition-colors" type="button" data-action-id="button-15-15" onClick={actions?.["button-15-15"]}><ChevronRight className="text-[20px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
