---
tag: modus-wc-date
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-date--docs
---

## Purpose

Single-field date picker that follows WCAG 2.2, supports min/max limits, three sizes, native form participation and rich feedback messages.

## Attributes

- **`bordered`**  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: draws a 1 px outline matching the current theme.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra class on the outer wrapper for bespoke spacing or shadows.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out the field and blocks interaction.  
  • _Reflected as prop_: **yes**

- **`feedback`**  
  • _Type_: `IInputFeedbackProp` _(see interface below)_  
  • _Default_: `undefined`  
  • _Notes_: shows error/info/success/help text and icon beneath the input.  
  • _Reflected as prop_: **yes**

- **`input-id`** (`inputId`)  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: forwards to the underlying `<input id="">`; handy for external `<label for="">`.  
  • _Reflected as prop_: **yes**

- **`input-tab-index`** (`inputTabIndex`)  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: overrides the element’s default tab order.  
  • _Reflected as prop_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: floating label above the field; omit and use `aria-label` for visually-hidden labels.  
  • _Reflected as prop_: **yes**

- **`max`**  
  • _Type_: `string` (format `YYYY-MM-DD`)  
  • _Default_: `undefined`  
  • _Notes_: maximum selectable date; enforced by both UI and native validation.  
  • _Reflected as prop_: **yes**

- **`min`**  
  • _Type_: `string` (format `YYYY-MM-DD`)  
  • _Default_: `undefined`  
  • _Notes_: minimum selectable date.  
  • _Reflected as prop_: **yes**

- **`name`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: form-field name submitted as name/value pair on form submit.  
  • _Reflected as prop_: **yes**

- **`read-only`** (`readOnly`)  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: value visible but not editable.  
  • _Reflected as prop_: **yes**

- **`required`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: marks the field as required for native form validation.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: changes input height and font (sm = 32 px, md = 40 px, lg = 48 px).  
  • _Reflected as prop_: **yes**

- **`value`**  
  • _Type_: `string` (format `YYYY-MM-DD`)  
  • _Default_: `''`  
  • _Notes_: current date; update programmatically or via user input.  
  • _Reflected as prop_: **yes**

### `IInputFeedbackProp`

```ts
{
  level: 'error' | 'info' | 'success' | 'warning';
  message?: string;
}
```

## Events

- **`inputFocus`** — fires on focus (`CustomEvent<FocusEvent>`).
- **`inputBlur`** — fires on blur (`CustomEvent<FocusEvent>`).
- **`inputChange`** — fires when `value` changes (`CustomEvent<InputEvent>`).

## Usage

```html
<!-- Basic date picker -->
<modus-wc-date aria-label="Select date" label="Date"></modus-wc-date>

<!-- Range-restricted -->
<modus-wc-date
  label="2025 dates only"
  min="2025-01-01"
  max="2025-12-31">
</modus-wc-date>

<!-- Pre-filled, disabled -->
<modus-wc-date
  label="Disabled field"
  value="2025-06-14"
  disabled>
</modus-wc-date>

<!-- Required with error feedback -->
<modus-wc-date
  id="reqDate"
  label="Required date"
  required
  .feedback=${{ level: 'error', message: 'Please choose a date.' }}>
</modus-wc-date>

<!-- Small and large sizes -->
<modus-wc-date label="Small" size="sm"></modus-wc-date>
<modus-wc-date label="Large" size="lg"></modus-wc-date>

<!-- Handling change -->
<modus-wc-date id="birth" label="Birthday"></modus-wc-date>
<script type="module">
  document
    .getElementById('birth')
    .addEventListener('inputChange', e => console.log('New value:', e.target.value));
</script>
```

### Pattern notes

- **Format enforcement:** the component always returns `value` in ISO `YYYY-MM-DD`—perfect for databases and APIs.
- **Min/Max validation:** UX and native form validation both block dates outside range; combine with `required` for stricter forms.
- **Feedback prop:** set/clear `.feedback` to guide users (error, success, info, warning).
- **Keyboard support:** arrow keys change day; `PageUp` / `PageDown` change month; `Home` / `End` jump to start/end of month.
- **Accessibility:** if no visible `label`, supply `aria-label`; the component manages `role="combobox"` and ARIA attributes automatically.

```

```
