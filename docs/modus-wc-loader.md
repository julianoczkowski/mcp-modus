---
tag: modus-wc-loader
category: Feedback & Status
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-loader--docs
---

## Purpose

Visual indicator that content is loading. Offers six animation variants, four size tokens, theme-aware colour options, and an optional custom CSS hook.

## Attributes

- **`variant`**  
  • _Type_: `"spinner" | "ball" | "bars" | "dots" | "infinity" | "ring"`  
  • _Default_: `spinner`  
  • _Notes_: selects the animation style.

- **`color`**  
  • _Type_: `"primary" | "secondary" | "accent" | "success" | "warning" | "error" | "info" | "neutral"`  
  • _Default_: `primary`  
  • _Notes_: resolves to theme tokens so the loader stays on-brand.

- **`size`**  
  • _Type_: `"xs" | "sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: drives width/height (xs ≈ 16 px, sm ≈ 20 px, md ≈ 24 px, lg ≈ 32 px).

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra class(es) applied to the `<span>` host element for bespoke colours, sizing or layout tweaks.

## Events

_None_

## Usage

```html
<!-- Default spinner -->
<modus-wc-loader aria-label="Loading"></modus-wc-loader>

<!-- Other variants -->
<modus-wc-loader variant="bars" aria-label="Loading bars"></modus-wc-loader>
<modus-wc-loader variant="dots" aria-label="Loading dots"></modus-wc-loader>
<modus-wc-loader variant="ring" aria-label="Loading ring"></modus-wc-loader>

<!-- Custom colours -->
<modus-wc-loader
  variant="ball"
  color="success"
  aria-label="Success loader"
></modus-wc-loader>
<modus-wc-loader
  variant="infinity"
  color="warning"
  aria-label="Warning loader"
></modus-wc-loader>

<!-- Size tokens -->
<modus-wc-loader size="xs" aria-label="Extra-small loader"></modus-wc-loader>
<modus-wc-loader size="lg" aria-label="Large loader"></modus-wc-loader>

<!-- Custom styling via class -->
<style>
  .magenta-loader {
    color: #ff00ff; /* uses currentColor */
    width: 48px;
    height: 48px;
  }
</style>
<modus-wc-loader
  custom-class="magenta-loader"
  aria-label="Custom loader"
></modus-wc-loader>
```

### Pattern notes

- **Colour inheritance:** the animations use `currentColor`, so setting the CSS `color` on either the component or a parent element changes the loader’s hue.
- **ARIA:** always include an `aria-label` that describes what’s loading; if the context is obvious, `"Loading"` is acceptable.
- **Performance:** loaders are pure CSS animations—no JavaScript overhead—so multiple instances have minimal impact.
- **Custom sizing:** beyond the four tokens, override `width`/`height` in a custom class (as in the example) for precise dimensions.
- **Layout:** loaders are `inline-block`; wrap them in flex or grid containers to centre or align them as needed.
