---
tag: modus-wc-icon
category: Graphics & Icons
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-icon--docs
---

## Purpose

Renders any icon from the Modus icon font. Supports four preset sizes, custom colour via CSS, and accessibility flags to mark the icon as decorative or meaningful.

## Attributes

- **`name`**
  • _Type_: `string` **(required)**
  • _Default_: _none_
  • _Notes_: icon name that matches a class in the Modus icon font (e.g. `alert`, `calendar_check`).
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"xs" | "sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: adjusts the font‑size CSS variable driving the icon’s visual size.
  • _Reflected as prop_: **yes**

- **`decorative`**
  • _Type_: `boolean`
  • _Default_: `true`
  • _Notes_: when `true`, sets `aria-hidden="true"` so screen‑readers ignore the icon; set to `false` and provide an `aria-label` when the icon carries meaning.
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: adds extra CSS class(es) to the internal `<i>` tag—use to colour or animate the icon.
  • _Reflected as prop_: **yes**

## Events

_None_

## Usage

```html
<!-- Basic decorative icon (default) -->
<modus-wc-icon name="alert" aria-label="Alert icon"></modus-wc-icon>

<!-- Size variants -->
<modus-wc-icon
  name="settings"
  size="xs"
  aria-label="Settings xs"
></modus-wc-icon>
<modus-wc-icon
  name="settings"
  size="sm"
  aria-label="Settings sm"
></modus-wc-icon>
<modus-wc-icon
  name="settings"
  size="md"
  aria-label="Settings md"
></modus-wc-icon>
<modus-wc-icon
  name="settings"
  size="lg"
  aria-label="Settings lg"
></modus-wc-icon>

<!-- Non‑decorative icon with explicit label -->
<modus-wc-icon
  name="warning"
  decorative="false"
  aria-label="Warning"
></modus-wc-icon>

<!-- Custom colour via custom-class -->
<style>
  .error-icon {
    color: red;
  }
</style>
<modus-wc-icon
  name="cancel"
  custom-class="error-icon"
  decorative="false"
  aria-label="Error"
></modus-wc-icon>

<!-- Styling directly via descendant selector (less preferred) -->
<style>
  modus-wc-icon[name="success"] i {
    color: green;
  }
</style>
<modus-wc-icon
  name="success"
  decorative="false"
  aria-label="Success"
></modus-wc-icon>
```

### Pattern notes

- **Decorative vs meaningful:** keep `decorative="true"` for purely ornamental icons; set `decorative="false"` _and_ provide a specific `aria-label` whenever the icon communicates information.
- **Automatic labels:** if `decorative="false"` and no `aria-label` is provided, the component auto‑generates one like `"{name} icon"`; prefer explicit labels for clarity.
- **Sizing with CSS:** beyond the four tokens, override font‑size in CSS via `.custom-icon { font-size: 42px; }`.
- **Colour:** all visual styling is via CSS—inherit current text colour or set `color` property on the `<i>` element through a custom class.
- **Performance:** icon rendering is just a single `<i>` tag, so feel free to use it inline inside buttons, chips, alerts and menus without layout penalties.
