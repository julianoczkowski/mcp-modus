---
tag: modus-wc-pagination
category: Navigation
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-pagination--docs
---

## Purpose

Lets users move between pages of content.  
Shows first / prev / number buttons / next / last, disables ends when needed, and emits a single `pageChange` event so the host app can update state.

## Attributes

- **`aria-label-values`** (`ariaLabelValues`)  
  • _Type_: `IAriaLabelValues | undefined`  
  • _Default_: `undefined`  
  • _Notes_: customise the `aria-label` text of every control (`firstPage`, `previousPage`, `page`, `nextPage`, `lastPage`). Use `{0}` as a placeholder for the page number.  
  • _Reflected as prop_: **yes**

- **`count`**  
  • _Type_: `number`  
  • _Default_: `1`  
  • _Notes_: total number of pages.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the root `<nav>` for spacing or colour tweaks.  
  • _Reflected as prop_: **yes**

- **`next-button-text`** (`nextButtonText`)  
  • _Type_: `string | undefined`  
  • _Default_: `undefined` (icon is shown)  
  • _Notes_: replace the chevron icon with literal text (“Next”).  
  • _Reflected as prop_: **yes**

- **`page`**  
  • _Type_: `number`  
  • _Default_: `1`  
  • _Notes_: zero-based page index **(visible as 1-based to the user)**; keep in range `1…count`.  
  • _Reflected as prop_: **yes**

- **`prev-button-text`** (`prevButtonText`)  
  • _Type_: `string | undefined`  
  • _Default_: `undefined`  
  • _Notes_: text shown instead of the previous chevron.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: sets button and font size.  
  • _Reflected as prop_: **yes**

## Events

- **`pageChange`** — emitted when the user selects a new page.  
  Payload:
  ```ts
  interface IPageChange {
    newPage: number; // the page the user selected
    prevPage: number; // the page we were on
  }
  ```

## Usage

```html
<!-- Default pagination -->
<modus-wc-pagination
  aria-label="Content navigation"
  count="10"
  page="3">
</modus-wc-pagination>

<!-- Custom button text -->
<modus-wc-pagination
  count="15"
  page="7"
  prev-button-text="Previous"
  next-button-text="Next">
</modus-wc-pagination>

<!-- Small and large sizes -->
<modus-wc-pagination count="20" page="10" size="sm"></modus-wc-pagination>
<modus-wc-pagination count="20" page="10" size="lg"></modus-wc-pagination>

<!-- Custom aria-labels (i18n) -->
<modus-wc-pagination
  count="12"
  page="5"
  .ariaLabelValues=${{
    firstPage: 'Primera página',
    previousPage: 'Anterior',
    page: 'Página {0}',
    nextPage: 'Siguiente',
    lastPage: 'Última página'
  }}>
</modus-wc-pagination>

<!-- Listening for changes -->
<modus-wc-pagination id="pager" count="25" page="1"></modus-wc-pagination>
<script type="module">
  const pager = document.getElementById('pager');
  pager.addEventListener('pageChange', e => {
    console.log('New page:', e.detail.newPage);
    pager.page = e.detail.newPage;      // keep component in sync
  });
</script>
```

### Pattern notes

- **Visible range:** at most **5** numbered buttons are displayed; for long lists the component auto-compresses (`1 … 8 9 10 11 12 … 20`).
- **End buttons:** “First” and “Last” appear only when `count` > 5 and are disabled at the range ends.
- **No duplicate events:** clicking the currently selected page does **not** fire `pageChange`.
- **Sizing tokens:** `sm`, `md`, `lg` align with other Modus inputs and buttons—mix safely in forms or toolbars.
- **Accessibility:** when you provide localised `aria-label-values`, keep `{0}` in the `page` string so screen readers announce the page number correctly.
- **Styling:** use `custom-class` plus CSS variables (`--modus-primary`, etc.) to tweak colours; buttons inherit `currentColor` for icons/text.
