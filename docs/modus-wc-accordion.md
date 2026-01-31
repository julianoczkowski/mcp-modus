---
tag: modus-wc-accordion
category: Navigation & Disclosure
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-accordion--docs
---

## Purpose

A lightweight container that groups one or more `modus-wc-collapse` items and coordinates their expand / collapse state.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: empty string (`''`)  
  • _Notes_: adds a custom CSS class to the accordion’s inner wrapper, letting you override layout or spacing.  
  • _Reflected as prop_: **yes**:contentReference[oaicite:1]{index=1}

_(All other behaviour is inherited from the child `modus-wc-collapse` components you place inside the default slot.)_

## Events

- **`expandedChange`** — fires a `CustomEvent<{ expanded: boolean; index: number }>` each time a child collapse item toggles, reporting the item’s index and new state.:contentReference[oaicite:2]{index=2}

## ⚠️ Important: Collapse Configuration

**The `modus-wc-collapse` components inside an accordion do NOT use a `title` attribute.** Instead, configure titles via JavaScript using the `options` property:

```html
<!-- ❌ WRONG: title attribute doesn't exist -->
<modus-wc-collapse collapse-id="item1" title="This won't work">
  <div slot="content">Content</div>
</modus-wc-collapse>

<!-- ✅ CORRECT: Set options via JavaScript -->
<modus-wc-collapse id="my-collapse" collapse-id="item1">
  <div slot="content">Content</div>
</modus-wc-collapse>

<script type="module">
  const collapse = document.getElementById("my-collapse");
  collapse.options = {
    title: "This will work!",
    description: "Optional subtitle",
    icon: "help", // Optional Modus icon
  };
</script>
```

## Usage

```html
<modus-wc-accordion>
  <modus-wc-collapse id="collapse1" collapse-id="item1">
    <div slot="content">Content for item one.</div>
  </modus-wc-collapse>

  <modus-wc-collapse id="collapse2" collapse-id="item2">
    <div slot="content">Content for item two.</div>
  </modus-wc-collapse>

  <modus-wc-collapse id="collapse3" collapse-id="item3">
    <div slot="content">Content for item three.</div>
  </modus-wc-collapse>
</modus-wc-accordion>

<script type="module">
  // Configure collapse options
  document.getElementById("collapse1").options = {
    title: "Item One",
    description: "First accordion item",
    icon: "star",
  };

  document.getElementById("collapse2").options = {
    title: "Item Two",
    description: "Second accordion item",
    icon: "settings",
  };

  document.getElementById("collapse3").options = {
    title: "Item Three",
    description: "Third accordion item",
    icon: "help",
  };

  // Listen for accordion events
  const accordion = document.querySelector("modus-wc-accordion");
  accordion.addEventListener("expandedChange", (e) => {
    console.log(
      "Item",
      e.detail.index,
      "is now",
      e.detail.expanded ? "open" : "closed"
    );
  });
</script>
```
