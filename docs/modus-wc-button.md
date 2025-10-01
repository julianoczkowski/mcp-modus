---
tag: modus-wc-button
category: Inputs & Actions
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-button--docs
---

## Purpose

A versatile action button that supports multiple variants, sizes, shapes and colours.

## Attributes

- **`color`**  
  • _Type_: `"primary" | "secondary" | "tertiary" | "warning" | "danger"`  
  • _Default_: `primary`  
  • _Notes_: colour token pulled from current Modus theme.  
  • _Reflected as prop_: **yes**

- **`variant`**  
  • _Type_: `"filled" | "outlined" | "borderless"`  
  • _Default_: `filled`  
  • _Notes_: visual style of the button.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"xs" | "sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: controls height & typography scale.  
  • _Reflected as prop_: **yes**

- **`shape`**  
  • _Type_: `"rectangle" | "square" | "circle"`  
  • _Default_: `rectangle`  
  • _Notes_: non-rect shapes are ideal for icon-only buttons.  
  • _Reflected as prop_: **yes**

- **`type`**  
  • _Type_: `"button" | "submit" | "reset"`  
  • _Default_: `button`  
  • _Notes_: native HTML button semantics.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: disables pointer & keyboard interaction.  
  • _Reflected as prop_: **yes**

- **`full-width`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: stretches to fill parent container.  
  • _Reflected as prop_: **yes**

- **`pressed`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: ARIA-compliant pressed state for toggle buttons.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: empty string  
  • _Notes_: adds extra CSS class(es) to the host.  
  • _Reflected as prop_: **no**

## Events

- **`buttonClick`** — fires a `CustomEvent<MouseEvent | KeyboardEvent>` on pointer click _or_ `Enter` / `Space`.

## Usage

```html
<!-- Filled (default) primary button -->
<modus-wc-button aria-label="Save changes">Save</modus-wc-button>

<!-- Outlined secondary -->
<modus-wc-button variant="outlined" color="secondary">
  Secondary
</modus-wc-button>

<!-- Borderless danger, icon-only, circle -->
<modus-wc-button
  aria-label="Delete"
  variant="borderless"
  color="danger"
  shape="circle"
>
  <modus-wc-icon decorative name="delete"></modus-wc-icon>
</modus-wc-button>

<!-- Small full-width submit -->
<modus-wc-button size="sm" type="submit" full-width> Send </modus-wc-button>
```
