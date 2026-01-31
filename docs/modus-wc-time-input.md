---
tag: modus-wc-time-input
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-time-input--docs
---

## Purpose

Single‑field time picker that accepts `HH:mm` (or `HH:mm:ss` when seconds are shown), enforces min/max limits, step increments, optional datalist suggestions, rich feedback messages and full native‑form participation.

## Attributes

- **`auto-complete`** (`autoComplete`)
  • _Type_: `"on" | "off"` _(or browser default)_
  • _Notes_: hints form autofill.
  • _Reflected_: **yes**

- **`bordered`**
  • _Type_: `boolean` – default **`true`**
  • _Notes_: draws a 1 px outline matching the current theme.
  • _Reflected_: **yes**

- **`custom-class`**
  • _Type_: `string` – default `''`
  • _Notes_: extra class on the wrapper for width, colour, spacing.
  • _Reflected_: **yes**

- **`datalist-id`** (`datalistId`)
  • _Type_: `string`
  • _Notes_: ID of an external `<datalist>` that provides dropdown suggestions.
  • _Reflected_: **yes**

- **`datalist-options`** (`datalistOptions`)
  • _Type_: `string[]`
  • _Default_: `[]`
  • _Notes_: array of `HH:mm` / `HH:mm:ss` values; component builds its own `<datalist>` when `datalist-id` is absent.
  • _Reflected_: **yes**

- **`disabled`**
  • _Type_: `boolean` – default **`false`**
  • _Notes_: greys out and blocks interaction.
  • _Reflected_: **yes**

- **`feedback`**
  • _Type_: `IInputFeedbackProp` (interface below)
  • _Notes_: shows error/info/success/warning text.
  • _Reflected_: **yes**

- **`input-id`** (`inputId`)
  • _Type_: `string`
  • _Notes_: forwarded to the `<input>` for external labels.
  • _Reflected_: **yes**

- **`input-tab-index`** (`inputTabIndex`)
  • _Type_: `number`
  • _Notes_: overrides tab order.
  • _Reflected_: **yes**

- **`label`**
  • _Type_: `string`
  • _Notes_: floating label; supply `aria-label` if omitted.
  • _Reflected_: **yes**

- **`max` / `min`**
  • _Type_: `string` in `HH:mm` or `HH:mm:ss`
  • _Notes_: upper / lower bound enforced by UI and browser validation.
  • _Reflected_: **yes**

- **`name`**
  • _Type_: `string`
  • _Notes_: form‑field name submitted with its value.
  • _Reflected_: **yes**

- **`read-only`** (`readOnly`)
  • _Type_: `boolean` – default **`false`**
  • _Notes_: value visible but not editable.
  • _Reflected_: **yes**

- **`required`**
  • _Type_: `boolean` – default **`false`**
  • _Notes_: field must be filled for form submission.
  • _Reflected_: **yes**

- **`show-seconds`** (`showSeconds`)
  • _Type_: `boolean` – default **`false`**
  • _Notes_: switches to `HH:mm:ss` display and implicitly sets `step` to 1 second (unless `step` is provided).
  • _Reflected_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"` – default **`"md"`**
  • _Notes_: height & font: sm 32 px, md 40 px, lg 48 px.
  • _Reflected_: **yes**

- **`step`**
  • _Type_: `number` (seconds)
  • _Default_: `60` (1 minute)
  • _Notes_: granularity; overrides `show-seconds`’ implicit step when both are present.
  • _Reflected_: **yes**

- **`value`**
  • _Type_: `string` – default `''`
  • _Notes_: current time; always stored as 24‑hour with leading zeros (`HH:mm` or `HH:mm:ss`).
  • _Reflected_: **yes**

### `IInputFeedbackProp`

```ts
interface IInputFeedbackProp {
  level: "error" | "info" | "success" | "warning";
  message?: string;
}
```

## Events

- **`inputFocus`** — `CustomEvent<FocusEvent>` when the field gains focus.
- **`inputBlur`** — `CustomEvent<FocusEvent>` when the field loses focus.
- **`inputChange`** — `CustomEvent<Event>` whenever `value` changes.

## Usage

```html
<!-- Basic time picker -->
<modus-wc-time-input
  aria-label="Select start time"
  label="Start time">
</modus-wc-time-input>

<!-- With seconds -->
<modus-wc-time-input
  label="Precise time"
  show-seconds
  value="14:30:45">
</modus-wc-time-input>

<!-- Min / Max / Step -->
<modus-wc-time-input
  label="Office hours (9 AM – 5 PM)"
  min="09:00" max="17:00" step="900">
</modus-wc-time-input>

<!-- Internal datalist -->
<modus-wc-time-input
  label="Meeting time"
  .datalistOptions=${['09:00','09:30','10:00','10:30']}>
</modus-wc-time-input>

<!-- External datalist -->
<modus-wc-time-input label="Preferred time" datalist-id="presetTimes"></modus-wc-time-input>
<datalist id="presetTimes">
  <option value="08:00"></option>
  <option value="12:30"></option>
  <option value="17:15"></option>
</datalist>

<!-- Disabled / Read-only -->
<modus-wc-time-input label="Disabled" value="10:00" disabled></modus-wc-time-input>
<modus-wc-time-input label="Read only" value="09:45" read-only></modus-wc-time-input>

<!-- Size tokens -->
<modus-wc-time-input label="Small" size="sm"></modus-wc-time-input>
<modus-wc-time-input label="Large" size="lg"></modus-wc-time-input>

<!-- Error feedback -->
<modus-wc-time-input
  id="eventStart"
  label="Event start"
  required
  .feedback=${{ level:'error', message:'Start time is required' }}>
</modus-wc-time-input>

<!-- Handling change -->
<modus-wc-time-input id="interactive" label="Interactive"></modus-wc-time-input>
<p>Chosen: <span id="out">–</span></p>
<script type="module">
  const ti = document.getElementById('interactive');
  const out= document.getElementById('out');
  ti.addEventListener('inputChange', e => out.textContent = e.target.value);
</script>
```

### Pattern notes

- **24‑hour output:** regardless of locale, `value` is always 24‑hour with leading zeros—easier for APIs & DB storage.
- **`show-seconds` vs `step`:** enabling seconds implicitly sets `step=1`; provide your own `step` to override (e.g. 15 s).
- **Datalist guidance:** keep suggestion strings **valid** to avoid browser warnings; dynamic options require assigning a _new_ array.
- **Validation:** combine `min`, `max`, `step` & `required` for strong browser validation; show custom feedback via `feedback`.
- **Accessibility:** if no visible `label`, include `aria-label`; the component mirrors `min`, `max`, `step`, and `value` to ARIA attributes so screen‑readers announce them.
- **Mobile keyboards:** browsers often render the native time picker; users may edit via keyboard or spinner based on locale—your code only deals with ISO‑formatted `value`.
