---
tag: modus-wc-slider
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-slider--docs
---

## Purpose

Lets users pick a numeric value from a continuous or stepped range. Built on an HTML `<input type="range">` but styled to match Modus. Supports min/max limits, step increments, four label‑controlled sizes, disabled/required states, and emits focus/blur/change events for two‑way binding.

## Attributes

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: extra CSS class on the wrapper `<div>` for width, margin or colour tweaks.
  • _Reflected as prop_: **yes**

- **`disabled`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: greys out the slider and blocks interaction.
  • _Reflected as prop_: **yes**

- **`input-id`** (`inputId`)
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: id forwarded to the native `<input>` for external `<label for="…">` pairing.
  • _Reflected as prop_: **yes**

- **`input-tab-index`** (`inputTabIndex`)
  • _Type_: `number`
  • _Default_: `undefined`
  • _Notes_: overrides default tab order.
  • _Reflected as prop_: **yes**

- **`label`**
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: floating label above the track; supply `aria-label` if omitted.
  • _Reflected as prop_: **yes**

- **`max`**
  • _Type_: `number`
  • _Default_: `100` (HTML default)
  • _Notes_: upper bound for `value`.
  • _Reflected as prop_: **yes**

- **`min`**
  • _Type_: `number`
  • _Default_: `0` (HTML default)
  • _Notes_: lower bound for `value`.
  • _Reflected as prop_: **yes**

- **`name`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: form-field name submitted with the value at submit time.
  • _Reflected as prop_: **yes**

- **`required`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: marks field as mandatory for form validation.
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: affects label typography; the track/thumb keep consistent height.
  • _Reflected as prop_: **yes**

- **`step`**
  • _Type_: `number`
  • _Default_: `1` (HTML default)
  • _Notes_: granularity; set to decimals for fine‑grained control.
  • _Reflected as prop_: **yes**

- **`value`**
  • _Type_: `number`
  • _Default_: `0`
  • _Notes_: current slider position; update programmatically or via user input.
  • _Reflected as prop_: **yes**

## Events

- **`inputFocus`** — fires when focus enters (`CustomEvent<FocusEvent>`).
- **`inputBlur`** — fires when focus leaves (`CustomEvent<FocusEvent>`).
- **`inputChange`** — fires whenever `value` changes (`CustomEvent<InputEvent>`).

## Usage

```html
<!-- Default slider with label -->
<modus-wc-slider
  label="Volume"
  value="50"
  aria-label="Volume control"
></modus-wc-slider>

<!-- Custom range and step -->
<modus-wc-slider
  label="Brightness"
  min="0"
  max="200"
  step="10"
  value="100"
></modus-wc-slider>

<!-- Disabled slider -->
<modus-wc-slider label="Disabled" value="25" disabled></modus-wc-slider>

<!-- Required field with form validation -->
<form onsubmit="return false;">
  <modus-wc-slider
    id="reqSlide"
    required
    label="Required setting"
  ></modus-wc-slider>
  <button type="submit">Submit</button>
</form>

<!-- Size tokens -->
<modus-wc-slider label="Small" size="sm" value="30"></modus-wc-slider>
<modus-wc-slider label="Large" size="lg" value="70"></modus-wc-slider>

<!-- Handling change -->
<modus-wc-slider
  id="interactive"
  label="Interactive"
  min="1"
  max="10"
  value="3"
></modus-wc-slider>
<p>Current: <span id="out">3</span></p>
<script type="module">
  const s = document.getElementById("interactive");
  const out = document.getElementById("out");
  s.addEventListener("inputChange", (e) => {
    out.textContent = e.target.value;
    s.value = Number(e.target.value); // keep component in sync if needed
  });
</script>
```

### Pattern notes

- **Thumb styling:** slider inherits theme colours; override `--modus-primary` etc. for custom track/filled colours.
- **Min/Max/Step:** the browser respects these constraints—use them plus validation messages for accessible forms.
- **Label alignment:** pair the `size` token with accompanying inputs to keep labels horizontally aligned.
- **Dynamic updates:** set `.value` directly or call `slider.setAttribute('value', newValue)`; component re-renders instantly.
- **Accessibility:** always set `aria-label` when you omit `label`; component exposes `role="slider"` and proper ARIA attributes (`aria-valuemin`, `aria-valuemax`, `aria-valuenow`).
