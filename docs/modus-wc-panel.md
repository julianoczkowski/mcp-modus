---
tag: modus-wc-panel
category: Layout
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-panel--docs
---

## Purpose

A customizable panel component used to organize content in a structured layout with header, body, and footer sections. Ideal for side panels, navigation containers, and sectioned content areas.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `""`  
  • _Notes_: Custom CSS class to apply to the outer panel container.  
  • _Reflected as prop_: **yes**

- **`width`**  
  • _Type_: `string`  
  • _Default_: `"350px"`  
  • _Notes_: Width of the panel (accepts any valid CSS width value).  
  • _Reflected as prop_: **yes**

- **`height`**  
  • _Type_: `string`  
  • _Default_: `"700px"`  
  • _Notes_: Height of the panel (accepts any valid CSS height value).  
  • _Reflected as prop_: **yes**

- **`floating`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: Enable floating mode with elevated shadow for overlay/modal-like appearance.  
  • _Reflected as prop_: **yes**

## Slots

- **`header`** — Content for the panel header section (typically navigation or title).
- **`body`** — Main content area of the panel.
- **`footer`** — Content for the panel footer section (typically actions or secondary navigation).

## Usage

```html
<!-- Basic panel with header, body, and footer -->
<modus-wc-panel width="250px" height="500px">
  <modus-wc-menu slot="header">
    <modus-wc-menu-item label="Home">
      <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item
      label="Dashboard"
      value="dashboard"
    ></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
    <modus-wc-menu-item
      label="Documents"
      value="documents"
    ></modus-wc-menu-item>
    <modus-wc-menu-item label="Reports" value="reports"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">
    <modus-wc-menu-item label="Settings">
      <modus-wc-icon slot="start-icon" name="settings"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>

<!-- Floating panel (with elevated shadow) -->
<modus-wc-panel width="250px" height="500px" floating>
  <modus-wc-menu slot="header">
    <modus-wc-menu-item label="Menu">
      <modus-wc-icon slot="start-icon" name="menu"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item label="Files" value="files"></modus-wc-menu-item>
    <modus-wc-menu-item label="Inbox" value="inbox"></modus-wc-menu-item>
    <modus-wc-menu-item label="Starred" value="starred"></modus-wc-menu-item>
    <modus-wc-menu-item label="Archive" value="archive"></modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="footer">
    <modus-wc-menu-item label="Help">
      <modus-wc-icon slot="start-icon" name="help"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>

<!-- Body-only panel (no header or footer) -->
<modus-wc-panel width="250px" height="auto">
  <modus-wc-menu size="lg" slot="body">
    <modus-wc-menu-item
      label="Dashboard"
      value="dashboard"
    ></modus-wc-menu-item>
    <modus-wc-menu-item label="Projects" value="projects"></modus-wc-menu-item>
    <modus-wc-menu-item label="Team" value="team"></modus-wc-menu-item>
    <modus-wc-menu-item label="Calendar" value="calendar"></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>

<!-- Custom content in slots -->
<modus-wc-panel width="300px" height="400px">
  <div
    slot="header"
    style="padding: 16px; border-bottom: 1px solid var(--modus-wc-color-base-200);"
  >
    <h3 style="margin: 0;">Panel Title</h3>
  </div>

  <div slot="body" style="padding: 16px;">
    <p>Custom body content can include any HTML elements.</p>
    <modus-wc-button>Action Button</modus-wc-button>
  </div>

  <div
    slot="footer"
    style="padding: 16px; border-top: 1px solid var(--modus-wc-color-base-200);"
  >
    <modus-wc-button variant="outlined">Cancel</modus-wc-button>
    <modus-wc-button color="primary">Save</modus-wc-button>
  </div>
</modus-wc-panel>

<!-- Responsive width panel -->
<modus-wc-panel width="100%" height="auto">
  <modus-wc-menu slot="body">
    <modus-wc-menu-item label="Full Width Item"></modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
```

## Panel vs Card

The Panel component differs from the Card component:

| Feature        | Panel                      | Card                |
| -------------- | -------------------------- | ------------------- |
| Structure      | Header, body, footer slots | Single content area |
| Purpose        | Navigation, side panels    | Content containers  |
| Default height | Fixed (700px)              | Auto                |
| Floating mode  | Yes                        | Yes (via elevation) |

Use Panel for structured layouts with distinct sections. Use Card for simple content grouping.

## Common Patterns

### Side Navigation Panel

```html
<modus-wc-panel width="240px" height="100vh">
  <modus-wc-menu slot="header">
    <modus-wc-menu-item label="App Name">
      <modus-wc-logo slot="start-icon" name="trimble" emblem></modus-wc-logo>
    </modus-wc-menu-item>
  </modus-wc-menu>

  <modus-wc-menu slot="body">
    <!-- Navigation items -->
  </modus-wc-menu>

  <modus-wc-menu slot="footer">
    <modus-wc-menu-item label="Logout">
      <modus-wc-icon slot="start-icon" name="logout"></modus-wc-icon>
    </modus-wc-menu-item>
  </modus-wc-menu>
</modus-wc-panel>
```

### Floating Action Panel

```html
<modus-wc-panel width="320px" height="auto" floating>
  <div slot="header">Quick Actions</div>
  <div slot="body">
    <modus-wc-button full-width>New Document</modus-wc-button>
    <modus-wc-button full-width>Upload File</modus-wc-button>
  </div>
</modus-wc-panel>
```
