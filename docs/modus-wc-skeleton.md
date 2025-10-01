---
tag: modus-wc-skeleton
category: Feedback & Status
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-skeleton--docs
---

## Purpose

Shows a grey placeholder block while real content is loading, preventing layout shift and giving users a visual hint of where data will appear.

## Attributes

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: adds a custom CSS class to the inner `<div>` so you can adjust colour, animation speed or margins.
  • _Reflected as prop_: **yes**

- **`height`**
  • _Type_: `string`
  • _Default_: `var(--modus-wc-line-height-md)`
  • _Notes_: CSS size token or any length unit (`rem`, `px`, `%`) controlling skeleton height.
  • _Reflected as prop_: **yes**

- **`shape`**
  • _Type_: `"circle" | "rectangle"`
  • _Default_: `rectangle`
  • _Notes_: `circle` makes the placeholder round; keep height = width for a perfect circle.
  • _Reflected as prop_: **yes**

- **`width`**
  • _Type_: `string`
  • _Default_: `100%`
  • _Notes_: CSS width of the placeholder—use `%`, `rem`, `px`, etc.
  • _Reflected as prop_: **yes**

## Events

_None_

## Usage

```html
<!-- Default rectangle skeleton (full‑width, line‑height tall) -->
<modus-wc-skeleton aria-label="Loading content"></modus-wc-skeleton>

<!-- Custom width & height -->
<modus-wc-skeleton
  height="50px"
  width="200px"
  aria-label="Loading tile"
></modus-wc-skeleton>

<!-- Circle avatar placeholder -->
<modus-wc-skeleton
  shape="circle"
  height="4rem"
  width="4rem"
  aria-label="Loading avatar"
></modus-wc-skeleton>

<!-- Square thumbnail -->
<modus-wc-skeleton
  height="6rem"
  width="6rem"
  aria-label="Loading image"
></modus-wc-skeleton>

<!-- Composite skeleton layout mimicking a card -->
<style>
  .skeleton-card {
    width: 14rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .skeleton-header {
    display: flex;
    gap: 1rem;
  }
  .skeleton-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
  }
</style>
<div class="skeleton-card" aria-label="Loading profile card">
  <div class="skeleton-header">
    <modus-wc-skeleton
      shape="circle"
      height="3rem"
      width="3rem"
      aria-label="Loading avatar"
    ></modus-wc-skeleton>
    <div class="skeleton-text">
      <modus-wc-skeleton
        width="70%"
        height="1rem"
        aria-label="Loading name"
      ></modus-wc-skeleton>
      <modus-wc-skeleton
        width="40%"
        height=".75rem"
        aria-label="Loading subtitle"
      ></modus-wc-skeleton>
    </div>
  </div>
  <modus-wc-skeleton
    height="6rem"
    aria-label="Loading main block"
  ></modus-wc-skeleton>
</div>
```

### Pattern notes

- **Animation colour:** the component uses `currentColor` with lowered opacity—change the parent element’s `color` to tint skeletons.
- **Custom sizes:** set any CSS length in `height` / `width`—`%` is relative to the container, not the viewport.
- **Layout skeletons:** compose multiple skeletons with flex or grid to imitate the final layout; this prevents content reflow when data arrives.
- **Accessibility:** skeletons are `aria-hidden="true"` by default; describe the loading region on a parent container (`aria-label="Loading chart"`).
- **Performance:** no JS runs at runtime—animation is pure CSS keyframes so dozens of skeletons have minimal impact.
