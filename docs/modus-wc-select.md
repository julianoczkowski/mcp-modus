---
tag: modus-wc-select
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-select--docs
---

## Purpose

Dropdown list that lets users pick **one** option from a predefined set. Supports dynamic option arrays, three size tokens, required/disabled states, border toggle, validation feedback and full native‑form participation.

> **⚠️ Important:** Unlike native HTML `<select>`, this component does **NOT** use child `<option>` elements. Options are provided via the `options` property as an array of objects in JavaScript.

## Attributes

- **`bordered`**
  • _Type_: `boolean`
  • _Default_: `true`
  • _Notes_: draws a 1 px outline that matches the current theme.
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: adds extra class(es) to the inner wrapper for bespoke width, spacing, colours.
  • _Reflected as prop_: **yes**

- **`disabled`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: greys out the control and blocks pointer / keyboard interaction.
  • _Reflected as prop_: **yes**

- **`feedback`**
  • _Type_: `IInputFeedbackProp`
  • _Default_: `undefined`
  • _Notes_: shows error/info/success/warning text beneath the select.
  • _Reflected as prop_: **yes**

- **`input-id`** (`inputId`)
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: forwarded to the native `<select id="…">`; useful for external `<label for="…">`.
  • _Reflected as prop_: **yes**

- **`input-tab-index`** (`inputTabIndex`)
  • _Type_: `number`
  • _Default_: `undefined`
  • _Notes_: overrides default tab order.
  • _Reflected as prop_: **yes**

- **`label`**
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: floating label rendered above the field; if omitted supply `aria-label`.
  • _Reflected as prop_: **yes**

- **`name`**
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: form‑field name submitted with the selected value.
  • _Reflected as prop_: **yes**

- **`options`**
  • _Type_: `ISelectOption[]`
  • _Default_: `[]`
  • _Notes_: array of option objects (`{ label:string; value:string; disabled?:boolean }`). Reassign a **new** array to trigger re‑render.
  • _Reflected as prop_: **yes**

- **`required`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: marks the control as mandatory for form validation.
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: adjusts height & font (sm ≈ 32 px, md 40 px, lg 48 px).
  • _Reflected as prop_: **yes**

- **`value`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: currently selected option value; set programmatically or via user choice.
  • _Reflected as prop_: **yes**

### `ISelectOption`

```ts
interface ISelectOption {
  label: string; // visible text
  value: string; // submitted value
  disabled?: boolean; // option cannot be selected
}
```

### `IInputFeedbackProp`

```ts
interface IInputFeedbackProp {
  level: "error" | "info" | "success" | "warning";
  message?: string;
}
```

## Events

- **`inputFocus`**  — fires on focus (`CustomEvent<FocusEvent>`).
- **`inputBlur`**   — fires on blur (`CustomEvent<FocusEvent>`).
- **`inputChange`** — fires when `value` changes (`CustomEvent<InputEvent>`).

## ⚠️ Common Mistake

**DO NOT** use child `<option>` elements like you would with native HTML `<select>`:

```html
<!-- ❌ WRONG: This will NOT work -->
<modus-wc-select label="Broken example">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</modus-wc-select>
```

**Instead**, use the `options` property in JavaScript:

```html
<!-- ✅ CORRECT -->
<modus-wc-select id="working-select" label="Working example"></modus-wc-select>

<script type="module">
  const select = document.getElementById("working-select");
  select.options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];
</script>
```

## Usage

```html
<!-- Basic select -->
<modus-wc-select
  aria-label="Choose an option"
  label="Select one"
  .options=${[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}>
</modus-wc-select>

<!-- Pre‑selected value -->
<modus-wc-select
  label="Pre‑selected"
  value="2"
  .options=${[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]}>
</modus-wc-select>

<!-- Disabled field -->
<modus-wc-select
  label="Disabled"
  disabled
  .options=${[{ label:'No choice', value:'none' }]}>
</modus-wc-select>

<!-- Select with a disabled option -->
<modus-wc-select
  label="With disabled option"
  .options=${[
    { label: 'Active 1', value:'A' },
    { label: 'Disabled 2', value:'B', disabled:true },
    { label: 'Active 3', value:'C' }
  ]}>
</modus-wc-select>

<!-- Required field with error feedback -->
<modus-wc-select
  id="reqSel"
  required
  label="Required choice"
  .options=${[{ label: 'Pick one…', value: '' }, { label:'A', value:'A' }]}
  .feedback=${{ level:'error', message:'Selection required.' }}>
</modus-wc-select>

<!-- Size variants -->
<modus-wc-select label="Small" size="sm" .options=${[{ label:'S', value:'s' }]}></modus-wc-select>
<modus-wc-select label="Large" size="lg" .options=${[{ label:'L', value:'l' }]}></modus-wc-select>

<!-- Handling change -->
<modus-wc-select id="interactiveSel" label="Interactive"
  .options=${[{ label:'First', value:'first' }, { label:'Second', value:'second' }]}>
</modus-wc-select>
<script type="module">
  const sel = document.getElementById('interactiveSel');
  sel.addEventListener('inputChange', e => console.log('New value:', e.target.value));
</script>
```

### Pattern notes

- **NOT like native HTML:** this component does **NOT** accept child `<option>` elements. Use the `options` property instead.
- **Options array:** always assign a **new** `options` array after filtering or sorting so the component re-renders.
- **Placeholder row:** for required fields, include a dummy option with an empty `value` (see example) so browser validation can trigger.
- **Disabled logic:** individual `options[].disabled` controls cannot be selected but still appear in the list.
- **Size consistency:** match the `size` token with surrounding text inputs for aligned forms.
- **Accessibility:** when `label` is omitted, set `aria-label`; the component outputs a native `<select>` so standard screen‑reader behaviour applies.
- **Styling:** use `custom-class` to set fixed `width`, add icons via background‑images, or change caret colour with CSS variables.
