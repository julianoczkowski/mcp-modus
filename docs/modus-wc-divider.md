---
tag: modus-wc-divider
category: Layout & Decoration
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-divider--docs
---

## Purpose

Adds a thin rule to visually separate content, horizontally or vertically.  
Can optionally display short text (e.g. “OR”) inside the line and adapts to theme colours.

## Attributes

- **`color`**  
  • _Type_: `"primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "high-contrast"`  
  • _Default_: `tertiary`  
  • _Notes_: sets line and text colour from the active theme palette.  
  • _Reflected as prop_: **yes**

- **`content`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: text displayed inside the divider. Ignored when empty.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra CSS class applied to the `<span>` host element for bespoke margins or animations.  
  • _Reflected as prop_: **yes**

- **`orientation`**  
  • _Type_: `"horizontal" | "vertical"`  
  • _Default_: `vertical`  
  • _Notes_: direction of the line; horizontal spans full width, vertical spans full height of its flex/grid container.  
  • _Reflected as prop_: **yes**

- **`position`**  
  • _Type_: `"start" | "center" | "end"`  
  • _Default_: `center`  
  • _Notes_: where the `content` text sits along the line.  
  • _Reflected as prop_: **yes**

- **`responsive`**  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: when `false`, the divider keeps intrinsic size instead of flex-growing to fill space.  
  • _Reflected as prop_: **yes**

## Events

_None_

## Usage

```html
<!-- Horizontal divider between blocks -->
<div>Top content block</div>
<modus-wc-divider
  aria-label="Section divider"
  orientation="horizontal"
></modus-wc-divider>
<div>Bottom content block</div>

<!-- Horizontal divider with centred text -->
<modus-wc-divider orientation="horizontal" content="OR" position="center">
</modus-wc-divider>

<!-- Vertical divider inside a flex row -->
<div style="display:flex; align-items:center; gap:.5rem;">
  <span>Left</span>
  <modus-wc-divider aria-label="Side divider"></modus-wc-divider>
  <span>Right</span>
</div>

<!-- Vertical divider with text at the end -->
<div style="display:flex; align-items:center; gap:.5rem; height:120px;">
  <modus-wc-divider orientation="vertical" content="END" position="end">
  </modus-wc-divider>
  <span>Adjacent content</span>
</div>

<!-- Custom colour and non-responsive width -->
<modus-wc-divider
  orientation="horizontal"
  content="Primary"
  color="primary"
  responsive="false"
  style="width:200px;"
>
</modus-wc-divider>
```

### Pattern notes

- **Orientation & layout:** vertical dividers require a flex or grid parent to draw full height; horizontal ones stretch 100 % width by default.
- **Content text:** keep `content` short (1–3 words) so the line remains visually balanced; use `position` to align text where it makes most sense.
- **Responsive flag:** set `responsive="false"` when the divider should keep its intrinsic width/height rather than flex to fill.
- **Accessibility:** supply `aria-label` or `aria-hidden="true"` depending on whether the divider conveys information or is purely decorative.
- **Custom styling:** prefer `custom-class` plus CSS variables (`--modus-primary`, etc.) to animate thickness or dash patterns without touching internal styles.
