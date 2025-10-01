---
tag: modus-wc-number-input
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-number-input--docs
---

## Purpose

Single-field control for entering or displaying numeric values.  
Supports min/max limits, step increments, range–slider mode, currency symbols, three size tokens, rich feedback messages and full participation in native HTML forms.

## Attributes

- **`auto-complete`**  
  • _Type_: `"on" | "off"`  
  • _Default_: _undefined_ (`browser default`)  
  • _Notes_: hint for browser autofill keyboards.

- **`bordered`**  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: draws a 1 px outline matching the theme.

- **`currency-symbol`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: prefix or suffix symbol (`$`, `€`, `£`, etc.) shown inside the input.

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out field and blocks interaction.

- **`feedback`**  
  • _Type_: `IInputFeedbackProp` _(see interface below)_  
  • _Default_: `undefined`  
  • _Notes_: displays error/info/success/warning text beneath the input.

- **`input-id`** (`inputId`)  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: id forwarded to the native `<input>`; useful with external `<label for="">`.

- **`input-mode`** (`inputMode`)  
  • _Type_: `"decimal" | "numeric" | "none"`  
  • _Default_: `numeric`  
  • _Notes_: suggests an appropriate mobile keyboard.

- **`input-tab-index`** (`inputTabIndex`)  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: overrides tab-order.

- **`label`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: floating label shown above the field.

- **`max` / `min`**  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: upper / lower bounds enforced by UI and browser validation.

- **`name`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: form field name submitted with its value.

- **`placeholder`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: helper text when the field is empty.

- **`read-only`** (`readOnly`)  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: value visible but not editable.

- **`required`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: marks field as mandatory for form submission.

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: adjusts height & font (sm ≈ 32 px, md ≈ 40 px, lg ≈ 48 px).

- **`step`**  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: granularity of allowed values (e.g. `0.01` for money).

- **`type`**  
  • _Type_: `"number" | "range"`  
  • _Default_: `number`  
  • _Notes_: `range` renders as a horizontal slider.

- **`value`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: current value (stringified).

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds CSS class to the wrapper for custom spacing/colour.

### `IInputFeedbackProp`

```ts
{
  level: 'error' | 'info' | 'success' | 'warning';
  message?: string;
}
```

## Events

- **`inputFocus`** — on focus (`CustomEvent<FocusEvent>`).
- **`inputBlur`** — on blur (`CustomEvent<FocusEvent>`).
- **`inputChange`** — whenever `value` changes (`CustomEvent<InputEvent>`).

## Usage

```html
<!-- Basic number input -->
<modus-wc-number-input
  aria-label="Quantity"
  label="Quantity">
</modus-wc-number-input>

<!-- With min / max / step -->
<modus-wc-number-input
  label="Score"
  min="0" max="100" step="10" value="50">
</modus-wc-number-input>

<!-- Currency symbol and two-decimal step -->
<modus-wc-number-input
  label="Price"
  currency-symbol="$"
  input-mode="decimal"
  step="0.01"
  placeholder="0.00">
</modus-wc-number-input>

<!-- Disabled & read-only -->
<modus-wc-number-input label="Disabled" value="123" disabled></modus-wc-number-input>
<modus-wc-number-input label="Read-only" value="42" read-only></modus-wc-number-input>

<!-- Required with error feedback -->
<modus-wc-number-input
  label="Age"
  required
  min="18"
  .feedback=${{ level:'error', message:'Must be 18 or older.' }}>
</modus-wc-number-input>

<!-- Size tokens -->
<modus-wc-number-input label="Small" size="sm"></modus-wc-number-input>
<modus-wc-number-input label="Large" size="lg"></modus-wc-number-input>

<!-- Range slider -->
<modus-wc-number-input
  label="Volume"
  type="range"
  min="0" max="11" step="1" value="5">
</modus-wc-number-input>

<!-- Handling events -->
<modus-wc-number-input id="interactive" label="Interactive"></modus-wc-number-input>
<script type="module">
  const num = document.getElementById('interactive');
  num.addEventListener('inputChange', e => console.log('New value:', e.target.value));
</script>
```

### Pattern notes

- **Validation:** combine `min`, `max`, `step`, and `required` for robust browser-level checks; supplement with runtime feedback via the `feedback` prop.
- **Currency / units:** `currency-symbol` renders inside the field; wrap the component or use CSS for inline unit labels (`kg`, `%`).
- **Range slider:** when `type="range"`, the component outputs an `<input type="range">`; styles & events stay consistent with numeric mode.
- **Accessibility:** supply `aria-label` if you omit `label`; the component internally sets `inputmode`, `aria-valuemin`, `aria-valuemax`, and `role="spinbutton"`.
- **Two-way binding:** treat `value` as the source of truth—update it programmatically and listen to `inputChange` for user edits.
