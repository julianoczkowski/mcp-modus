---
tag: modus-wc-textarea
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-textarea--docs
---

## Purpose

Multi‑line text field (wrapper around a native `<textarea>`) that integrates with Modus styling and validation. Supports helper / error / valid messages, clear button, two preset sizes, row count, spell‑check and full native‑form participation.

## Attributes

- **`aria-label`** (`ariaLabel`)
  • _Type_: `string`
  • _Notes_: text for screen‑readers when no visible label.
  • _Reflected_: **yes**

- **`auto-focus-input`** (`autoFocusInput`)
  • _Type_: `boolean`
  • _Notes_: focuses the textarea on mount.
  • _Reflected_: **yes**

- **`autocorrect`**
  • _Type_: `boolean | "off" | "on"`
  • _Notes_: Safari/iOS automatic correction.
  • _Reflected_: **yes**

- **`clearable`**
  • _Type_: `boolean` – default **`false`**
  • _Notes_: shows an inline **×** button that clears the value.
  • _Reflected_: **yes**

- **`disabled`**
  • _Type_: `boolean` – default **`false`**
  • _Notes_: greys out the field and blocks input.
  • _Reflected_: **yes**

- **`enterkeyhint`**
  • _Type_: `"enter" | "done" | "go" | "next" | "previous" | "search" | "send"`
  • _Notes_: suggests which virtual Enter key to show on mobile keyboards.
  • _Reflected_: **yes**

- **`error-text`** (`errorText`)
  • _Type_: `string`
  • _Notes_: error message rendered below the field (also sets `aria-invalid`).
  • _Reflected_: **yes**

- **`helper-text`** (`helperText`)
  • _Type_: `string`
  • _Notes_: neutral helper message displayed under the field.
  • _Reflected_: **yes**

- **`label`**
  • _Type_: `string`
  • _Notes_: floating label above the textarea.
  • _Reflected_: **yes**

- **`max-length`** (`maxLength`) / **`min-length`** (`minLength`)
  • _Type_: `number`
  • _Notes_: browser enforces character limits.
  • _Reflected_: **yes**

- **`placeholder`**
  • _Type_: `string`
  • _Notes_: placeholder text.
  • _Reflected_: **yes**

- **`read-only`** (`readOnly`)
  • _Type_: `boolean` – default **`false`**
  • _Notes_: value visible but not editable.
  • _Reflected_: **yes**

- **`required`**
  • _Type_: `boolean` – default **`false`**
  • _Notes_: marks the field as mandatory.
  • _Reflected_: **yes**

- **`rows`**
  • _Type_: `number`
  • _Notes_: initial visible line count; textarea can still grow with CSS.
  • _Reflected_: **yes**

- **`size`**
  • _Type_: `"medium" | "large"`
  • _Default_: `"medium"`
  • _Notes_: medium ≈ 40 px line‑height, large ≈ 48 px.
  • _Reflected_: **yes**

- **`spellcheck`**
  • _Type_: `boolean` – default follows browser
  • _Notes_: enables spell‑checking in supporting browsers.
  • _Reflected_: **yes**

- **`text-align`** (`textAlign`)
  • _Type_: `"left" | "center" | "right"`
  • _Default_: `"left"`
  • _Notes_: horizontal alignment of typed text.
  • _Reflected_: **yes**

- **`valid-text`** (`validText`)
  • _Type_: `string`
  • _Notes_: success message shown below the field.
  • _Reflected_: **yes**

- **`value`**
  • _Type_: `string` – default `''`
  • _Notes_: current textarea content.
  • _Reflected_: **yes**

- **`custom-class`**
  • _Type_: `string` – default `''`
  • _Notes_: adds wrapper class for width or theming.
  • _Reflected_: **yes**

## Events

- **`valueChange`** — emitted on every input (`CustomEvent<string>` — the new value).

## Public methods

- **`focusInput()`** — programmatically focuses the underlying `<textarea>`; returns `Promise<void>` once applied.

## Usage

```html
<!-- Basic textarea -->
<modus-wc-textarea label="Message" placeholder="Type here…"></modus-wc-textarea>

<!-- Disabled, helper and error states -->
<modus-wc-textarea label="Disabled" disabled value="N/A"></modus-wc-textarea>
<modus-wc-textarea
  label="With helper"
  helper-text="Max 500 chars"
  placeholder="Enter details…"
>
</modus-wc-textarea>
<modus-wc-textarea
  label="With error"
  error-text="This field is required"
  required
>
</modus-wc-textarea>

<!-- Large, 3 rows, clearable -->
<modus-wc-textarea label="Large notes" size="large" rows="3" clearable>
</modus-wc-textarea>

<!-- Handling valueChange -->
<modus-wc-textarea id="comments" label="Comments"></modus-wc-textarea>
<script type="module">
  const ta = document.getElementById("comments");
  ta.addEventListener("valueChange", (e) => console.log("New text:", e.detail));
</script>
```

### Pattern notes

- **Controlled value:** update `.value` programmatically and listen for `valueChange` to keep app state in sync.
- **Clear button:** `clearable` adds an **×** icon—style its colour via `--modus-icon` CSS variable if needed.
- **Row height:** `rows` sets only the _initial_ height; allow vertical resize in CSS (`resize:vertical`) for user flexibility.
- **Validation states:** only one of `errorText`, `validText`, or `helperText` should be present at once to avoid message clutter.
- **Accessibility:** if no visible `label`, include `aria-label`; component sets `aria-invalid`, `aria-required`, etc., automatically.
- **Focus helper:** call `focusInput()` after revealing a previously hidden textarea so keyboard focus moves correctly.
