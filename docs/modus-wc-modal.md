---
tag: modus-wc-modal
category: Overlays & Dialogs
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-modal--docs
---

## Purpose

Displays content inside a blocking dialog overlay (built on the native `<dialog>` element) so users can review details, fill in a form, or confirm an action without leaving the current page.

## Attributes

- **`modal-id`**  
  • _Type_: `string` **(required)**  
  • _Default_: –  
  • _Notes_: ID applied to the inner `<dialog>`; also used to reference the modal in JavaScript.  
  • _Reflected as prop_: **yes**

- **`backdrop`**  
  • _Type_: `"default" | "static"`  
  • _Default_: `default`  
  • _Notes_: when `static`, clicking outside the dialog does **not** close it; user must press **Esc** or an explicit button.  
  • _Reflected as prop_: **yes**

- **`position`**  
  • _Type_: `"top" | "center" | "bottom"`  
  • _Default_: `center`  
  • _Notes_: vertical placement on the screen.  
  • _Reflected as prop_: **yes**

- **`fullscreen`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: makes the dialog cover the entire viewport.  
  • _Reflected as prop_: **yes**

- **`show-fullscreen-toggle`** (`showFullscreenToggle`)  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: shows a button in the header that toggles `fullscreen`.  
  • _Reflected as prop_: **yes**

- **`show-close`** (`showClose`)  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: hides the built-in “×” icon when set to `false`.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: extra CSS class on the outer dialog box—use for width/height tweaks or branding.  
  • _Reflected as prop_: **yes**

## Slots

- **`header`** — title area (text, icons, etc.).
- **`content`** — main scrollable body.
- **`footer`** — actions such as “Save”, “Cancel”.

## Events

_None (open / close are controlled with the native `showModal()` and `close()` methods)._

## Usage

```html
<!-- Trigger button -->
<modus-wc-button id="openModalBtn">Open modal</modus-wc-button>

<!-- Default modal -->
<modus-wc-modal aria-label="Example modal" modal-id="myDefaultModal">
  <span slot="header">Modal Title</span>
  <span slot="content">This is sample modal content.</span>
  <modus-wc-button slot="footer" id="closeModalBtn">Close</modus-wc-button>
</modus-wc-modal>

<script type="module">
  const modal = document.getElementById("myDefaultModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");

  openBtn.addEventListener("click", () => modal.showModal());
  closeBtn.addEventListener("click", () => modal.close());
</script>

<!-- Top-aligned modal with static backdrop -->
<modus-wc-modal modal-id="topModal" position="top" backdrop="static">
  <span slot="header">Top Modal</span>
  <span slot="content">Clicking outside will *not* close me.</span>
  <modus-wc-button
    slot="footer"
    onclick="document.getElementById('topModal').close()"
    >Dismiss
  </modus-wc-button>
</modus-wc-modal>

<!-- Full-screen modal with toggle button -->
<modus-wc-modal modal-id="fsModal" show-fullscreen-toggle="true">
  <span slot="header">Fullscreen Toggle Modal</span>
  <span slot="content">Toggle button is in the header.</span>
  <modus-wc-button
    slot="footer"
    onclick="document.getElementById('fsModal').close()"
    >Close
  </modus-wc-button>
</modus-wc-modal>

<!-- Custom size via custom-class -->
<style>
  .expanded-modal .modus-wc-modal-box {
    width: 80%;
    height: 60%;
    max-width: none;
    max-height: none;
  }
</style>
<modus-wc-modal modal-id="customSizeModal" custom-class="expanded-modal">
  <span slot="header">Custom Size</span>
  <span slot="content">This modal overrides default width & height.</span>
  <modus-wc-button
    slot="footer"
    onclick="document.getElementById('customSizeModal').close()"
    >Close
  </modus-wc-button>
</modus-wc-modal>
```

### Pattern notes

- **Opening / closing:** call `element.showModal()` to open and `element.close()` to dismiss; both return immediately and trigger `<dialog>` events.
- **Backdrop click:** with `backdrop="default"`, clicking outside closes the modal; intercept the `click` event to customise.
- **Focus trap:** the native `<dialog>` keeps focus inside the modal—no extra JS required.
- **Scroll handling:** body scrolling is automatically locked while any modal is open.
- **Custom dimensions:** target `.modus-wc-modal-box` inside a `custom-class` to adjust width/height; avoid inline styles for maintainability.
- **Accessibility:** the component sets `role="dialog"` and links `aria-labelledby`/`aria-describedby`; supply meaningful header/content text and `aria-label` for screen-reader users.
