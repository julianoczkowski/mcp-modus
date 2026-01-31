---
tag: modus-wc-stepper
category: Navigation & Process
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-stepper--docs
---

## Purpose

Shows users the sequence of steps in a workflow—checkout, onboarding, wizard, etc.—and makes it clear where they currently are. Can run **horizontally** or **vertically**, lets you colour individual steps, replace numbers with icons or text, and apply custom classes for styling.

## Attributes

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `''`  
  • _Notes_: adds a CSS class to the `<ul>` so you can tweak gap, font or colours.  
  • _Reflected as prop_: **yes**

- **`orientation`**  
  • _Type_: `"horizontal" | "vertical"`  
  • _Default_: `horizontal`  
  • _Notes_: vertical stacks the steps; horizontal is a left-to-right ruler.  
  • _Reflected as prop_: **yes**

- **`steps`**  
  • _Type_: `IStepperItem[]`  
  • _Default_: `[]`  
  • _Notes_: array describing each step—see interface below. Always assign a _new_ array when you update.  
  • _Reflected as prop_: **yes**

### `IStepperItem`

```ts
interface IStepperItem {
  label?: string; // text under the indicator
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "neutral";
  content?: string; // custom text/icon inside the dot
  customClass?: string; // CSS class on that <li>
}
```

## Events

_None (stepper is presentational; selection is driven by app state)._

## Usage

```html
<!-- Default horizontal stepper -->
<modus-wc-stepper
  aria-label="Signup progress"
  .steps=${[
    { label: 'Account' },
    { label: 'Profile' },
    { label: 'Verify', color: 'warning', content: '!' },
    { label: 'Finish', content: '✔' }
  ]}>
</modus-wc-stepper>

<!-- Vertical stepper -->
<modus-wc-stepper
  orientation="vertical"
  aria-label="Install steps"
  .steps=${[
    { label: 'Download',  color: 'info' },
    { label: 'Install',   color: 'info' },
    { label: 'Configure', color: 'warning' },
    { label: 'Launch',    color: 'success', content: '🚀' }
  ]}>
</modus-wc-stepper>

<!-- Programmatically updating steps -->
<modus-wc-stepper id="wizard" aria-label="Wizard"></modus-wc-stepper>
<script type="module">
  const wizard = document.getElementById('wizard');
  wizard.steps = [
    { label: 'Start',   color: 'primary' },
    { label: 'Middle',  color: 'primary' },
    { label: 'Review',  color: 'warning' },
    { label: 'Submit',  content: '✔' }
  ];
</script>

<!-- Custom class for compact style -->
<style>
  .compact-steps { gap: 0.5rem; font-size: 0.85rem; }
</style>
<modus-wc-stepper
  custom-class="compact-steps"
  .steps=${[
    { label: 'One' },
    { label: 'Two' },
    { label: 'Three' }
  ]}>
</modus-wc-stepper>
```

### Pattern notes

- **Immutable updates:** always reassign a _new_ `steps` array rather than mutating existing objects—this triggers re-render.
- **Colour tokens:** choose `color` values from the Modus palette so indicators match the active theme.
- **Icons / text:** supply `content` to replace the default numbers with icons (`✔`, `🔒`) or short text.
- **Accessibility:** stepper outputs an ordered list; include an `aria-label` so screen-readers announce its purpose.
- **Orientation switch:** vertical mode automatically changes flex direction and connector line—you don’t need extra CSS.
- **Custom classes:** target individual steps via `.customClass` in each `IStepperItem` for precise per-step styling.
