---
tag: modus-wc-switch
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-switch--docs
---

## Purpose

Binary toggle control that lets users switch something on / off. Supports disabled, indeterminate and required states, three size tokens, custom classes and emits the standard focus / blur / change events for two-way binding.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds extra CSS class(es) to the wrapper for bespoke spacing, colour or animation.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: greys out the switch and blocks user interaction.  
  • _Reflected as prop_: **yes**

- **`indeterminate`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: visual “mixed” state, useful when some but not all child items are enabled.  
  • _Reflected as prop_: **yes**

- **`input-id`** (`inputId`)  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: id applied to the native `<input>`; pair with an external `<label for="…">`.  
  • _Reflected as prop_: **yes**

- **`input-tab-index`** (`inputTabIndex`)  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: overrides the default tab order.  
  • _Reflected as prop_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: visible text next to the toggle; if omitted, set `aria-label`.  
  • _Reflected as prop_: **yes**

- **`name`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: submitted with the form as `name=value` when checked.  
  • _Reflected as prop_: **yes**

- **`required`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: switch must be on for the form to submit.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: sets overall dimensions (sm ≈ 28 px, md ≈ 32 px, lg ≈ 40 px).  
  • _Reflected as prop_: **yes**

- **`value`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: checked state; set programmatically or via user action.  
  • _Reflected as prop_: **yes**

## Events

- **`inputChange`** — fires when the checked state changes (`CustomEvent<InputEvent>`).
- **`inputFocus`** — fires when the input gains focus (`CustomEvent<FocusEvent>`).
- **`inputBlur`** — fires when the input loses focus (`CustomEvent<FocusEvent>`).

## Usage

```html
<!-- Default switch with label -->
<modus-wc-switch aria-label="Enable notifications" label="Enable Notifications">
</modus-wc-switch>

<!-- Sizes -->
<modus-wc-switch label="Small" size="sm"></modus-wc-switch>
<modus-wc-switch label="Large" size="lg" value="true"></modus-wc-switch>

<!-- Disabled & required -->
<modus-wc-switch label="Disabled Off" disabled></modus-wc-switch>
<modus-wc-switch label="Required On" required value="true"></modus-wc-switch>

<!-- Indeterminate -->
<modus-wc-switch label="Mixed state" indeterminate></modus-wc-switch>

<!-- Without visible label -->
<modus-wc-switch aria-label="Power toggle"></modus-wc-switch>

<!-- Handling change -->
<modus-wc-switch id="featureToggle" label="Feature"></modus-wc-switch>
<script type="module">
  const sw = document.getElementById("featureToggle");
  sw.addEventListener("inputChange", (e) => {
    console.log("New value:", e.target.value);
    sw.value = e.target.value; // keep component state in sync if managed externally
  });
</script>
```

### Pattern notes

- **Label vs ARIA:** if no `label` attr, supply an `aria-label` so screen-readers announce the control.
- **Indeterminate:** treat `indeterminate` as presentation-only; you still need to track the real on/off state elsewhere.
- **Form behaviour:** unchecked switches are not sent with the form; set `name` & `value=true` to submit `"name=on"`.
- **Keyboard support:** space toggles, tab cycles focus; component handles `aria-checked`.
- **Styling:** prefer `custom-class` for margin tweaks—avoid deep selectors on internal elements for long-term safety.
