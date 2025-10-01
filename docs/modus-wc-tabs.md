---

tag: modus-wc-tabs
category: Navigation & Containers
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-tabs--docs

---

## Purpose

Groups related panels under click‑switchable labels (“tabs”). Supports four visual styles, three size tokens, dynamic icon/text labels, disabled tabs, icon‑only buttons, and raises a single event so your app can sync active‑tab state.

## Attributes

- **`active-tab-index`** (`activeTabIndex`)
  • _Type_: `number`
  • _Default_: `0`
  • _Notes_: 0‑based index of the active tab. Set programmatically or via user click.
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: extra CSS class on the outer `<div>` for gap, font or colour tweaks.
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: sets button height & font size (sm ≈ 28 px, md ≈ 36 px, lg ≈ 44 px).
  • _Reflected as prop_: **yes**

- **`tab-style`** (`tabStyle`)
  • _Type_: `"bordered" | "boxed" | "lifted" | "none"`
  • _Default_: `bordered`
  • _Notes_: `bordered` shows a bottom border, `boxed` renders full boxes, `lifted` uses a card‑like shadow, `none` is minimalist.
  • _Reflected as prop_: **yes**

- **`tabs`**
  • _Type_: `ITab[]`
  • _Default_: `[]`
  • _Notes_: array describing each tab button—see interface below. Reassign a **new** array whenever you update.
  • _Reflected as prop_: **yes**

### `ITab` interface

```ts
interface ITab {
  label?: string; // text shown on the tab
  icon?: string; // Modus icon name
  iconPosition?: "left" | "right"; // default 'left' when label present
  disabled?: boolean; // greys out and blocks click
  customClass?: string; // CSS class on the <button>
}
```

## Slots

- **`tab-N`** — content panel for tab _N_ (`tab-0`, `tab-1`, …). One slot per tab in the same order.
- **_(default)_** — ignored; all content must live in named slots.

## Events

- **`tabChange`** — fires when the active tab changes.
  Payload:

  ```ts
  interface ITabChange {
    previousTab: number; // old index
    newTab: number; // new active index
  }
  ```

## Usage

```html
<!-- Simple bordered tabs -->
<modus-wc-tabs
  aria-label="Example tab group"
  .tabs=${[
    { label:'Tab 1' },
    { label:'Tab 2' },
    { label:'Disabled', disabled:true },
    { icon:'home' }
  ]}>
  <div slot="tab-0">Content for first tab.</div>
  <div slot="tab-1">Second tab panel.</div>
  <div slot="tab-3">Icon‑only tab panel.</div>
</modus-wc-tabs>

<!-- Boxed style, icons + text -->
<modus-wc-tabs tab-style="boxed" size="lg"
  .tabs=${[
    { icon:'dashboard', label:'Dashboard', iconPosition:'left' },
    { icon:'settings',  label:'Settings',  iconPosition:'right' }
  ]}>
  <p slot="tab-0">Dashboard view…</p>
  <p slot="tab-1">Settings view…</p>
</modus-wc-tabs>

<!-- Lifted style with initial active tab -->
<modus-wc-tabs
  active-tab-index="1"
  tab-style="lifted"
  .tabs=${[{ label:'Step 1' }, { label:'Step 2' }]}>
  <p slot="tab-0">Step 1 content</p>
  <p slot="tab-1">Step 2 content</p>
</modus-wc-tabs>

<!-- Listening for changes -->
<modus-wc-tabs id="wizardTabs" .tabs=${[{label:'One'},{label:'Two'}]}></modus-wc-tabs>
<script type="module">
  const t = document.getElementById('wizardTabs');
  t.addEventListener('tabChange', e => console.log('Switched to', e.detail.newTab));
</script>
```

### Pattern notes

- **Dynamic tabs:** when adding/removing tabs, update `.tabs` with a fresh array _and_ provide matching `tab-N` slot content.
- **Disabled tabs:** set `disabled:true` in the corresponding `ITab`—click / keyboard focus will skip them.
- **Icons only:** omit `label` for icon‑only buttons; supply an `aria-label` for accessibility via `ITab.label` or `button[aria-label]`.
- **Controlled mode:** keep `active-tab-index` in your state store; listen to `tabChange` and rewrite the prop for full control.
- **Styling:** use `custom-class` on the component or per‑tab `ITab.customClass` to colour a single tab or adjust spacing without deep selectors.
