---
tag: modus-wc-input-feedback
category: Feedback & Messaging
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-forms-input-feedback--docs
---

## Purpose

Provides contextual feedback for form fields—error messages, success confirmations, warnings, or informational tips—with an optional custom icon and three preset sizes.

## Attributes

- **`level`**  
  • _Type_: `"error" | "info" | "success" | "warning"` **(required)**  
  • _Default_: _none_  
  • _Notes_: drives colour scheme and default icon.  
  • _Reflected as prop_: **yes**

- **`message`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: feedback text displayed to the user.  
  • _Reflected as prop_: **yes**

- **`icon`**  
  • _Type_: `string`  
  • _Default_: `''` (auto-selected by `level`)  
  • _Notes_: overrides the default icon with any Modus icon name.  
  • _Reflected as prop_: **yes**

- **`size`**  
  • _Type_: `"sm" | "md" | "lg"`  
  • _Default_: `md`  
  • _Notes_: adjusts font and icon size; aligns with other Modus input sizes.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds extra CSS class(es) to the outer wrapper for spacing or colour tweaks.  
  • _Reflected as prop_: **yes**

## Events

_None_

## Usage

```html
<!-- Basic error message -->
<modus-wc-input-feedback
  level="error"
  message="Uh oh. You done messed up.">
</modus-wc-input-feedback>

<!-- Info, success and warning levels -->
<modus-wc-input-feedback level="info"    message="Heads-up: we auto-save."></modus-wc-input-feedback>
<modus-wc-input-feedback level="success" message="Changes saved!"></modus-wc-input-feedback>
<modus-wc-input-feedback level="warning" message="Passwords don’t match."></modus-wc-input-feedback>

<!-- Custom icon -->
<modus-wc-input-feedback
  level="success"
  icon="calendar_check"
  message="Event added to calendar!">
</modus-wc-input-feedback>

<!-- Different sizes -->
<modus-wc-input-feedback level="info" size="sm" message="Small info."></modus-wc-input-feedback>
<modus-wc-input-feedback level="warning" size="lg" message="Large warning."></modus-wc-input-feedback>

<!-- Integrated with a text input -->
<modus-wc-text-input
  label="Username"
  .feedback=${{ level: 'success', message: 'Username is available!' }}>
</modus-wc-text-input>
```

### Pattern notes

- **Icon loading:** ensure Modus Icons are included in your page; otherwise custom `icon` names won’t resolve.
- **Dynamic feedback:** when validating user input, update the `.feedback` property on the associated input with a _new_ object to re-render.
- **Accessibility:** the component sets `role="status"` so screen-readers announce changes; avoid overly verbose messages.
- **Size matching:** pick the same `size` token as the paired input (`sm`, `md`, `lg`) to keep spacing consistent.
- **Colour overrides:** use `custom-class` to tweak colours via CSS variables (`--modus-success`, etc.) without changing internal styles.
