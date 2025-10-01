---
tag: modus-wc-breadcrumbs
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-breadcrumbs--docs
---

## Purpose

Displays a navigation trail so users always know where they are in the site or app hierarchy.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the inner wrapper for custom spacing, underlines, etc.  
  • _Reflected as prop_: **yes**

- **`items`**  
  • _Type_: `IBreadcrumb[]`  
  • _Default_: `[]`  
  • _Notes_: array of breadcrumb objects to render. Each item supports `{ label: string; url?: string }`.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: sets font size and padding to align with other Modus controls.  
  • _Reflected as prop_: **yes**

## Events

- **`breadcrumbClick`** — fires when a crumb is clicked; payload is the `IBreadcrumb` object selected.

## Usage

```html
<!-- Basic breadcrumbs -->
<modus-wc-breadcrumbs
  aria-label="Site navigation"
  .items=${[
    { label: 'Home', url: '#/' },
    { label: 'Products', url: '#/products' },
    { label: 'Laptops', url: '#/products/laptops' },
    { label: 'Model X' }            <!-- current page -->
  ]}>
</modus-wc-breadcrumbs>

<!-- Programmatic items assignment -->
<script type="module">
  document.addEventListener('DOMContentLoaded', () => {
    const bc = document.querySelector('modus-wc-breadcrumbs');
    bc.items = [
      { label: 'Dashboard', url: '/dashboard' },
      { label: 'Settings' }
    ];
  });
</script>

<!-- Large size with underlined links via custom class -->
<style>
  .underline-links a { text-decoration: underline; }
</style>
<modus-wc-breadcrumbs
  size="lg"
  custom-class="underline-links"
  .items=${[
    { label: 'Root', url: '#' },
    { label: 'Section', url: '#' },
    { label: 'Current' }
  ]}>
</modus-wc-breadcrumbs>
```

## Pattern notes

Last crumb: The final array item is usually the current page and often rendered without a link.
Click handling: Listen to breadcrumbClick to intercept navigation or trigger SPA route changes.
Accessibility: Always set aria-label on the component; it exposes an ordered list with clear text.
Styling links: Use custom-class plus CSS for underlines, hover effects, or separators (e.g. >, /).
Dynamic updates: Replace the entire items array (don’t mutate in-place) so the component re-renders correctly.
