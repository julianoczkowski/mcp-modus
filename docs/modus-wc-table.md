---
tag: modus-wc-table
category: Data Display
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-table--docs
---

## Purpose

A highly-configurable table for displaying large data sets.  
Supports sorting, pagination, zebra striping, density presets, row selection (single / multi), inline cell editing, and emits granular events so your app can stay in sync.

## Attributes

- **`columns`**  
  • _Type_: `ITableColumn[]` **(required)**  
  • _Default_: `undefined`  
  • _Notes_: array of column definitions (see interface in Pattern notes).  
  • _Reflected as prop_: **yes**

- **`data`**  
  • _Type_: `Record<string, unknown>[]` **(required)**  
  • _Default_: `undefined`  
  • _Notes_: one object per row. Keys must match `columns[].accessor`.  
  • _Reflected as prop_: **yes**

- **`current-page`** (`currentPage`)  
  • _Type_: `number`  
  • _Default_: `1`  
  • _Notes_: 1-based index of the visible page when `paginated=true`.  
  • _Reflected as prop_: **yes**

- **`page-size-options`** (`pageSizeOptions`)  
  • _Type_: `number[]`  
  • _Default_: `[5, 10, 15]`  
  • _Notes_: selectable page sizes in the paginator.  
  • _Reflected as prop_: **yes**

- **`paginated`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: toggles pagination UI; when `false` all rows render.  
  • _Reflected as prop_: **yes**

- **`show-page-size-selector`** (`showPageSizeSelector`)  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: hides the page-size dropdown when `false`.  
  • _Reflected as prop_: **yes**

- **`selectable`**  
  • _Type_: `"none" | "single" | "multi"`  
  • _Default_: `"none"`  
  • _Notes_: enables row checkboxes / radios.  
  • _Reflected as prop_: **yes**

- **`selected-row-ids`** (`selectedRowIds`)  
  • _Type_: `string[]`  
  • _Default_: `undefined`  
  • _Notes_: controlled selection state; set to keep external store authoritative.  
  • _Reflected as prop_: **yes**

- **`sortable`**  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: master switch for column sorting; can be overridden per column.  
  • _Reflected as prop_: **yes**

- **`density`**  
  • _Type_: `"compact" | "comfortable" | "relaxed"`  
  • _Default_: `"comfortable"`  
  • _Notes_: row height & font size preset.  
  • _Reflected as prop_: **yes**

- **`editable`**  
  • _Type_: `boolean | ((row) => boolean)`  
  • _Default_: `false`  
  • _Notes_: enables cell editing globally or per row via predicate.  
  • _Reflected as prop_: **yes**

- **`hover`**  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: toggles row-hover background highlight.  
  • _Reflected as prop_: **yes**

- **`zebra`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: alternates row background colours.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the wrapper `<div>`; ideal for fixed width or brand theming.  
  • _Reflected as prop_: **yes**

## Events

- **`cellEditStart`** — `{ rowIndex, colId }` when a cell enters edit mode.
- **`cellEditCommit`** — `{ rowIndex, colId, newValue, updatedRow }` after edit is saved.
- **`sortChange`** — `ColumnSort[]` describing the new sort order.
- **`paginationChange`** — `{ currentPage, pageSize }` when user changes page / page size.
- **`rowClick`** — `{ row, index }` on row click.
- **`rowSelectionChange`** — `{ selectedRows, selectedRowIds }` after checkbox/radio change.

## Usage

```html
<!-- Basic sortable table -->
<modus-wc-table
  aria-label="Employee table"
  .columns=${[
    { id:'id', header:'ID', accessor:'id', width:'80px', sortable:true },
    { id:'name', header:'Name', accessor:'name', sortable:true },
    { id:'role', header:'Role', accessor:'role' }
  ]}
  .data=${[
    { id:'1', name:'Ada Lovelace',   role:'Engineer' },
    { id:'2', name:'Grace Hopper',   role:'Admiral'  },
    { id:'3', name:'Katherine J.',   role:'Scientist'}
  ]}
  @sortChange=${e => console.log('sort', e.detail)}>
</modus-wc-table>

<!-- Paginated, selectable, zebra -->
<modus-wc-table
  paginated
  selectable="multi"
  zebra
  density="compact"
  .columns=${[
    { id:'product', header:'Product', accessor:'product' },
    { id:'price',   header:'Price',   accessor:'price'   }
  ]}
  .data=${Array.from({length:30}, (_,i)=>({ id:`p${i}`, product:`Item ${i}`, price:i*10 })) }
  @rowSelectionChange=${e => console.log(e.detail.selectedRowIds)}>
</modus-wc-table>

<!-- Inline editable with custom editor -->
<modus-wc-table
  editable
  .columns=${[
    { id:'task',  header:'Task',  accessor:'task',  editor:'text' },
    { id:'state', header:'State', accessor:'state',
      editor:'custom',
      customEditorRenderer:(value,onCommit)=>{
        const sel=document.createElement('modus-wc-select');
        sel.options=[{label:'Todo',value:'todo'},{label:'Done',value:'done'}];
        sel.value=value; sel.addEventListener('inputChange',e=>onCommit(e.target.value));
        return sel;
      }}
  ]}
  .data=${[{ id:'t1', task:'Design UI', state:'todo' }]}
  @cellEditCommit=${e => console.log('new row', e.detail.updatedRow)}>
</modus-wc-table>
```

### Pattern notes

- **Immutable updates:** always assign new `columns` / `data` arrays to trigger re-render; mutating in place won’t update.
- **Column definition (`ITableColumn`):** each column must have unique `id`, `header`, and `accessor`; add `editor`, `width`, `sortable`, `cellRenderer`, etc. as needed.
- **Editing flow:** start → user edits → component fires `cellEditCommit`; persist `updatedRow` and rewrite `data` array to reflect changes.
- **Selection modes:** `'single'` uses radio-style, `'multi'` uses checkboxes; keep `selectedRowIds` in app state for controlled selection.
- **Density + zebra:** combine `density="compact"` and `zebra` for data-heavy tables; hover highlight can be disabled via `hover="false"`.
- **Accessibility:** component renders an accessible HTML `<table>` with proper `th` / `aria-sort`; ensure column headers are meaningful.
- **Performance:** virtualisation is not built-in—slice `data` yourself or enable `paginated` to keep DOM nodes manageable.
