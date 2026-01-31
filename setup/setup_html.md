# Modus Web Components — Setup

A minimal one-time boiler-plate that every HTML page using Modus Web Components needs.

---

## 1. CSS

```html
<!-- Modus component tokens & styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/moduswebcomponents/modus-wc-styles.css"
/>

<!-- Tailwind CSS for utility classes -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Modus Icons -->
<link
  rel="preload"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/field-systems/fonts/modus-icons.css"
  as="style"
  crossorigin="anonymous"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/field-systems/fonts/modus-icons.css"
/>

<!-- Google Fonts: Open Sans -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
  rel="stylesheet"
/>

<!-- Chart.js for data visualization -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### 1.1 Modus Color Palette

Using the correct colors is fundamental to branding. The Modus color palette is defined as CSS custom properties (variables) in the `:root` pseudo-class for easy reuse.

Place the following inside a `<style>` tag in your HTML `<head>`:

```css
:root {
  --modus-blue-primary
  --modus-blue-accent
  --modus-gray-90
  --modus-gray-70
  --modus-gray-20
  --modus-gray-10
  --modus-white
  --modus-green-success
  --modus-red-alert
  --modus-yellow-warning
  --modus-chart-text
  --modus-chart-grid
  --modus-wc-color-base-page
  --modus-color-bg-2
  --modus-color-bg-3
  --modus-color-text-1
  --modus-color-border-1
  --modus-color-secondary

  }
```

## 2. JavaScript loader

```html
<script type="module">
  import { defineCustomElements } from "https://cdn.jsdelivr.net/npm/@trimble-oss/moduswebcomponents/loader/index.js";

  // registers all <modus-wc-*> tags once the module finishes loading
  defineCustomElements();
</script>
```

---

## 3. Theme attribute

The root `<html>` tag must carry a `data-theme` that matches one of the shipped themes:

```html
<html lang="en" data-theme="modus-classic-light"></html>
```

Available values: `modus-modern-light` · `modus-modern-dark` · `modus-classic-light` · `modus-classic-dark`.

---

## 4. Runtime theme switch helper

```html
<select
  onchange="document.documentElement.setAttribute('data-theme', this.value)"
>
  <option value="modus-modern-light">Modern Light</option>
  <option value="modus-modern-dark">Modern Dark</option>
  <option value="modus-classic-light">Classic Light</option>
  <option value="modus-classic-dark">Classic Dark</option>
</select>
```

Persist the user's choice by writing the value to `localStorage` and re-applying it on `DOMContentLoaded` if desired.

---

## 5. Sanity check snippet

After the script loader runs, the custom elements are available:

```js
console.log(
  "Button defined:",
  customElements.get("modus-wc-button") !== undefined
);
```

If the log prints `true`, you're ready to embed any `<modus-wc-*>` component.

---

## 🚨 Common Pitfalls to Avoid

Based on frequent mistakes, here are the top issues to watch out for:

### Component-Specific Gotchas

**modus-wc-select** — Does NOT use child `<option>` elements. Set options via JavaScript:

```js
selectElement.options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];
```

**modus-wc-alert** — Uses specific attribute names:

```html
<!-- ❌ WRONG -->
<modus-wc-alert type="success" message="Hello"></modus-wc-alert>
<!-- ✅ CORRECT -->
<modus-wc-alert variant="success" alert-title="Hello"></modus-wc-alert>
```

**modus-wc-toast** — NOT a service component. Create elements dynamically:

```js
// ❌ WRONG: toast.show({ message: 'Hello' });
// ✅ CORRECT: Create and append toast elements with alert content
const toast = document.createElement("modus-wc-toast");
const alert = document.createElement("modus-wc-alert");
alert.setAttribute("alert-title", "Hello");
toast.appendChild(alert);
document.body.appendChild(toast);
```

**modus-wc-collapse** — Titles set via JavaScript options, NOT HTML attributes:

```html
<!-- ❌ WRONG -->
<modus-wc-collapse title="My Title"></modus-wc-collapse>
<!-- ✅ CORRECT -->
<modus-wc-collapse id="my-collapse"></modus-wc-collapse>
<script>
  document.getElementById("my-collapse").options = {
    title: "My Title",
    description: "Subtitle",
    icon: "help",
  };
</script>
```

### General Rules

- **Attribute names matter**: Many components use specific attribute names (e.g., `alert-title` not `title`)
- **Check the docs**: Each component has unique patterns—don't assume standard HTML behavior
- **Properties vs attributes**: Some complex data (like arrays) must be set via JavaScript properties, not HTML attributes

### Setting JavaScript Properties

Many Modus components require configuration via JavaScript properties rather than HTML attributes. Always wait for components to be defined before setting properties:

```js
document.addEventListener("DOMContentLoaded", function () {
  // Wait for components to be ready, then configure
  const myComponent = document.getElementById("my-component");
  if (myComponent) {
    // Set complex properties
    myComponent.options = { title: "Hello", icon: "star" };
    myComponent.data = [{ label: "Item 1", value: "1" }];
  }
});
```

**Common property patterns:**

- `element.options = { ... }` — Configuration objects (collapse, select, etc.)
- `element.tabs = [...]` — Arrays of data (tabs, select options)
- `element.userCard = { ... }` — Complex objects (navbar user info)

---

## 6. Charts

Use Charts.js when building dashboards or when a chart is needed.
Load Chart.js once, then drop a <canvas> element and initialise.

<!-- Chart.js CDN -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>

<!-- Example -->

```html
<canvas id="chartjs-bar" width="600" height="400"></canvas>

<script type="module">
  import { Chart } from "https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js";

  new Chart(document.getElementById("chartjs-bar"), {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "2025 Revenue ($M)",
          data: [12, 18, 16, 21],
          backgroundColor: "var(--modus-primary, #0076FF)",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        tooltip: { mode: "index", intersect: false },
      },
    },
  });
</script>
```

## 7. Forms

Form Inputs Docs: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/documentation-form-inputs--docs

## 8. Modus Web Componenents Index

Below is a compact, LLM‑friendly index of every Modus Web Component. Each bullet lists the tag name, a short description, and a CDN URL.

modus-wc-accordion — collapsible accordion sections — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-accordion.md)
modus-wc-alert — inline alert / notification banner — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-alert.md)
modus-wc-autocomplete — text input with suggestion dropdown — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-autocomplete.md)
modus-wc-avatar — circular or square user avatar image — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-avatar.md)
modus-wc-badge — small status or count pill — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-badge.md)
modus-wc-breadcrumbs — navigation path links — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-breadcrumbs.md)
modus-wc-button — action button with variants & sizes — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-button.md)
modus-wc-card — content container with header/body/actions — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-card.md)
modus-wc-checkbox — binary checkbox form control — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-checkbox.md)
modus-wc-chip — compact labelled pill with optional icon/dismiss — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-chip.md)
modus-wc-collapse — show/hide content region — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-collapse.md)
modus-wc-date — date picker input — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-date.md)
modus-wc-divider — horizontal or vertical separator line — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-divider.md)
modus-wc-icon — Modus vector icon renderer — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-icon.md)
modus-wc-input-feedback — helper or error message element — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-input-feedback.md)
modus-wc-input-label — floating label wrapper for inputs — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-input-label.md)
modus-wc-loader — animated loading spinner — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-loader.md)
modus-wc-menu-item — single selectable item inside menu — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-menu-item.md)
modus-wc-menu — list of menu items with keyboard nav — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-menu.md)
modus-wc-modal — dialog overlay — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-modal.md)
modus-wc-navbar — top application bar with menus & profile — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-navbar.md)
modus-wc-number-input — numeric input with step buttons — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-number-input.md)
modus-wc-pagination — page navigation control — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-pagination.md)
modus-wc-progress — linear or radial progress indicator — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-progress.md)
modus-wc-radio — mutually‑exclusive radio button — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-radio.md)
modus-wc-rating — star / heart / smiley rating input — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-rating.md)
modus-wc-select — dropdown single‑select list — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-select.md)
modus-wc-skeleton — grey loading placeholder block — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-skeleton.md)
modus-wc-slider — range slider for numeric input — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-slider.md)
modus-wc-stepper — visual workflow steps indicator — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-stepper.md)
modus-wc-switch — on/off toggle switch — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-switch.md)
modus-wc-table — data grid with sorting & pagination — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-table.md)
modus-wc-tabs — tabbed navigation & panels — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-tabs.md)
modus-wc-text-input — single‑line text input field — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-text-input.md)
modus-wc-textarea — multi‑line text input — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-textarea.md)
modus-wc-theme-switcher — light/dark theme toggle — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-theme-switcher.md)
modus-wc-time-input — time picker input — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-time-input.md)
modus-wc-toast — transient stacked notifications — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-toast.md)
modus-wc-toolbar — simple horizontal toolbar layout — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-toolbar.md)
modus-wc-tooltip — hover/focus helper text bubble — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-tooltip.md)
modus-wc-typography — semantic text wrapper with Modus sizing — [docs](https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/components/modus-wc-typography.md)

## 9. Icon Names

Use these icon names: https://cdn.jsdelivr.net/gh/julianoczkowski/modus-docs@v2.1/docs/icons.md
