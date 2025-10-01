---
tag: modus-wc-progress
category: Feedback & Status
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-progress--docs
---

## Purpose

Displays task completion or timed activity in either a linear bar or a circular (radial) ring.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the host element for custom size, colours, or thickness.  
  • _Reflected as prop_: **yes**

- **`indeterminate`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: shows continuous animation with no fixed `value` (activity indicator).  
  • _Reflected as prop_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: text rendered inside (radial) or alongside (linear) the bar.  
  • _Reflected as prop_: **yes**

- **`max`**  
  • _Type_: `number`  
  • _Default_: `100`  
  • _Notes_: upper bound for `value`.  
  • _Reflected as prop_: **yes**

- **`value`**  
  • _Type_: `number`  
  • _Default_: `0`  
  • _Notes_: current progress; ignored when `indeterminate`.  
  • _Reflected as prop_: **yes**

- **`variant`**  
  • _Type_: `"default" | "radial"`  
  • _Default_: `default`  
  • _Notes_: `"default"` renders a horizontal bar; `"radial"` renders a circular ring.  
  • _Reflected as prop_: **yes**

## Slots

- **_(default)_** — only for `variant="radial"`; lets you slot custom HTML (icons, numbers) in the centre of the ring.

## Events

_None_

## Usage

```html
<!-- Linear progress at 70 % -->
<modus-wc-progress aria-label="Task progress" value="70"></modus-wc-progress>

<!-- Indeterminate bar -->
<modus-wc-progress indeterminate aria-label="Loading"></modus-wc-progress>

<!-- Bar with label -->
<modus-wc-progress
  value="50"
  label="Loading…"
  aria-label="Progress with label"
></modus-wc-progress>

<!-- Radial progress -->
<modus-wc-progress
  variant="radial"
  value="60"
  label="60%"
  aria-label="Radial progress"
></modus-wc-progress>

<!-- Radial with slotted icon -->
<modus-wc-progress variant="radial" value="80" aria-label="Radial with icon">
  <modus-wc-icon name="clipboard" size="md"></modus-wc-icon>
</modus-wc-progress>

<!-- Custom sizes via CSS -->
<style>
  .small-bar {
    height: 0.5rem;
  }
  .radial-lg {
    --size: 12rem;
  }
  .radial-thin {
    --thickness: 0.5rem;
  }
</style>
<modus-wc-progress value="40" custom-class="small-bar"></modus-wc-progress>
<modus-wc-progress
  variant="radial"
  value="75"
  custom-class="radial-lg radial-thin"
></modus-wc-progress>
```

### Pattern notes

- **Linear height:** override `height` in a `custom-class` to create slim or chunky bars.
- **Radial size / thickness:** use CSS custom properties `--size` and `--thickness` inside your `custom-class`.
- **Colour overrides:** change `color` (affects bar/ring) and background via CSS selectors if theme tokens aren’t enough.
- **Accessibility:** always set `aria-label`; the component mirrors `value`, `min` (0) and `max` to ARIA attributes.
- **Indeterminate state:** leave `value` unset or meaningless when `indeterminate=true` to avoid conflicting info.
- **Performance:** component is pure CSS; no JavaScript timers—suitable for multiple concurrent instances.
