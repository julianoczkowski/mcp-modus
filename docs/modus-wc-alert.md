---
tag: modus-wc-alert
category: Feedback & Messaging
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-alert--docs
---

## Purpose

Displays contextual status messages—error, warning, success, info—optionally with a dismiss button, custom icon, and action content.

> **💡 Toast Integration:** This component is commonly used inside `modus-wc-toast` elements to create notification toasts. The alert provides the visual styling and content, while the toast handles positioning and timing.

## Attributes

- **`alert-title`**
  • _Type_: `string` **(required)**
  • _Default_: _none_
  • _Notes_: headline text of the alert.
  • _Reflected as prop_: **yes**

- **`alert-description`**
  • _Type_: `string`
  • _Default_: _none_
  • _Notes_: longer descriptive text displayed under the title.
  • _Reflected as prop_: **yes**

- **`variant`**
  • _Type_: `"info" | "success" | "warning" | "error"`
  • _Default_: `"info"`
  • _Notes_: sets colour scheme and default icon.
  • _Reflected as prop_: **yes**

- **`dismissible`**
  • _Type_: `boolean`
  • _Default_: `false`
  • _Notes_: shows an “X” button that fires `dismissClick`.
  • _Reflected as prop_: **yes**

- **`icon`**
  • _Type_: `string` (Modus icon name)
  • _Default_: auto-selected by `variant`
  • _Notes_: overrides variant icon when supplied.
  • _Reflected as prop_: **yes**

- **`role`**
  • _Type_: `"alert" | "log" | "marquee" | "status" | "timer"`
  • _Default_: `"status"`
  • _Notes_: ARIA live-region semantics.
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: empty string
  • _Notes_: extra CSS class on the host element for custom spacing / layout.
  • _Reflected as prop_: **yes**

## Events

- **`dismissClick`** — emitted when the dismiss button is pressed (payload: `CustomEvent<void>`).

## ⚠️ Common Mistakes

**Text not showing?** Make sure you're using the correct attributes:

```html
<!-- ❌ WRONG: Using 'title' instead of 'alert-title' -->
<modus-wc-alert title="This won't show" message="Neither will this">
</modus-wc-alert>

<!-- ❌ WRONG: Using 'text' or 'message' attributes -->
<modus-wc-alert text="This won't work" message="This won't work either">
</modus-wc-alert>

<!-- ❌ WRONG: Using 'type' instead of 'variant' -->
<modus-wc-alert type="success" message="This won't work either">
</modus-wc-alert>

<!-- ✅ CORRECT: Use 'variant' and 'alert-title' -->
<modus-wc-alert
  variant="success"
  alert-title="This will show!"
  alert-description="This description will also show."
>
</modus-wc-alert>

<!-- ✅ CORRECT: Minimum required is alert-title -->
<modus-wc-alert alert-title="This simple message will show"> </modus-wc-alert>
```

## Usage

```html
<!-- Default (info) -->
<modus-wc-alert
  alert-title="New message!"
  alert-description="You have 3 new messages."
>
</modus-wc-alert>

<!-- Variant examples -->
<modus-wc-alert
  variant="success"
  alert-title="Success!"
  alert-description="Operation completed."
></modus-wc-alert>
<modus-wc-alert
  variant="warning"
  alert-title="Heads-up!"
  alert-description="Check the details."
></modus-wc-alert>
<modus-wc-alert
  variant="error"
  alert-title="Error!"
  alert-description="Something went wrong."
></modus-wc-alert>

<!-- Dismissible -->
<modus-wc-alert
  dismissible
  alert-title="Dismiss me"
  alert-description="Click the X to close."
></modus-wc-alert>

<!-- Custom icon -->
<modus-wc-alert
  icon="help"
  variant="info"
  alert-title="Need help?"
  alert-description="Visit our docs."
></modus-wc-alert>

<!-- Action button slot -->
<modus-wc-alert
  alert-title="New messages"
  alert-description="You have 3 unread messages."
>
  <modus-wc-button slot="button" color="secondary" variant="outlined" size="sm">
    View
  </modus-wc-button>
</modus-wc-alert>

<!-- Custom content slot -->
<modus-wc-alert variant="success">
  <div slot="content">
    <strong>Well done!</strong> You successfully read this important alert
    message.
  </div>
</modus-wc-alert>

<!-- Used inside a toast for notifications -->
<modus-wc-toast position="top-end" delay="4000">
  <modus-wc-alert
    variant="success"
    alert-title="Operation completed!"
    alert-description="Your data has been saved successfully."
    dismissible
  ></modus-wc-alert>
</modus-wc-toast>
```

### Slot support

The component supports a **`button`** slot for action elements and a **`content`** slot when you omit `alert-title` / `alert-description` and provide fully custom markup instead.

### Pattern notes

- **Required text:** `alert-title` is REQUIRED for text to display. Don't use `title`, `text`, `message`, or `type` attributes.
- **Variant not type:** Use `variant="success"` not `type="success"` for alert styling.
- **Dismiss logic:** Listen for `dismissClick` to remove the element or update application state.
- **Icons:** Pass any Modus icon name to `icon`; leave blank to use the variant’s default.
- **ARIA:** Set `role="alert"` for interruptive messages that should be announced immediately.
- **Live updates:** Because the component is a live region, DOM changes inside it will be announced by screen readers.
- **Toast usage:** When used inside `modus-wc-toast`, this component provides the message content and styling while the toast handles positioning and auto-dismissal timing.
