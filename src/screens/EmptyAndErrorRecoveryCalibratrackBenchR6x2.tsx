// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - CalibraTrack Bench R6X2
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Plus, RefreshCw, Search, Server, Settings } from "lucide-react";


export type EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId = "new-calibration-1" | "add-reading-2" | "certify-3" | "button-4-4" | "button-5-5" | "retry-load-6" | "add-instrument-7" | "clear-all-filters-8" | "dashboard-1" | "inventory-2" | "calibration-log-3" | "reports-4" | "standards-5" | "support-6" | "archive-7";

export interface EmptyAndErrorRecoveryCalibratrackBenchR6x2Props {
  actions?: Partial<Record<EmptyAndErrorRecoveryCalibratrackBenchR6x2ActionId, () => void>>;
}

export function EmptyAndErrorRecoveryCalibratrackBenchR6x2({ actions }: EmptyAndErrorRecoveryCalibratrackBenchR6x2Props) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="hidden md:flex flex-col flex-shrink-0 docked left-0 h-full w-64 bg-surface-container-low border-r border-outline-variant py-lg z-40">
      {/* Header */}
      <div className="px-md mb-xl flex items-center gap-md">
      <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center flex-shrink-0">
      <Circle className="text-on-primary-container" aria-hidden={true} focusable="false" />
      </div>
      <button aria-label="Bench R6X2 Station Active" className="text-left rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="button" data-action-id="inventory-2" onClick={actions?.["inventory-2"]}>
      <h1 className="font-headline-sm text-headline-sm font-extrabold text-on-surface truncate">Bench R6X2 Station Active</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">Inventory workspace</p>
      </button>
      </div>
      {/* CTA */}
      <div className="px-md mb-lg">
      <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded flex items-center justify-center gap-sm transition-colors hover:bg-primary/90 active:scale-95 duration-100 shadow-[0_1px_2px_rgba(0,0,0,0.1)]" type="button" data-action-id="new-calibration-1" onClick={actions?.["new-calibration-1"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                      New Calibration
                  </button>
      </div>
      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-sm flex flex-col gap-unit">
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-highest transition-colors active:translate-x-1 duration-150" href="#" data-action-id="dashboard-1" onClick={actions?.["dashboard-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a aria-current="page" className="flex items-center gap-md bg-secondary-container text-on-secondary-container rounded-lg px-md py-sm transition-colors active:translate-x-1 duration-150" href="#" data-action-id="inventory-2" onClick={actions?.["inventory-2"]}>
      <Circle data-weight="fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Inventory</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-highest transition-colors active:translate-x-1 duration-150" href="#" data-action-id="calibration-log-3" onClick={actions?.["calibration-log-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Calibration Log</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-highest transition-colors active:translate-x-1 duration-150" href="#" data-action-id="reports-4" onClick={actions?.["reports-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Reports</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-highest transition-colors active:translate-x-1 duration-150" href="#" data-action-id="standards-5" onClick={actions?.["standards-5"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Standards</span>
      </a>
      </div>
      {/* Footer Navigation */}
      <div className="px-sm pt-md border-t border-outline-variant mt-auto flex flex-col gap-unit">
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-highest transition-colors active:translate-x-1 duration-150" href="#" data-action-id="support-6" onClick={actions?.["support-6"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Support</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant px-md py-sm rounded-lg hover:bg-surface-container-highest transition-colors active:translate-x-1 duration-150" href="#" data-action-id="archive-7" onClick={actions?.["archive-7"]}>
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Archive</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
      {/* TopNavBar (Shared Component) */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 bg-surface-container-lowest border-b border-outline-variant flex-shrink-0 z-30">
      {/* Brand / Search Area */}
      <div className="flex items-center gap-xl flex-1">
      <div className="font-headline-md text-headline-md font-bold text-primary truncate hidden lg:block">
                          CalibraTrack Bench R6X2
                      </div>
      <div className="relative w-full max-w-md">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface border border-outline-variant rounded pl-xl pr-sm py-sm text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Search instruments, standards..." type="text" />
      </div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-md ml-auto">
      <button className="hidden md:flex items-center justify-center px-md py-sm border border-secondary text-secondary rounded font-label-md text-label-md hover:bg-surface-container transition-colors active:scale-95 duration-100" type="button" data-action-id="add-reading-2" onClick={actions?.["add-reading-2"]}>
                          Add Reading
                      </button>
      <button className="hidden md:flex items-center justify-center px-md py-sm bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary/90 transition-colors active:scale-95 duration-100" type="button" data-action-id="certify-3" onClick={actions?.["certify-3"]}>
                          Certify
                      </button>
      <div className="h-6 w-px bg-outline-variant mx-sm hidden md:block"></div>
      <button aria-label="Notifications" className="p-sm text-on-surface-variant hover:bg-surface-container rounded-full transition-colors flex items-center justify-center" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="p-sm text-on-surface-variant hover:bg-surface-container rounded-full transition-colors flex items-center justify-center" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant overflow-hidden ml-sm flex-shrink-0 cursor-pointer">
      <img alt="Technician Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuzbw5fmjcn3snnJYdqlDpGQYWk2omEsCREXi5TiMMYpZGYLL-AMN22pUBXvGmYheOYhE2_2tCn_h4_Na17fW6XVnSKVDy2xuMhvg7nw3r6LcwBu_tTTwQBsJ4vL4eS0XCgIYG3ZKDvAFuQn8tsuUaf_q11w8UfTjD1j1Ma-H9YKJBWMP5iEGqmcJi93IDkZaRTI8NhSGlcVIoc_c9z322Ua_69CK58e1WPaBVLg65YT_phkUzAsNqDTYFzkNcc-9KbRvJpjPYYBxM" />
      </div>
      </div>
      </header>
      {/* Main Canvas (Error State) */}
      <main className="flex-1 overflow-y-auto p-margin-desktop flex items-center justify-center bg-background relative">
      {/* Atmospheric background element (subtle grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: "radial-gradient(#191c1e 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
      {/* Error Recovery Panel (Level 1 Surface) */}
      <div className="relative z-10 w-full max-w-lg bg-surface-container-lowest border border-outline-variant rounded-lg p-xl flex flex-col items-center text-center shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
      {/* Icon Indicator */}
      <div className="w-16 h-16 rounded-full bg-error-container/30 border border-error-container flex items-center justify-center mb-lg">
      <Circle style={{fontVariationSettings: "'FILL' 1"}} className="text-[32px] text-error" aria-hidden={true} focusable="false" />
      </div>
      {/* Content */}
      <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Connection Error</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm">
                          We encountered an error loading the calibration records. The database node may be temporarily unreachable or undergoing maintenance.
                      </p>
      {/* Technical Details Block */}
      <div className="w-full bg-surface flex items-start gap-sm border border-outline-variant rounded p-sm mb-xl text-left">
      <button aria-label="dns" className="text-on-surface-variant mt-0.5 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-xs" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
      <Server className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">dns</span>
      </button>
      <div>
      <span className="block font-label-sm text-label-sm text-on-surface-variant mb-xs">Diagnostic Info</span>
      <code className="block font-data-mono text-data-mono text-on-surface break-all">Error Code: ERR_DATA_LOAD_TIMEOUT</code>
      </div>
      </div>
      {/* Actions */}
      <div className="w-full flex flex-col gap-md">
      <div className="flex flex-col sm:flex-row gap-md w-full">
      <button className="flex-1 bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded flex items-center justify-center gap-sm transition-colors hover:bg-primary/90 active:scale-95 duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="button" data-action-id="retry-load-6" onClick={actions?.["retry-load-6"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Retry Load
                              </button>
      <button className="flex-1 border border-secondary text-secondary font-label-md text-label-md py-sm px-md rounded flex items-center justify-center gap-sm transition-colors hover:bg-surface-container active:scale-95 duration-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary" type="button" data-action-id="add-instrument-7" onClick={actions?.["add-instrument-7"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Add Instrument
                              </button>
      </div>
      <button className="mt-sm text-secondary hover:text-primary font-label-md text-label-md transition-colors focus:outline-none underline decoration-transparent hover:decoration-primary underline-offset-4" type="button" data-action-id="clear-all-filters-8" onClick={actions?.["clear-all-filters-8"]}>
                              Clear All Filters
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
