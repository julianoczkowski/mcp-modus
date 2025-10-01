---
tag: modus-wc-text-input
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-text-input--docs
---

## Purpose

Single-line text field that supports every HTML `type`, three size tokens, optional clear/search icons, validation feedback and full native-form participation.

## Attributes

- **`auto-capitalize`** (`autoCapitalize`)  
  • _Type_: `"off" | "none" | "on" | "sentences" | "words" | "characters"`  
  • _Default_: _(browser default)_  
  • _Notes_: hints mobile keyboards for automatic capitalisation.  
  • _Reflected_: **yes**

- **`auto-complete`** (`autoComplete`)  
  • _Type_: _HTML autocomplete tokens_ (e.g. `email`, `username`)  
  • _Default_: _(browser default)_  
  • _Notes_: enables autofill.  
  • _Reflected_: **yes**

- **`auto-correct`** (`autoCorrect`)  
  • _Type_: `"on" | "off"`  
  • _Default_: _(browser default)_  
  • _Notes_: toggles spell-correction on supported platforms.  
  • _Reflected_: **yes**

- **`bordered`**  
  • _Type_: `boolean` – default **`true`**  
  • _Notes_: shows a 1 px outline matching the theme.  
  • _Reflected_: **yes**

- **`clear-aria-label`** (`clearAriaLabel`)  
  • _Type_: `string` – default **`"Clear text"`**  
  • _Notes_: label for the clear-button when `include-clear`.  
  • _Reflected_: **yes**

- **`custom-class`**  
  • _Type_: `string` – default `''`  
  • _Notes_: adds a wrapper class for width, colour, spacing.  
  • _Reflected_: **yes**

- **`disabled`**  
  • _Type_: `boolean` – default **`false`**  
  • _Notes_: greys out and blocks interaction.  
  • _Reflected_: **yes**

- **`enterkeyhint`**  
  • _Type_: `"enter" | "done" | "go" | "next" | "previous" | "search" | "send"`  
  • _Default_: _(none)_  
  • _Notes_: suggests which virtual Enter key to display.  
  • _Reflected_: **yes**

- **`feedback`**  
  • _Type_: `IInputFeedbackProp` (interface below)  
  • _Default_: `undefined`  
  • _Notes_: shows error/info/success/warning text beneath the field.  
  • _Reflected_: **yes**

- **`include-clear`** (`includeClear`)  
  • _Type_: `boolean` – default **`false`**  
  • _Notes_: adds an inline **×** button that clears the value.  
  • _Reflected_: **yes**

- **`include-search`** (`includeSearch`)  
  • _Type_: `boolean` – default **`false`**  
  • _Notes_: shows a magnifier icon inside the field.  
  • _Reflected_: **yes**

- **`input-id`** (`inputId`)  
  • _Type_: `string`  
  • _Notes_: forwarded to the native `<input>` for external `<label for="">`.  
  • _Reflected_: **yes**

- **`input-mode`** (`inputMode`)  
  • _Type_: `"none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"`  
  • _Default_: **`"text"`**  
  • _Notes_: hints mobile keyboards for numeric pads, etc.  
  • _Reflected_: **yes**

- **`input-tab-index`** (`inputTabIndex`)  
  • _Type_: `number`  
  • _Notes_: overrides tab order.  
  • _Reflected_: **yes**

- **`label`**  
  • _Type_: `string`  
  • _Notes_: floating label above the field; omit and use `aria-label` for visually-hidden labels.  
  • _Reflected_: **yes**

- **`max-length`** (`maxLength`) / **`min-length`** (`minLength`)  
  • _Type_: `number` – defaults _none_  
  • _Notes_: browser enforces character limits.  
  • _Reflected_: **yes**

- **`name`**  
  • _Type_: `string`  
  • _Notes_: form-field name submitted with the value.  
  • _Reflected_: **yes**

- **`pattern`**  
  • _Type_: `string` (regular-expression)  
  • _Notes_: regex pattern for validation.  
  • _Reflected_: **yes**

- **`placeholder`**  
  • _Type_: `string` – default `''`  
  • _Notes_: helper text when empty.  
  • _Reflected_: **yes**

- **`read-only`** (`readOnly`)  
  • _Type_: `boolean` – default **`false`**  
  • _Notes_: value visible but not editable.  
  • _Reflected_: **yes**

- **`required`**  
  • _Type_: `boolean` – default **`false`**  
  • _Notes_: field must be filled for form submission.  
  • _Reflected_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"` – default **`"md"`**  
  • _Notes_: height & font: sm = 32 px, md = 40 px, lg = 48 px.  
  • _Reflected_: **yes**

- **`type`**  
  • _Type_: standard HTML types (`"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"url"`, `"tel"`, `"date"`, `"time"`, etc.)  
  • _Default_: **`"text"`**  
  • _Notes_: under the hood uses native `<input type="…">`.  
  • _Reflected_: **yes**

- **`value`**  
  • _Type_: `string` – default `''`  
  • _Notes_: current value (controlled or uncontrolled).  
  • _Reflected_: **yes**

### `IInputFeedbackProp`

```ts
interface IInputFeedbackProp {
  level: "error" | "info" | "success" | "warning";
  message?: string;
}
```

## Events

- **`inputChange`** — `CustomEvent<InputEvent>` fired whenever the value changes (typing, clear button, etc.).
- **`inputFocus`** — `CustomEvent<FocusEvent>` when the field gains focus.
- **`inputBlur`** — `CustomEvent<FocusEvent>` when the field loses focus.

## Usage

```html
<!-- Basic text input -->
<modus-wc-text-input
  aria-label="Username"
  label="Username">
</modus-wc-text-input>

<!-- Search with clear button -->
<modus-wc-text-input
  type="search"
  include-search
  include-clear
  placeholder="Search…"
  aria-label="Search field">
</modus-wc-text-input>

<!-- Email with validation feedback -->
<modus-wc-text-input
  type="email"
  required
  label="Email"
  .feedback=${{ level: 'error', message: 'Invalid email address' }}>
</modus-wc-text-input>

<!-- Size tokens & states -->
<modus-wc-text-input label="Small"  size="sm"></modus-wc-text-input>
<modus-wc-text-input label="Large"  size="lg"></modus-wc-text-input>
<modus-wc-text-input label="Disabled" disabled value="Can't edit"></modus-wc-text-input>
<modus-wc-text-input label="Read-only" read-only value="42"></modus-wc-text-input>

<!-- Handling events -->
<modus-wc-text-input id="searchBox" include-search include-clear label="Find"></modus-wc-text-input>
<script type="module">
  const sb = document.getElementById('searchBox');
  sb.addEventListener('inputChange', e => console.log('New value:', e.target.value));
</script>
```

### Pattern notes

- **HTML `type` caveat:** For numbers, dates, etc., dedicated Modus components (`number-input`, `date`, …) give richer UX; use `type` only for basic cases.
- **Clear vs search icon:** Both can be enabled at once—search icon appears left, clear icon right.
- **Dynamic feedback:** Reassign a _new_ `feedback` object to update message & colour in response to validation.
- **Mobile optimisation:** Combine `inputMode`, `enterkeyhint`, and `auto-*` attributes for better soft-keyboard behaviour.
- **Styling hooks:** `custom-class` lets you fix width, set brand colours, or override caret colour via CSS variables (`color`, `caret-color`, etc.).
