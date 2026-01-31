---
tag: modus-wc-input-label
category: Forms & Data Entry
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-input-label--docs
---

## Purpose

Displays a label for an associated form control, with optional sub‑label text, required‑field asterisk, three size tokens and the ability to hold custom inline content (icons, shortcuts, etc.).

## Attributes

- **`for-id`**
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: forwarded to the native `for` attribute so the label activates the input whose `id` matches this value.
  • _Reflected as prop_: **yes**

- **`label-text`**
  • _Type_: `string` **(required)**
  • _Default_: `undefined`
  • _Notes_: main visible text of the label.
  • _Reflected as prop_: **yes**

- **`sub-label-text`**
  • _Type_: `string`
  • _Default_: `undefined`
  • _Notes_: smaller helper text rendered beneath the main label.
  • _Reflected as prop_: **yes**

- **`required`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: shows an asterisk “\*” after the label to indicate a mandatory field.
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: controls font size of label and sub‑label (`sm` ≈ 12 px, `md` ≈ 14 px, `lg` ≈ 16 px).
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: extra CSS class(es) on the host `<label>` for custom colour, italics, spacing, etc.
  • _Reflected as prop_: **yes**

## Slots

- **_(default)_** — injects arbitrary HTML (icons, keyboard hints, etc.) after the main label text.

## Events

_None_

## Usage

```html
<!-- Simple label -->
<modus-wc-input-label label-text="Username"></modus-wc-input-label>

<!-- Label linked to an input -->
<modus-wc-input-label for-id="email" label-text="Email"></modus-wc-input-label>
<modus-wc-text-input id="email"></modus-wc-text-input>

<!-- Required field with sub-label -->
<modus-wc-input-label
  label-text="Password"
  sub-label-text="At least 8 characters"
  required
>
</modus-wc-input-label>

<!-- Different sizes -->
<modus-wc-input-label label-text="Small" size="sm"></modus-wc-input-label>
<modus-wc-input-label label-text="Large" size="lg"></modus-wc-input-label>

<!-- Label with slotted icon -->
<modus-wc-input-label label-text="Search">
  <modus-wc-icon
    name="search"
    size="sm"
    style="margin-inline-start:4px;"
  ></modus-wc-icon>
</modus-wc-input-label>

<!-- Custom styling via class -->
<style>
  .blue-italic {
    color: royalblue;
    font-style: italic;
  }
</style>
<modus-wc-input-label
  label-text="Custom"
  custom-class="blue-italic"
></modus-wc-input-label>
```

### Pattern notes

- **Associating with inputs:** always point `for-id` to the exact `id` of the input so clicking the label focuses the field.
- **Required indicator:** the asterisk is purely visual; also set `required` on the actual input for validation.
- **Sub‑label length:** keep `sub-label-text` concise—wrap longer instructions inside a separate help text component instead.
- **Size consistency:** choose the same `size` token as the companion input so label and field align vertically.
- **Accessibility:** when no visible text is provided (rare), include `aria-label` or `aria-labelledby` on the input itself; the label component outputs a native `<label>` element ensuring correct semantics.
- **Custom content:** leverage the default slot for icons, shortcut hints (“⌘ K”), or inline buttons; keep them small so they don’t break line height.
