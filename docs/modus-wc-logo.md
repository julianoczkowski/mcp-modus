---
tag: modus-wc-logo
category: Branding
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-logo--docs
---

## Purpose

A component for displaying Trimble product logos with support for both full logos and emblem (icon-only) variants. Provides consistent branding across applications with automatic theme-aware light/dark switching.

## Important: Brand Colors

The Logo component embeds official Trimble/Viewpoint brand colors directly in the SVG assets:

- **Do NOT override logo colors with CSS** - use the provided theme variants instead
- Logo SVGs contain official Trimble brand colors (e.g., Trimble Blue #0063a3)
- Each logo has separate light and dark theme variants with appropriate brand colors
- Theme switching is automatic via `data-theme` attribute observation on the `<html>` element
- Viewpoint products use Viewpoint-specific brand colors

## Attributes

- **`name`** _(required)_  
  • _Type_: `LogoName` (see Available Logos below)  
  • _Default_: `undefined`  
  • _Notes_: The name of the logo to display. Required attribute.  
  • _Reflected as prop_: **yes**

- **`emblem`**  
  • _Type_: `boolean`  
  • _Default_: `false`  
  • _Notes_: Show emblem version (icon only) instead of full logo.  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `""`  
  • _Notes_: Custom CSS class to apply to the logo container (useful for sizing).  
  • _Reflected as prop_: **yes**

- **`alt`**  
  • _Type_: `string`  
  • _Default_: `undefined` (falls back to logo name)  
  • _Notes_: Alt text for accessibility. If not provided, defaults to the logo name.  
  • _Reflected as prop_: **yes**

## Available Logos

### Trimble Products (19 logos)

| Name                | Display Name            |
| ------------------- | ----------------------- |
| `trimble`           | Trimble                 |
| `siteworks`         | Trimble Siteworks       |
| `earthworks`        | Trimble Earthworks      |
| `financials`        | Trimble Financials      |
| `worksmanager`      | Trimble WorksManager    |
| `connect`           | Trimble Connect         |
| `unity_construct`   | Trimble Unity Construct |
| `trade_servicelive` | Trade ServiceAlive      |
| `buildable`         | Buildable               |
| `livecount`         | LiveCount               |
| `supplier_xchange`  | Supplier Xchange        |
| `app_xchange`       | App Xchange             |
| `trimble_unity`     | Trimble Unity           |
| `sketchup`          | SketchUp                |
| `pc_miler`          | PC Miler                |
| `copilot`           | CoPilot                 |
| `trimble_pay`       | Trimble Pay             |
| `projectsight`      | ProjectSight            |
| `demand_planning`   | Demand Planning         |

### Viewpoint Products (17 logos)

| Name                              | Display Name                    |
| --------------------------------- | ------------------------------- |
| `viewpoint`                       | Viewpoint                       |
| `viewpoint_analytics`             | Viewpoint Analytics             |
| `viewpoint_epayments`             | Viewpoint ePayments             |
| `viewpoint_estimating`            | Viewpoint Estimating            |
| `viewpoint_field_management`      | Viewpoint Field Management      |
| `viewpoint_field_time`            | Viewpoint Field Time            |
| `viewpoint_financial_controls`    | Viewpoint Financial Controls    |
| `viewpoint_hr_management`         | Viewpoint HR Management         |
| `viewpoint_jobpac_connect`        | Viewpoint Jobpac Connect        |
| `viewpoint_procontractor`         | Viewpoint ProContractor         |
| `viewpoint_spectrum`              | Viewpoint Spectrum              |
| `viewpoint_team`                  | Viewpoint Team                  |
| `viewpoint_vista`                 | Viewpoint Vista                 |
| `viewpoint_spectrum_service_tech` | Viewpoint Spectrum Service Tech |
| `viewpoint_for_projects`          | Viewpoint For Projects          |
| `viewpoint_vista_field_service`   | Viewpoint Vista Field Service   |
| `viewpoint_field_view`            | Viewpoint Field View            |

## Usage

```html
<!-- Basic Trimble logo -->
<modus-wc-logo name="trimble"></modus-wc-logo>

<!-- Emblem (icon-only) version -->
<modus-wc-logo name="trimble" emblem></modus-wc-logo>

<!-- With custom alt text -->
<modus-wc-logo name="connect" alt="Trimble Connect Platform"></modus-wc-logo>

<!-- Viewpoint product logo -->
<modus-wc-logo name="viewpoint_vista"></modus-wc-logo>

<!-- Custom sizing with CSS class -->
<style>
  .logo-small {
    width: 80px;
  }
  .logo-medium {
    width: 150px;
  }
  .logo-large {
    width: 250px;
  }
  .emblem-sm {
    width: 50px;
    height: 50px;
  }
  .emblem-md {
    width: 80px;
    height: 80px;
  }
  .emblem-lg {
    width: 120px;
    height: 120px;
  }
</style>

<!-- Small logo -->
<modus-wc-logo name="trimble" custom-class="logo-small"></modus-wc-logo>

<!-- Medium logo -->
<modus-wc-logo name="trimble" custom-class="logo-medium"></modus-wc-logo>

<!-- Large logo -->
<modus-wc-logo name="trimble" custom-class="logo-large"></modus-wc-logo>

<!-- Sized emblems -->
<modus-wc-logo name="trimble" emblem custom-class="emblem-sm"></modus-wc-logo>
<modus-wc-logo name="trimble" emblem custom-class="emblem-md"></modus-wc-logo>
<modus-wc-logo name="trimble" emblem custom-class="emblem-lg"></modus-wc-logo>
```

## Theme Awareness

The logo component automatically switches between light and dark variants based on the current theme:

```html
<!-- Logo automatically uses correct variant based on data-theme -->
<html data-theme="modus-classic-light">
  <!-- Uses light theme logo SVG -->
  <modus-wc-logo name="trimble"></modus-wc-logo>
</html>

<html data-theme="modus-classic-dark">
  <!-- Automatically switches to dark theme logo SVG -->
  <modus-wc-logo name="trimble"></modus-wc-logo>
</html>
```

The component observes the `data-theme` attribute on the `<html>` element and automatically updates when the theme changes.

## Accessibility

- Uses `role="img"` for proper semantic meaning
- Includes `aria-label` derived from alt text or logo name
- Logo names are converted to readable format (underscores become spaces)

## Best Practices

1. **Always use the component** - Don't embed logo SVGs directly; use this component for consistent branding
2. **Don't override colors** - The SVGs contain official brand colors; use the provided theme variants
3. **Use emblems for compact spaces** - When space is limited, use the `emblem` variant
4. **Provide custom alt text** - For better accessibility, especially when context matters
5. **Size via custom-class** - Control logo size through CSS classes, not inline styles
