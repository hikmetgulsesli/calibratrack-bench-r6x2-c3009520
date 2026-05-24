// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Instrument Editor - CalibraTrack Bench R6X2
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Plus, Save, Trash2, User } from "lucide-react";


export type InstrumentEditorCalibratrackBenchR6x2ActionId = "button-1-1" | "cancel-2" | "save-instrument-3" | "button-4-4" | "button-5-5" | "button-6-6";

export interface InstrumentEditorCalibratrackBenchR6x2Props {
  actions?: Partial<Record<InstrumentEditorCalibratrackBenchR6x2ActionId, () => void>>;
}

export function InstrumentEditorCalibratrackBenchR6x2({ actions }: InstrumentEditorCalibratrackBenchR6x2Props) {
  return (
    <>
      {/* TopNavBar (Nav Suppressed as this is a focused task, but header remains) */}
      <header className="bg-surface-container-lowest border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop h-16 fixed top-0 z-50">
      <div className="flex items-center gap-md">
      <button className="text-secondary hover:bg-surface-container rounded-full p-sm transition-colors" title="Go Back" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-md text-headline-md font-bold text-primary">CalibraTrack Bench R6X2</div>
      <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-sm py-xs rounded font-label-sm text-label-sm ml-md flex items-center gap-xs hidden" id="unsaved-badge">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Unsaved Changes
                  </span>
      </div>
      <div className="flex items-center gap-md">
      <button className="font-label-md text-label-md px-md py-sm border border-outline text-secondary hover:bg-surface-container rounded transition-colors" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                      Cancel
                  </button>
      <button className="font-label-md text-label-md px-md py-sm bg-primary text-on-primary hover:bg-primary-container rounded transition-colors flex items-center gap-xs" type="button" data-action-id="save-instrument-3" onClick={actions?.["save-instrument-3"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" /> Save Instrument
                  </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 mt-16 pt-lg pb-xl px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto w-full">
      <div className="mb-lg flex items-center gap-sm">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Edit Instrument</h1>
      </div>
      <form className="space-y-xl" id="instrument-form">
      {/* Section 1: General Info */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant">
      <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">General Information</h2>
      </div>
      <div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg">
      <div className="col-span-1 md:col-span-2">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="inst-name">Instrument Name <span className="text-error">*</span></label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-body-md text-on-surface transition-colors" id="inst-name" oninput="markUnsaved()" required={true} type="text" value="Fluke 87V Industrial Multimeter" />
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="inst-model">Model Number</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-body-md text-on-surface transition-colors" id="inst-model" oninput="markUnsaved()" type="text" value="87V" />
      </div>
      <div>
      <label className="block font-label-md text-label-md text-error mb-xs" htmlFor="inst-serial">Serial Number <span className="text-error">*</span></label>
      <input className="w-full border border-error rounded bg-error-container/20 px-md py-sm font-data-mono text-data-mono text-on-surface transition-colors" id="inst-serial" oninput="markUnsaved()" required={true} type="text" value="" />
      <p className="font-body-sm text-body-sm text-error mt-xs flex items-center gap-xs">
      <Circle className="text-[14px]" aria-hidden={true} focusable="false" /> Serial number is required
                              </p>
      </div>
      </div>
      </section>
      {/* Section 2: Calibration Specs */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant flex justify-between items-center">
      <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Calibration Specifications</h2>
      <button className="text-primary hover:bg-primary-fixed/20 p-xs rounded transition-colors" title="Add Spec" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="p-lg space-y-md">
      {/* Spec Row 1 */}
      <div className="flex flex-col md:flex-row gap-md items-start md:items-end">
      <div className="flex-1 w-full">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Parameter</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-body-md text-on-surface" oninput="markUnsaved()" type="text" value="DC Voltage" />
      </div>
      <div className="flex-1 w-full">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Range</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-data-mono text-data-mono text-on-surface" oninput="markUnsaved()" type="text" value="0-1000V" />
      </div>
      <div className="flex-1 w-full">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Accuracy / Tolerance</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-data-mono text-data-mono text-on-surface" oninput="markUnsaved()" type="text" value="±(0.05% + 1)" />
      </div>
      <button className="text-outline hover:text-error transition-colors p-sm mb-[2px]" title="Remove Spec" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <Trash2 aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Spec Row 2 */}
      <div className="flex flex-col md:flex-row gap-md items-start md:items-end">
      <div className="flex-1 w-full">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Parameter</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-body-md text-on-surface" oninput="markUnsaved()" type="text" value="AC Voltage" />
      </div>
      <div className="flex-1 w-full">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Range</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-data-mono text-data-mono text-on-surface" oninput="markUnsaved()" type="text" value="0-1000V" />
      </div>
      <div className="flex-1 w-full">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Accuracy / Tolerance</label>
      <input className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-data-mono text-data-mono text-on-surface" oninput="markUnsaved()" type="text" value="±(0.7% + 2)" />
      </div>
      <button className="text-outline hover:text-error transition-colors p-sm mb-[2px]" title="Remove Spec" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <Trash2 aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </section>
      {/* Grid for Schedule & Assignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Section 3: Schedule */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant">
      <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Calibration Schedule</h2>
      </div>
      <div className="p-lg space-y-md">
      <div>
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="inst-freq">Frequency (Months) <span className="text-error">*</span></label>
      <select className="w-full border border-outline-variant rounded bg-surface px-md py-sm font-body-md text-on-surface transition-colors" id="inst-freq" onchange="markUnsaved()" required={true}>
      <option value="3">3 Months (Quarterly)</option>
      <option value="6">6 Months (Semi-Annual)</option>
      <option selected={true} value="12">12 Months (Annual)</option>
      <option value="24">24 Months (Bi-Annual)</option>
      </select>
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="inst-last-cal">Last Calibration Date</label>
      <div className="relative">
      <Circle className="absolute left-md top-1/2 -translate-y-1/2 text-outline-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-xl pr-md py-sm border border-outline-variant rounded bg-surface font-data-mono text-data-mono text-on-surface transition-colors" id="inst-last-cal" oninput="markUnsaved()" type="date" value="2023-10-15" />
      </div>
      </div>
      </div>
      </section>
      {/* Section 4: Assignment */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
      <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant">
      <h2 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Assignment</h2>
      </div>
      <div className="p-lg">
      <div>
      <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="inst-tech">Assigned Technician</label>
      <div className="relative">
      <User className="absolute left-md top-1/2 -translate-y-1/2 text-outline-variant text-[18px]" aria-hidden={true} focusable="false" />
      <select className="w-full pl-xl pr-md py-sm border border-outline-variant rounded bg-surface font-body-md text-on-surface transition-colors" id="inst-tech" onchange="markUnsaved()">
      <option value="unassigned">-- Unassigned --</option>
      <option selected={true} value="tech1">Sarah Jenkins (L3)</option>
      <option value="tech2">Marcus Roe (L2)</option>
      <option value="tech3">David Chen (L1)</option>
      </select>
      </div>
      </div>
      <div className="mt-md bg-surface-container px-md py-sm rounded border border-outline-variant">
      <div className="flex items-center gap-sm">
      <img alt="" className="w-8 h-8 rounded-full" data-alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI0iYWAc3LPY9GkbRBL9buZ8Jy4zcbs1gMdRw4E5hdNbwQKGxQcD0UF5FdglCWFPxx4-7HLtvGZv-sbrX9OiVXMtfGRYr-9at_L2Q5rofkgUlpUyNYlf56Ko57e0-nsu8ih8fbyzVAhu2jYi0kR979G0U-JmuxcrLsSDjMQww65eoFLUFdk-UKZ7cZU8oq1Y86kM1wxvGdeAmzedR4YytCyRRBRFcN6aj6Z6jjNfCmkO1MTVZMewpPVhkJUQKH0bmaH7xVMfC-VloE" />
      <div>
      <p className="font-label-sm text-label-sm text-on-surface">Sarah Jenkins</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Level 3 Metrologist</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </form>
      </main>
      
    </>
  );
}
