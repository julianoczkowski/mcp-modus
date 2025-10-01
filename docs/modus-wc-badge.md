---
tag: modus-wc-badge
category: Indicators & Counters
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-badge--docs
---

## Purpose

Displays a short label or numeric counter to highlight status, category or quantity. Supports colour variants, three sizes and three visual styles.

## Attributes

- **`color`**
  • _Type_: `"primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "high-contrast"`
  • _Default_: `primary`
  • _Notes_: selects background / text colours from the active Modus theme.
  • _Reflected as prop_: **yes**

- **`variant`**
  • _Type_: `"filled" | "text" | "counter"`
  • _Default_: `filled`
  • _Notes_: `filled` (solid background), `text` (transparent background, coloured text) or `counter` (circular/rounded indicator sized for numbers).
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: maps to 16 px, 20 px, 24 px height respectively.
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: additional CSS class(es) applied to the `<span>` host element.
  • _Reflected as prop_: **yes**

## Events

_None_

## Usage

```html
<!-- Filled primary badge (default) -->
<modus-wc-badge>New</modus-wc-badge>

<!-- Text variant, success colour -->
<modus-wc-badge variant="text" color="success">Ready</modus-wc-badge>

<!-- Counter variant with number -->
<modus-wc-badge variant="counter" color="secondary">12</modus-wc-badge>

<!-- Badge with leading icon -->
<style>
  modus-wc-badge modus-wc-icon {
    padding-inline-end: 4px;
  }
</style>
<modus-wc-badge color="warning">
  <modus-wc-icon decorative name="alert" size="xs"></modus-wc-icon>
  Warning
</modus-wc-badge>
```

### Pattern notes

- **Icons:** put a `<modus-wc-icon>` inside the badge for status glyphs; add a small inline-end padding via CSS.
- **Counters:** `variant="counter"` automatically sets a circular shape sized by `size`; keep values short (1–3 digits).
- **Accessibility:** include visible text or `aria-label` where the badge conveys meaning beyond decoration.
- **Custom styling:** use `custom-class` to add borders, shadows or animations without overriding internal classes.
