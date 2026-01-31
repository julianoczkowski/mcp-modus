---
tag: modus-wc-toolbar
category: Layout & Containers
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-toolbar--docs
---

## Purpose

Light‑weight horizontal flex container that lets you segment content into three logical regions—**start**, **center**, **end**. Use it to build custom app bars, page headers, or footers when `modus-wc-navbar` is too opinionated.

## Attributes

- **`custom-class`**
  • _Type_: `string` – default `''`
  • _Notes_: adds an extra CSS class to the host `<div>` so you can control background, padding, gap, etc.
  • _Reflected_: **yes**

_(No additional public attributes; layout is controlled entirely via slots and your CSS.)_

## Slots

- **`start`** — content aligned to the left (in LTR). Typical items: logo, hamburger, breadcrumbs.
- **`center`** — content centred in the toolbar. Often an app title or search box.
- **`end`** — content aligned to the right. Place buttons, avatars, status indicators here.

## Events

_None_

## Usage

```html
<!-- Basic toolbar with three sections -->
<modus-wc-toolbar aria-label="Main toolbar">
  <div slot="start">
    <img src="/logo.svg" alt="Logo" style="height:32px;" />
  </div>
  <div slot="center">
    <h1 style="margin:0;font-size:1.25rem;">Page Title</h1>
  </div>
  <div slot="end" style="display:flex;gap:.5rem;align-items:center;">
    <modus-wc-button variant="primary" size="sm">Save</modus-wc-button>
    <modus-wc-avatar
      alt="User"
      img-src="/avatar.jpg"
      size="sm"
    ></modus-wc-avatar>
  </div>
</modus-wc-toolbar>
```

### Pattern notes - **Flexbox internals:** the toolbar host is `display:flex;

align-items:center; justify-content:space-between;`—each slot container is an
implicit flex child. - **Gap control:** add margin or use `display:flex`on
slotted containers to space items. - **Responsive tweaks:** wrap the toolbar in
a media‑query and switch`flex-direction:column`for narrow screens if needed. -
**Composition:**`modus-wc-navbar`uses`modus-wc-toolbar`internally—start with
that component if you need off‑the‑shelf menus and user actions. -
**Accessibility:** set an`aria-label`or`

<header>` landmark so assistive tech recognises the toolbar’s purpose.</header>
```
