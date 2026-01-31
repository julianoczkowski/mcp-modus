---
tag: modus-wc-utility-panel
category: Layout
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-utility-panel--docs
---

## Purpose

A collapsible side panel container that provides additional content and functionality related to the primary screen. Use it for secondary information, tools, or navigation without cluttering the main interface. The panel can be expanded or collapsed to optimize screen real estate.

## Attributes

- **`collapsed`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: controls whether the panel is collapsed (hidden) or expanded (visible).  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the panel wrapper for custom styling.  
  • _Reflected as prop_: **yes**

- **`header-text`** (`headerText`)  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: text displayed in the panel header/title area.  
  • _Reflected as prop_: **yes**

- **`panel-width`** (`panelWidth`)  
  • _Type_: `string`  
  • _Default_: `'300px'`  
  • _Notes_: sets the width of the expanded panel (CSS units: px, rem, %, etc.).  
  • _Reflected as prop_: **yes**

- **`position`**  
  • _Type_: `"left" | "right"`  
  • _Default_: `"right"`  
  • _Notes_: determines which side of the screen the panel appears on.  
  • _Reflected as prop_: **yes**

## Slots

- **_(default)_** — place any content inside the panel body (forms, lists, navigation, etc.).
- **`header`** — optional slot for custom header content instead of using `header-text`.

## Events

- **`panelToggle`** — `CustomEvent<{ collapsed: boolean }>` fired when the panel is expanded or collapsed.

## Usage

```html
<!-- Basic utility panel -->
<modus-wc-utility-panel header-text="Panel Title">
  <div>
    <h3>Additional Information</h3>
    <p>
      This is supplementary content that doesn't clutter the main interface.
    </p>
  </div>
</modus-wc-utility-panel>

<!-- Left-positioned panel -->
<modus-wc-utility-panel
  header-text="Navigation"
  position="left"
  panel-width="250px"
>
  <nav>
    <ul>
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
    </ul>
  </nav>
</modus-wc-utility-panel>

<!-- Initially collapsed panel -->
<modus-wc-utility-panel header-text="Tools" collapsed panel-width="400px">
  <div>
    <modus-wc-button>Tool 1</modus-wc-button>
    <modus-wc-button>Tool 2</modus-wc-button>
    <modus-wc-button>Tool 3</modus-wc-button>
  </div>
</modus-wc-utility-panel>

<!-- Custom header slot -->
<modus-wc-utility-panel>
  <div slot="header">
    <modus-wc-icon name="settings"></modus-wc-icon>
    <span>Settings Panel</span>
    <modus-wc-button size="sm" variant="borderless">
      <modus-wc-icon name="close"></modus-wc-icon>
    </modus-wc-button>
  </div>
  <div>
    <form>
      <modus-wc-text-input label="Setting 1"></modus-wc-text-input>
      <modus-wc-switch label="Enable feature"></modus-wc-switch>
    </form>
  </div>
</modus-wc-utility-panel>

<!-- Event handling -->
<modus-wc-utility-panel id="myPanel" header-text="Dynamic Panel">
  <div id="panelContent">Content goes here</div>
</modus-wc-utility-panel>

<script type="module">
  const panel = document.getElementById("myPanel");

  panel.addEventListener("panelToggle", (event) => {
    console.log(
      "Panel toggled:",
      event.detail.collapsed ? "collapsed" : "expanded"
    );

    // Update content based on panel state
    const content = document.getElementById("panelContent");
    if (event.detail.collapsed) {
      content.innerHTML = "<p>Panel is collapsed</p>";
    } else {
      content.innerHTML = "<p>Panel is expanded - showing full content</p>";
    }
  });

  // Programmatically toggle panel
  function togglePanel() {
    panel.collapsed = !panel.collapsed;
  }
</script>
```

### Pattern notes

- **Responsive behavior:** The panel automatically adjusts for mobile viewports, typically becoming an overlay or drawer.
- **Content organization:** Use the panel for secondary actions, filters, settings, or contextual information that supports the main content.
- **Performance:** Content inside collapsed panels is still rendered in the DOM but hidden via CSS—consider lazy loading for heavy content.
- **Accessibility:** The panel includes proper ARIA attributes and keyboard navigation support for screen readers.
- **State management:** The `collapsed` state can be controlled programmatically or by user interaction with the toggle button.
- **Width considerations:** Use relative units (rem, %) for responsive designs, or fixed pixels for consistent layouts.
