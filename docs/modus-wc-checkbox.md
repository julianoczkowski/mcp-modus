---
tag: modus-wc-checkbox
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-checkbox--docs
---

## Purpose

A standard form control that lets users select a binary option (checked / unchecked) or a third **indeterminate** state when representing a mixed selection.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra CSS class(es) applied to the wrapper `<div>` for custom spacing or layout.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out the checkbox and blocks pointer / keyboard interaction.  
  • _Reflected as prop_: **yes**

- **`indeterminate`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: shows a mixed state (horizontal bar) independent of `value`; useful in tree views.  
  • _Reflected as prop_: **yes**

- **`input-id`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: forwards to the underlying `<input id="">`, helpful for `<label for="…">` pairs.  
  • _Reflected as prop_: **yes**

- **`input-tab-index`**  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: overrides the default tab order.  
  • _Reflected as prop_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: visible text next to the checkbox; if omitted, provide `aria-label`.  
  • _Reflected as prop_: **yes**

- **`name`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: form field name submitted with the form.  
  • _Reflected as prop_: **yes**

- **`required`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: marks the field as required for native form validation.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: adjusts checkbox dimension to 16 px, 20 px, 24 px respectively.  
  • _Reflected as prop_: **yes**

- **`value`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: checked state; toggle via user interaction or programmatically.  
  • _Reflected as prop_: **yes**

## Events

- **`inputBlur`** — fired when the input loses focus (`CustomEvent<FocusEvent>`).
- **`inputChange`** — fired when the checked state changes (`CustomEvent<InputEvent>`).
- **`inputFocus`** — fired when the input gains focus (`CustomEvent<FocusEvent>`).

## Usage

```html
<!-- Default medium checkbox with label -->
<modus-wc-checkbox
  aria-label="Checkbox example"
  label="Subscribe to newsletter"
>
</modus-wc-checkbox>

<!-- Size variants -->
<modus-wc-checkbox size="sm" label="Small"></modus-wc-checkbox>
<modus-wc-checkbox size="md" label="Medium (default)"></modus-wc-checkbox>
<modus-wc-checkbox size="lg" label="Large"></modus-wc-checkbox>

<!-- Disabled / preset states -->
<modus-wc-checkbox disabled label="Disabled checked" value></modus-wc-checkbox>
<modus-wc-checkbox disabled label="Disabled unchecked"></modus-wc-checkbox>

<!-- Indeterminate -->
<modus-wc-checkbox label="Parent item" indeterminate> </modus-wc-checkbox>

<!-- Required checkbox -->
<modus-wc-checkbox label="Accept terms" required> </modus-wc-checkbox>

<!-- Stand-alone without visible label -->
<modus-wc-checkbox aria-label="Standalone checkbox"></modus-wc-checkbox>

<!-- Handling change events -->
<modus-wc-checkbox id="agree" label="I agree"></modus-wc-checkbox>
<script type="module">
  const cb = document.getElementById("agree");
  cb.addEventListener("inputChange", (e) =>
    console.log("Checked:", e.target.value)
  );
</script>
```

## Pattern notes

Accessibility: supply aria-label when there’s no visible label prop; the component manages aria-checked automatically.
Indeterminate logic: this visual state is controlled via the indeterminate property—remember to clear or set it based on child checkbox states.
Form integration: name & value let native forms submit a name/value pair when checked; unchecked boxes are not submitted.
Two-way binding: listen for inputChange and then reflect the new state back to value if you keep external state.
Styling: use custom-class to tweak spacing; avoid deep selectors on internal elements to maintain upgrade-safety.
