---
name: CalibraTrack Bench R6X2
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45474c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for precision, reliability, and high-density data management within industrial calibration environments. It targets technical professionals who require an interface that prioritizes functional clarity over aesthetic flourish. 

The visual style is **Corporate / Modern** with a focus on **Industrial Utility**. It utilizes a semi-flat approach where hierarchy is established through a systematic application of tonal layers and subtle, high-precision borders. The interface must evoke a sense of "instrument-grade" stability—unwavering, predictable, and highly efficient. Every pixel is dedicated to the accuracy of the calibration workflow, minimizing cognitive load through structured information architecture and a "form follows function" philosophy.

## Colors

The color palette is rooted in a professional, technical spectrum designed for long-term use in varied lighting conditions. 

- **Primary (Deep Slate Navy):** Used for navigation, primary actions, and branding to convey authority and stability.
- **Success (Industrial Emerald):** Reserved for "Pass" states, completed calibrations, and active systems.
- **Warning (Amber):** Indicates pending tasks, upcoming expirations, or non-critical deviations.
- **Danger (Signal Red):** High-visibility red for failed calibrations, critical errors, and emergency stop actions.
- **Neutrals:** A cool-toned gray scale is used to define the application's structure. Surfaces utilize a clean white background, while borders and secondary text use mid-to-high contrast grays to ensure WCAG AA compliance and crisp definition between data cells.

## Typography

This design system utilizes **Inter** for its exceptional legibility and neutral, systematic character. The type scale is optimized for high-density layouts, favoring smaller font sizes with generous line-heights to maintain readability in complex data tables. 

A specialized `data-mono` style is introduced for instrument readings, serial numbers, and calibration tolerances to ensure character alignment and prevent visual "jitter" when values update. Labels use a slightly heavier weight and uppercase transform to create clear section headers within compact forms.

## Layout & Spacing

The system employs a **4px baseline grid** to ensure mathematical precision in element alignment. 

- **Layout Model:** A 12-column fluid grid for desktop views, collapsing to 4 columns for mobile/tablet handheld scanners.
- **Density:** The "Compact" setting is the default. Padding in data tables is restricted to 8px vertically to maximize information visibility without sacrificing touch targets.
- **Reflow:** On mobile devices, sidebars collapse into a drawer, and data tables transition to a "card-stack" or "list-item" view to prioritize the calibration status indicator and the "Next Action" button.

## Elevation & Depth

Depth is handled through **Tonal Layering** and **Low-Contrast Outlines**. 

1. **Level 0 (Base):** The main canvas, set in a neutral off-white.
2. **Level 1 (Surface):** White containers (cards, table headers) with a 1px border (#E2E8F0).
3. **Level 2 (Active):** Used for modals and dropdowns, featuring a very subtle ambient shadow (0px 4px 6px -1px rgba(0, 0, 0, 0.1)) to provide focus without breaking the industrial aesthetic.

Avoid using heavy drop shadows. Instead, use background color shifts (e.g., a faint gray fill) to denote hover states or interactive regions.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough curvature to feel modern and accessible while maintaining the rigid, "machined" look of a technical instrument. 

- **Standard Elements:** 4px radius (Buttons, Inputs, Checkboxes).
- **Large Elements:** 8px radius (Summary Cards, Modals).
- **Indicators:** Status "pills" or "dots" may use a full 100px (pill-shape) radius to clearly distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid Deep Slate Navy with white text. High contrast, reserved for the final step in a calibration workflow (e.g., "Certify Results").
- **Secondary:** Outline style with 1px Slate border and Slate text. Used for navigation and additive actions (e.g., "Add Reading").

### Data Tables
- **Structure:** 1px horizontal borders only. Alternate row striping is optional but recommended for tables exceeding 10 columns.
- **Status Indicators:** A leading 8px colored dot or a subtle background-tinted tag (e.g., light emerald background with dark emerald text) to show "Pass/Fail" status.

### Form Fields
- **Inputs:** 1px border with a focused state that uses a 2px primary blue ring. Labels are positioned above the field in `label-md` style.
- **Validation:** Error states must use the Danger Red for both the border and a small helper text below the field.

### Summary Metric Cards
- Large, bold numerical values (using `display-lg`) for key stats like "Tools Overdue" or "Daily Throughput." These should be placed at the top of dashboards for immediate situational awareness.

### Status Chips
- Small, compact badges with `label-sm` typography. Used within tables to denote calibration frequency (e.g., "ANNUAL", "BI-WEEKLY").