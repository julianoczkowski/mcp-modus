---
tag: modus-wc-avatar
category: Data Display
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-avatar--docs
---

## Purpose

Shows a user or entity image in a circle or square, with four built‑in sizes and an accessible `alt` text requirement.

## Attributes

- **`alt`**
  • _Type_: `string` **(required)**
  • _Default_: _none_
  • _Notes_: image alt attribute for screen‑reader users.
  • _Reflected as prop_: **yes**

- **`img-src`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: URL of the image file; if omitted the component may show a placeholder in future releases.
  • _Reflected as prop_: **yes**

- **`shape`**
  • _Type_: `"circle" | "square"`
  • _Default_: `circle`
  • _Notes_: circle is typical for profile pictures; square matches data‑tables or cards.
  • _Reflected as prop_: **yes**

- **`size`**
  • _Type_: `"xs" | "sm" | "md" | "lg"`
  • _Default_: `md`
  • _Notes_: token drives width/height (e.g. xs = 24 px, sm = 32 px, md = 40 px, lg = 64 px).
  • _Reflected as prop_: **yes**

- **`custom-class`**
  • _Type_: `string`
  • _Default_: `''`
  • _Notes_: adds extra class(es) to the inner wrapper for bespoke borders, shadows, etc.
  • _Reflected as prop_: **yes** fileciteturn13file0

## Events

_None_

## Usage

```html
<!-- Default circle, medium -->
<modus-wc-avatar
  alt="Ada Lovelace"
  img-src="https://example.com/avatars/ada.jpg"
>
</modus-wc-avatar>

<!-- Square, small -->
<modus-wc-avatar
  alt="Square avatar"
  img-src="https://example.com/avatars/square.png"
  shape="square"
  size="sm"
>
</modus-wc-avatar>

<!-- Large circle with custom border -->
<style>
  .ring {
    box-shadow: 0 0 0 3px var(--modus-primary, #0076ff);
    border-radius: 50%;
  }
</style>
<modus-wc-avatar
  alt="Avatar with ring"
  img-src="https://example.com/avatars/ring.jpg"
  size="lg"
  custom-class="ring"
>
</modus-wc-avatar>
```

### Pattern notes

- **Accessibility:** `alt` is mandatory; keep it meaningful (e.g. user’s full name).
- **Fallback images:** if `img-src` is empty or fails to load, the component may show initials or a generic icon in future versions—plan for this.
- **Sizing:** avatar sizes map to the same tokens used in other Modus inputs, so grids stay aligned.
- **Custom styling:** prefer `custom-class` over deep selectors to avoid breaking internals.
