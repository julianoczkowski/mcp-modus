---
tag: modus-wc-autocomplete
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-autocomplete--docs
---

## Purpose

Provides a text‑input that suggests results as you type. Supports single or multiple selection, debounced search, custom "no results" content, and fully slotted menu items.

## Attributes

- **`bordered`**
  • _Type_: `boolean`
  • _Default_: `true`
  • _Notes_: adds a border around the control.
  • _Reflected as prop_: **yes**

- **`disabled`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: disables keyboard & pointer interaction.
  • _Reflected as prop_: **yes**

- **`multi-select`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: allows multiple chips to be selected.
  • _Reflected as prop_: **yes**

- **`items`**
  • _Type_: `IAutocompleteItem[]`
  • _Default_: `[]`
  • _Notes_: array of objects shown in the dropdown; create a **new array** on every update to trigger re‑render.
  • _Reflected as prop_: **yes**

- **`value`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: current text value / chip search string.
  • _Reflected as prop_: **yes**

- **`placeholder`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: grey helper text when no value present.
  • _Reflected as prop_: **yes**

- **`label`**
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: floating label text above the field.
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: adjusts height & typography.
  • _Reflected as prop_: **yes**

- **`debounce-ms`**
  • _Type_: `number`
  • _Default_: `300`
  • _Notes_: delay before `inputChange` fires; set to `0` to disable.
  • _Reflected as prop_: **yes**

- **`min-chars`**
  • _Type_: `number`
  • _Default_: `0`
  • _Notes_: minimum characters before the menu shows.
  • _Reflected as prop_: **yes**

- **`leave-menu-open`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: keeps dropdown open after selection (good for multi‑select).
  • _Reflected as prop_: **yes**

- **`show-spinner`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: shows loading spinner while fetching remote data.
  • _Reflected as prop_: **yes**

- **`no-results`**
  • _Type_: `IAutocompleteNoResults`
  • _Default_: see interface
  • _Notes_: object that customises the "no results" panel.
  • _Reflected as prop_: **yes**

_(Additional props `custom-class`, `read-only`, `required`, `input-id`, `input-tab-index`, `name` are also available.)_

## Events

- **`inputChange`** — debounced every `debounce-ms`; payload `CustomEvent<Event>`.
- **`inputFocus`** / **`inputBlur`** — focus gained / lost (`CustomEvent<FocusEvent>`).
- **`itemSelect`** — item picked; payload `CustomEvent<IAutocompleteItem>`.
- **`chipRemove`** — chip removed in multi‑select; payload `CustomEvent<IAutocompleteItem>`.

## Usage

```html
<!-- Single‑select, default spinner off -->
<modus-wc-autocomplete
  aria-label="Fruit autocomplete"
  label="Select a Fruit"
  placeholder="Type to search..."
  .items=${[
    { label: 'Apple',  value: 'apple',  visibleInMenu: true },
    { label: 'Banana', value: 'banana', visibleInMenu: true },
    { label: 'Pear',   value: 'pear',   visibleInMenu: true }
  ]}
  @inputChange=${e => {
    const ac = e.target;
    const txt = e.detail.target.value.toLowerCase();
    ac.items = ac.items.map(it => ({ ...it, visibleInMenu: it.label.toLowerCase().includes(txt) }));
  }}
  @itemSelect=${e => console.log('Selected', e.detail)}>
</modus-wc-autocomplete>

<!-- Multi‑select with chips -->
<modus-wc-autocomplete
  multi-select
  label="Select fruits"
  placeholder="Start typing..."
  leave-menu-open
  .items=${[
    { label: 'Apple', value: 'apple', visibleInMenu: true },
    { label: 'Orange', value: 'orange', visibleInMenu: true }
  ]}
  @chipRemove=${e => console.log('Removed', e.detail)}>
</modus-wc-autocomplete>

<!-- Remote search with spinner -->
<modus-wc-autocomplete id="remote-ac" label="Search users" show-spinner></modus-wc-autocomplete>
<script type="module">
  const ac = document.getElementById('remote-ac');
  ac.addEventListener('inputChange', async e => {
    const q = e.detail.target.value;
    if (!q) return;
    ac.showSpinner = true;
    const res = await fetch(`/api/users?q=${encodeURIComponent(q)}`).then(r => r.json());
    ac.items = res.map(u => ({ label: u.name, value: u.id, visibleInMenu: true }));
    ac.showSpinner = false;
  });
</script>
```

### Slot support

- **`menu-items`** — supply fully custom `<li>` elements; you handle filtering and emit `itemSelect` manually when an item is chosen.

### Pattern notes

- **Controlled input:** always assign a _new_ `items` array after filtering to trigger re‑render.
- **Debounce:** lower `debounce-ms` for live‑search; set to `0` for instant updates.
- **Multi‑select chips:** read `items[].selected` to display chips; listen for `chipRemove` to update state.
- **Accessibility:** keyboard navigation handled internally; set `aria-label` for screen‑reader context.

---
