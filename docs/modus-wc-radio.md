---
tag: modus-wc-radio
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-radio--docs
---

## Purpose

A standard form control that lets users choose **one** option from a mutually-exclusive group. Supports four sizes, disabled and required states, custom classes, and emits change / focus / blur events.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra CSS class on the wrapper `<div>` for spacing or colour tweaks.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out the control and blocks pointer / keyboard interaction.  
  • _Reflected as prop_: **yes**

- **`input-id`** (`inputId`)  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: forwards to the underlying `<input id="">`; pair with external `<label for="">`.  
  • _Reflected as prop_: **yes**

- **`input-tab-index`** (`inputTabIndex`)  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: overrides the default tab order.  
  • _Reflected as prop_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: visible text next to the radio; if omitted, add an `aria-label`.  
  • _Reflected as prop_: **yes**

- **`name`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: radio buttons that share the same `name` form an exclusive group.  
  • _Reflected as prop_: **yes**

- **`required`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: at least one radio in the group must be checked before form submit.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"xs" | "sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: sets control diameter (xs ≈ 12 px, sm ≈ 16 px, md ≈ 20 px, lg ≈ 24 px).  
  • _Reflected as prop_: **yes**

- **`value`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: checked state; toggled by user or programmatically.  
  • _Reflected as prop_: **yes**

## Events

- **`inputChange`** — fires when checked state changes (`CustomEvent<InputEvent>`).
- **`inputFocus`** — fires when the native input gains focus (`CustomEvent<FocusEvent>`).
- **`inputBlur`** — fires when the native input loses focus (`CustomEvent<FocusEvent>`).

## Usage

```html
<!-- Radio button group -->
<fieldset>
  <legend>Preferred contact</legend>

  <modus-wc-radio
    label="Email"
    name="contact"
    input-id="contactEmail"
    value="true"
  >
  </modus-wc-radio>

  <modus-wc-radio label="Phone" name="contact" input-id="contactPhone">
  </modus-wc-radio>

  <modus-wc-radio label="Mail" name="contact" input-id="contactMail">
  </modus-wc-radio>
</fieldset>

<!-- Size tokens -->
<modus-wc-radio label="XS" size="xs" name="sizes"></modus-wc-radio>
<modus-wc-radio label="SM" size="sm" name="sizes"></modus-wc-radio>
<modus-wc-radio label="MD" size="md" name="sizes" value="true"></modus-wc-radio>
<modus-wc-radio label="LG" size="lg" name="sizes"></modus-wc-radio>

<!-- Disabled and required -->
<modus-wc-radio label="Disabled" name="state" disabled></modus-wc-radio>
<modus-wc-radio label="Must pick one" name="state" required></modus-wc-radio>

<!-- No visible label -->
<modus-wc-radio aria-label="Option A" name="nolabel"></modus-wc-radio>

<!-- Handling changes -->
<modus-wc-radio
  id="notify"
  label="Receive updates"
  name="updates"
></modus-wc-radio>
<script type="module">
  document
    .getElementById("notify")
    .addEventListener("inputChange", (e) =>
      console.log("Checked?", e.target.value)
    );
</script>
```

### Pattern notes

- **Grouping:** radios are exclusive by `name`; make sure every option in a set shares the same `name`.
- **Form submission:** only the checked radio in a group is submitted as `name=value` (value is the component’s `input-id` or the browser’s default).
- **Label vs ARIA:** if you omit the `label` attribute, always add a descriptive `aria-label`.
- **Validation:** combine `required` with browser constraint validation; un-checked required radios block form submission.
- **Styling:** use `custom-class` to adjust spacing—avoid deep selectors on internal elements to preserve upgrade safety.
