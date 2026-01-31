---
description: Comprehensive guide for using Modus icons in both React and HTML projects
globs:
alwaysApply: true
---

# Modus Web Components - Icon System Guide

This comprehensive guide covers the correct way to use Modus icons in projects using Modus Web Components, supporting both React and HTML implementations. Following these guidelines ensures consistent icon usage and proper accessibility across your application.

## 🎯 Core Principle: Use Valid Icon Names Only

**Always use valid Modus icon names.** Only the icons listed in this document are guaranteed to render properly. Invalid icon names will not display correctly.

## 🚀 Setup & Implementation

### CDN Setup

Include the Modus Icons CSS in your HTML head:

```html
<!-- Modus Icons CDN -->
<link
  rel="preload"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
  as="style"
  crossorigin="anonymous"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
/>
```

### Basic Usage Patterns

#### HTML Usage

```html
<!-- Basic icon usage -->
<i class="modus-icons">icon_name</i>

<!-- Icon with text -->
<modus-wc-button>
  <i class="modus-icons" style="margin-right: 8px">download</i>
  Download
</modus-wc-button>

<!-- Icon-only button -->
<modus-wc-button shape="circle" aria-label="Delete item">
  <i class="modus-icons">delete</i>
</modus-wc-button>
```

#### React/TSX Usage

```tsx
// Basic icon usage
<i className="modus-icons">icon_name</i>

// Icon with text
<ModusButton>
  <i className="modus-icons" style={{ marginRight: '8px' }}>download</i>
  Download
</ModusButton>

// Icon-only button
<ModusButton shape="circle" aria-label="Delete item">
  <i className="modus-icons">delete</i>
</ModusButton>
```

## 📋 Complete Icon Names List

**Only these names are allowed** when using Modus icons. Always verify icon names against this list before using them.

### A-C

accessibility, accessibility_circle, add, add_bold, add_circle, add_heavy, address, advanced_instructions, alarm_add, alarm_off, alarm_on, alert, alert_outlined, align_bottom, align_center_horiz, align_center_vert, align_left, align_right, align_top, angle_90, antenna, apps, arc, arrow_back, arrow_down, arrow_down_circle, arrow_expand_diagonal_left, arrow_expand_diagonal_right, arrow_left, arrow_left_circle, arrow_next, arrow_right, arrow_right_circle, arrow_up, arrow_up_circle, artificial_intelligence, backup_restore_cloud, backup_restore_file, bar_graph, bar_graph_line, bar_graph_square, barcode, battery_0_horizontal, battery_0_vertical, battery_25_horizontal, battery_25_vertical, battery_50_horizontal, battery_50_vertical, battery_75_horizontal, battery_75_vertical, battery_charging_horizontal, battery_charging_vertical, battery_full_horizontal, battery_full_vertical, between, bolt, bookings, bookings_open, box_select, briefcase, brightness, brush, bug, bug_report, building_corporate, buildings, calculate, calculator, calculator_symbols, calendar, calendar_add, calendar_and_key, calendar_blank, calendar_booking, calendar_cancel, calendar_check, calendar_clock, calendar_event, calendar_loading_unloading, calendar_loading_unloading_date, calendar_plus, calendar_rebook, calendar_reserve, calendar_show, calendar_time_slot, calendar_week, camera, camera_disabled, camera_photo_add, cancel_circle, cancel_square, cancel_square_outlined, caret_down, caret_down_bold, caret_left, caret_left_bold, caret_right, caret_right_bold, caret_up, caret_up_bold, cell_merge, cell_properties, cell_split, certificate, chat, check, check_bold, check_circle, check_circle_outlined, check_heavy, chevron_double_down, chevron_double_left, chevron_double_right, chevron_double_up, chevron_left, chevron_left_bold, chevron_right, chevron_right_bold, circle_notch, circle_outline, clipboard, clipboard_actions, clipboard_check, clipboard_empty, clipboard_planning, clock, clock_add, clock_checkmark, clock_delay_warning, clock_delayed, clock_locked, clock_question_mark, close, close_bold, close_heavy, cloud, cloud_connected, cloud_disconnected, cloud_download, cloud_upload, code, coffee_cup, collapse, collapse_bold, color_picker, column_copy, column_cut, column_delete, column_insert_after, column_insert_before, column_paste_after, column_paste_before, column_properties, columns, combine, comment, comment_add, comment_empty, comment_message, comment_message_disabled, compare_arrows, compass, component, contacts, contrast, copy_content, costs, credit_card, crop, cube, curly_brackets, cursor, cursor_add, cursor_remove

### D-H

dashboard, data_missing, data_transfer_off, day_mostly_cloudy, day_partly_cloudy, delete, delivery_truck, delivery_truck_allocate, delivery_truck_motion, document, download, download_line, download_xls, drag_corner, drag_horizontal, drag_indicator, drag_vertical, drivers, drizzle, drone, earnings_statement, edit_combination, email, email_add, envelope, eraser, exclamation_mark, expand, expand_bold, expand_less, expand_less_bold, expand_less_circle, expand_more, expand_more_bold, expand_more_circle, export, factory, fast_forward, fast_rewind, file, file_bar_graph, file_check_in, file_check_out, file_cloud, file_copy, file_edit, file_merge, file_missing, file_new, file_secure, file_table, file_type_bmpf, file_type_csv, file_type_cur, file_type_doc, file_type_ico, file_type_key, file_type_log, file_type_numbers, file_type_pdf, file_type_pem, file_type_rfi, file_type_rfq, file_type_rtf, file_type_text, file_type_tif, file_type_tmp, file_type_xls, filter, filter_list, filter_off, first_page, flag, flag_finish, floorplan, flowchart, fog, folder_closed, folder_locked, folder_new, folder_open, folder_personal, folder_project, folder_public, folder_share, folder_unlocked, footprints, forestry, forklift, frame, freight_market, freight_matching, freight_trolley, full_screen, function, gantt_chart, gavel, gears, greater_than_equal_to, group_items, hail, hail_heavy, hail_light, hammer, hand, hard_hat, headset, heart, helicopter, help, help_outlined, history, home, hourglass

### I-O

ice, icons_shapes, image, image_add, image_disabled, image_scene, in_cab_device, in_field_device, info, info_outlined, info_token, inspect, invoice, invoice_euro, invoice_pound, invoice_yen, item_begins_with, item_contains, item_does_not_contain, item_does_not_equal, item_ends_with, item_equals, key, keyboard, keyboard_keys, labs, language, last_page, launch, launch_bold, layer, learn, less_than_equal_to, lightbulb_off, lightbulb_on, lightning, line_diagonal, line_graph, link, link_broken, link_off, list_bulleted, list_numbered, list_shapes, location, location_add, location_add_multiple, location_arrow, location_disabled, location_point, lock, lock_open, magic_wand, manage_accounts, manage_people, map, map_2d, map_marker, map_marker_circle, map_marker_multiple, map_markers, map_poi, master_data, megaphone, menu, menu_circle, mic, mix, mobile_app_version, monetarization, moon, more_circle, more_horizontal, more_vertical, mouse, move, move_last_down, move_last_left, move_last_right, move_last_up, night_mostly_cloudy, night_partly_cloudy, no_package, no_truck, not_synced_bold, notifications, notifications_off, object_mirror, object_outline, object_rotate, offers, overcast

### P-S

package, package_delivered, package_delivery, package_missing, package_pickup, package_sent, pager, paint_bucket, palette, pan, paper_plane, paperclip, password, pause_circle, payment_instant, pen, pencil, people_add, people_couple, people_group, person, person_account, person_add, person_clock, person_edit, person_remove, phone, phone_call, phone_hang_up, phone_mobile, pin, pin_add, pin_straight, pin_straight_cancel, play_circle, point_marker_tool, polygon, polygon_area_tool, polygon_concave, polygon_cone, polygon_drag_rectangle, polygon_line_tool, polygon_merge, polygon_select, printer, pulse, qr_code, question, quick_login, rain, rain_heavy, rain_icy, raindrop, redo, redo_bold, refresh, refresh_bold, remove, remove_bold, remove_circle, remove_heavy, reply, rewind, row_add, row_copy, row_cut, row_delete, row_highlighted, row_insert_after, row_insert_before, row_paste_after, row_paste_before, row_properties, row_remove, rows_show_less, rows_show_more, rss_feed, ruler, satellite, save_as, save_disk, scan_barcode, schema, scissors, screen, screenshot, search, server, server_round, settings, share, shield, shopping_cart, shopping_cart_minus, shopping_cart_plus, shortcut, shovel, show_less_caret, show_more_caret, sign_in, sign_out, signal, smiley_dissatisfied, smiley_dissatisfied_outlined, smiley_neutral, smiley_neutral_outlined, smiley_satisfied, smiley_satisfied_outlined, smiley_somewhat_dissatisfied, smiley_somewhat_dissatisfied_outlined, smiley_somewhat_satisfied, smiley_somewhat_satisfied_outlined, snow_heavy, snow_light, snow_particle, snowflake, snowflakes, sort, sort_alpha_down, sort_alpha_up, sort_arrow_down, sort_arrow_up, sort_down, sort_up, star, star_half, star_locked, star_northern, star_outlined, stars, stop_circle, street_measurement, submit_expense, sun, swap, switch_account, switch_left, switch_right, sync, sync_bold, sync_off

### T-Z and Numbers

table, tablet, tag, tag_disabled, template, text_align_left, text_align_right, text_bold, text_centered, text_grow, text_input, text_input_long, text_input_short, text_italic, text_marker, text_shrink, text_strikethrough, text_truncated, text_underlined, thermometer_cold, thermometer_hot, thumbs_down, thumbs_up, thunderstorm_heavy, thunderstorm_light, ticket, ticket_plane, time_off_work, time_slot_not_reserved, time_slot_reserved, timer, timer_countdown, timesheet, timesheet_approve, toggle_center, toggle_left_panel, toggle_off, toggle_on, toggle_right_panel, traffic_cone, tree_structure, triangle_down, triangle_left, triangle_right, triangle_up, trimble_logo, truck_add, truck_warning_delay, tune, tune_circle, uncombine, undo, undo_bold, unfold_less, unfold_more, unit_selector, unsorted_arrows, update, upload, upload_xls, user_account, user_active, user_guide, user_inactive, user_passkey, user_permissions, video, video_add, video_disabled, view_grid, view_list, visibility_off, visibility_on, volume_down, volume_mute, volume_up, vr_xr, warehouse, warning, warning_outlined, web, wheelbarrow, widgets, wifi, wifi_no_internet, wifi_off, wind, window, window_dock_undock, window_fit, window_resize, window_side_panel, window_template, window_views, window_wireframe, wintery_mix, wrench, zoom_box, zoom_in, zoom_out, 2_layers, 2_layers_off, 360, add_square, archive_square, auto_target, avoidance_zone, background_dark, background_light, base_station, bullseye, bullseye_off, bullseye_warning, clip, compactor, corner, dashboard_tiles, design_package, device_cb460, device_tsc7, devices_group, devices_status, dozer, easting, edit_mode, electric_meter_off, electric_meter_off_outline, electric_meter_outline_rounded, electric_meter_rounded, electric_meter_rounded_warn, elevation, gnss, gnss_r8, gnss_r8s_base, gnss_rpt, gnss_rts, gnss_sps986, gps, grader, hex, horizontal_accuracy, image_square, image_square_off, image_square_off_outline, image_square_outline, machine, machines, measure_up, northing, orbit, orthogonal, perspective, prism_pole, prism_pole_extend, receiver_generic_error_filled, receiver_generic_error_outline, receiver_generic_filled, receiver_generic_off_filled, receiver_generic_off_outline, receiver_generic_outline, receiver_generic_warn_filled, receiver_generic_warn_outline, ri, rpt, rts, rts_off, rts_rpt, select_area, sx10, sync_filled, todo, todo_add, total_station, total_station_lost, unarchive_square, vertical_accuracy, view_2_rows, view_3_column, visibility_part_outline, workers_queue, x12, x7, x7_card, x7_settings, xr10, zoom_center

## 🎨 Icon Categories & Common Usage

### Navigation Icons

```html
<!-- HTML -->
<i class="modus-icons">arrow_left</i>
<i class="modus-icons">arrow_right</i>
<i class="modus-icons">arrow_up</i>
<i class="modus-icons">arrow_down</i>
<i class="modus-icons">chevron_left</i>
<i class="modus-icons">chevron_right</i>
<i class="modus-icons">home</i>
<i class="modus-icons">dashboard</i>
```

```tsx
// React/TSX
<i className="modus-icons">arrow_left</i>
<i className="modus-icons">arrow_right</i>
<i className="modus-icons">arrow_up</i>
<i className="modus-icons">arrow_down</i>
<i className="modus-icons">chevron_left</i>
<i className="modus-icons">chevron_right</i>
<i className="modus-icons">home</i>
<i className="modus-icons">dashboard</i>
```

**Common Navigation Icons:**
menu, close, arrow_back, arrow_next, arrow_left, arrow_right, arrow_up, arrow_down, home, dashboard, chevron_left, chevron_right, more_horizontal, more_vertical

### Action Icons

```html
<!-- HTML -->
<i class="modus-icons">add</i>
<i class="modus-icons">edit_combination</i>
<i class="modus-icons">delete</i>
<i class="modus-icons">save_disk</i>
<i class="modus-icons">download</i>
<i class="modus-icons">upload</i>
<i class="modus-icons">refresh</i>
<i class="modus-icons">sync</i>
```

```tsx
// React/TSX
<i className="modus-icons">add</i>
<i className="modus-icons">edit_combination</i>
<i className="modus-icons">delete</i>
<i className="modus-icons">save_disk</i>
<i className="modus-icons">download</i>
<i className="modus-icons">upload</i>
<i className="modus-icons">refresh</i>
<i className="modus-icons">sync</i>
```

**Common Action Icons:**
add, delete, edit_combination, search, filter, settings, save_disk, download, upload, copy_content, refresh

### Status Icons

```html
<!-- HTML -->
<i class="modus-icons">check</i>
<i class="modus-icons">close</i>
<i class="modus-icons">warning</i>
<i class="modus-icons">info</i>
<i class="modus-icons">alert</i>
<i class="modus-icons">help</i>
```

```tsx
// React/TSX
<i className="modus-icons">check</i>
<i className="modus-icons">close</i>
<i className="modus-icons">warning</i>
<i className="modus-icons">info</i>
<i className="modus-icons">alert</i>
<i className="modus-icons">help</i>
```

**Common Status Icons:**
check_circle, cancel_circle, warning, info, help, alert, exclamation_mark, thumbs_up, thumbs_down

### Content Icons

```html
<!-- HTML -->
<i class="modus-icons">file</i>
<i class="modus-icons">folder_open</i>
<i class="modus-icons">folder_closed</i>
<i class="modus-icons">image</i>
<i class="modus-icons">video</i>
<i class="modus-icons">document</i>
```

```tsx
// React/TSX
<i className="modus-icons">file</i>
<i className="modus-icons">folder_open</i>
<i className="modus-icons">folder_closed</i>
<i className="modus-icons">image</i>
<i className="modus-icons">video</i>
<i className="modus-icons">document</i>
```

**Common Content Icons:**
file, folder_open, folder_closed, image, video, document, calendar, email, camera

### User & Account Icons

```html
<!-- HTML -->
<i class="modus-icons">person</i>
<i class="modus-icons">people_group</i>
<i class="modus-icons">user_account</i>
<i class="modus-icons">sign_in</i>
<i class="modus-icons">sign_out</i>
<i class="modus-icons">lock</i>
<i class="modus-icons">lock_open</i>
```

```tsx
// React/TSX
<i className="modus-icons">person</i>
<i className="modus-icons">people_group</i>
<i className="modus-icons">user_account</i>
<i className="modus-icons">sign_in</i>
<i className="modus-icons">sign_out</i>
<i className="modus-icons">lock</i>
<i className="modus-icons">lock_open</i>
```

**Common User & Account Icons:**
person, people_group, user_account, sign_in, sign_out, lock, lock_open

## 🎨 Icon Styling

### Size Variations

```css
/* Icon sizes */
.icon-xs {
  font-size: 12px;
}
.icon-sm {
  font-size: 14px;
}
.icon-md {
  font-size: 16px;
}
.icon-lg {
  font-size: 20px;
}
.icon-xl {
  font-size: 24px;
}
```

#### HTML Size Implementation

```html
<i class="modus-icons icon-xs">settings</i>
<i class="modus-icons icon-sm">settings</i>
<i class="modus-icons icon-md">settings</i>
<i class="modus-icons icon-lg">settings</i>
<i class="modus-icons icon-xl">settings</i>
```

#### React Size Implementation

```tsx
// Using CSS classes
<i className="modus-icons icon-xs">settings</i>
<i className="modus-icons icon-sm">settings</i>

// Using inline styles
<i className="modus-icons" style={{ fontSize: '12px' }}>settings</i>
<i className="modus-icons" style={{ fontSize: '16px' }}>settings</i>
<i className="modus-icons" style={{ fontSize: '24px' }}>settings</i>
```

### Color Variations

```css
/* Icon colors using Modus tokens */
.icon-primary {
  color: var(--modus-wc-color-primary);
}
.icon-secondary {
  color: var(--modus-wc-color-base-content);
}
.icon-success {
  color: var(--modus-wc-color-green);
}
.icon-warning {
  color: var(--modus-wc-color-yellow);
}
.icon-danger {
  color: var(--modus-wc-color-red);
}
```

#### HTML Implementation

```html
<i class="modus-icons icon-primary">check_circle</i>
<i class="modus-icons icon-success">check_circle</i>
<i class="modus-icons icon-warning">warning</i>
<i class="modus-icons icon-danger">close_circle</i>

<!-- Inline styles -->
<i class="modus-icons" style="color: var(--modus-wc-color-primary)">settings</i>
```

#### React Implementation

```tsx
// Using CSS classes
<i className="modus-icons icon-primary">check_circle</i>
<i className="modus-icons icon-success">check_circle</i>

// Using inline styles
<i className="modus-icons" style={{ color: 'var(--modus-wc-color-primary)' }}>settings</i>
<i className="modus-icons" style={{ color: 'var(--modus-wc-color-success)' }}>check_circle</i>
```

### Icon Spacing

```css
/* Icon spacing utilities */
.icon-spacing-right {
  margin-right: 8px;
}
.icon-spacing-left {
  margin-left: 8px;
}
.icon-spacing-top {
  margin-top: 4px;
}
.icon-spacing-bottom {
  margin-bottom: 4px;
}
```

## 💻 Common Implementation Patterns

### Button with Icon

#### HTML Button Implementation

```html
<!-- Icon + Text Button -->
<modus-wc-button color="primary">
  <i class="modus-icons" style="margin-right: 8px">save_disk</i>
  Save Changes
</modus-wc-button>

<!-- Icon-only Button -->
<modus-wc-button shape="circle" color="danger" aria-label="Delete item">
  <i class="modus-icons">delete</i>
</modus-wc-button>

<!-- Button with trailing icon -->
<modus-wc-button>
  Download Report
  <i class="modus-icons" style="margin-left: 8px">download</i>
</modus-wc-button>
```

#### React Button Implementation

```tsx
// Icon + Text Button
<ModusButton color="primary">
  <i className="modus-icons" style={{ marginRight: '8px' }}>save_disk</i>
  Save Changes
</ModusButton>

// Icon-only Button
<ModusButton shape="circle" color="danger" aria-label="Delete item">
  <i className="modus-icons">delete</i>
</ModusButton>

// Using CSS classes
<ModusButton className="btn-with-icon">
  <i className="modus-icons icon-spacing-right">save_disk</i>
  Save Changes
</ModusButton>
```

### Navigation with Icons

#### HTML Navigation Implementation

```html
<!-- Breadcrumb with icons -->
<modus-wc-breadcrumbs>
  <modus-wc-breadcrumb href="/">
    <i class="modus-icons">home</i>
    Home
  </modus-wc-breadcrumb>
  <modus-wc-breadcrumb href="/projects">
    <i class="modus-icons">folder_open</i>
    Projects
  </modus-wc-breadcrumb>
  <modus-wc-breadcrumb>
    <i class="modus-icons">document</i>
    Current Project
  </modus-wc-breadcrumb>
</modus-wc-breadcrumbs>

<!-- Navigation menu -->
<nav class="main-nav">
  <a href="/dashboard">
    <i class="modus-icons">dashboard</i>
    Dashboard
  </a>
  <a href="/projects">
    <i class="modus-icons">folder_open</i>
    Projects
  </a>
  <a href="/settings">
    <i class="modus-icons">settings</i>
    Settings
  </a>
</nav>
```

#### React Navigation Implementation

```tsx
// Breadcrumb with icons
<ModusBreadcrumbs>
  <ModusBreadcrumb href="/">
    <i className="modus-icons">home</i>
    Home
  </ModusBreadcrumb>
  <ModusBreadcrumb href="/projects">
    <i className="modus-icons">folder_open</i>
    Projects
  </ModusBreadcrumb>
  <ModusBreadcrumb>
    <i className="modus-icons">document</i>
    Current Project
  </ModusBreadcrumb>
</ModusBreadcrumbs>;

// Navigation component
const Navigation = () => (
  <nav className="main-nav">
    <Link to="/dashboard">
      <i className="modus-icons">dashboard</i>
      Dashboard
    </Link>
    <Link to="/projects">
      <i className="modus-icons">folder_open</i>
      Projects
    </Link>
    <Link to="/settings">
      <i className="modus-icons">settings</i>
      Settings
    </Link>
  </nav>
);
```

### Status Indicators

#### HTML Status Implementation

```html
<!-- Status with icons -->
<div class="status-item">
  <i class="modus-icons" style="color: var(--modus-wc-color-green)"
    >check_circle</i
  >
  <span>Completed</span>
</div>

<div class="status-item">
  <i class="modus-icons" style="color: var(--modus-wc-color-yellow)">warning</i>
  <span>Pending</span>
</div>

<div class="status-item">
  <i class="modus-icons" style="color: var(--modus-wc-color-red)"
    >close_circle</i
  >
  <span>Failed</span>
</div>

<!-- Alert with icon -->
<modus-wc-alert type="success">
  <i class="modus-icons" style="margin-right: 8px">check_circle</i>
  Operation completed successfully!
</modus-wc-alert>
```

#### React Status Implementation

```tsx
// Status indicators
const StatusIndicator = ({ status, children }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return { icon: 'check_circle', color: 'var(--modus-wc-color-green)' };
      case 'warning':
        return { icon: 'warning', color: 'var(--modus-wc-color-yellow)' };
      case 'error':
        return { icon: 'close_circle', color: 'var(--modus-wc-color-red)' };
      default:
        return { icon: 'info', color: 'var(--modus-wc-color-primary)' };
    }
  };

  const { icon, color } = getStatusIcon(status);

  return (
    <div className="status-item">
      <i className="modus-icons" style={{ color }}>
        {icon}
      </i>
      <span>{children}</span>
    </div>
  );
};

// Usage
<StatusIndicator status="success">Completed</StatusIndicator>
<StatusIndicator status="warning">Pending</StatusIndicator>
<StatusIndicator status="error">Failed</StatusIndicator>
```

### Form Elements with Icons

#### HTML Form Implementation

```html
<!-- Input with icon -->
<div class="input-group">
  <i class="modus-icons input-icon">search</i>
  <modus-wc-text-input placeholder="Search..."></modus-wc-text-input>
</div>

<!-- Select with icon -->
<div class="select-group">
  <i class="modus-icons">filter</i>
  <modus-wc-select>
    <option value="">Filter by...</option>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
  </modus-wc-select>
</div>
```

#### React Form Implementation

```tsx
// Input with icon
const SearchInput = () => (
  <div className="input-group">
    <i className="modus-icons input-icon">search</i>
    <ModusTextInput placeholder="Search..." />
  </div>
);

// Button group with icons
const ActionButtons = () => (
  <div className="action-buttons">
    <ModusButton variant="outlined">
      <i className="modus-icons icon-spacing-right">add</i>
      Add New
    </ModusButton>
    <ModusButton variant="outlined">
      <i className="modus-icons icon-spacing-right">edit_combination</i>
      Edit
    </ModusButton>
    <ModusButton variant="outlined" color="danger">
      <i className="modus-icons icon-spacing-right">delete</i>
      Delete
    </ModusButton>
  </div>
);
```

## ♿ Icon Accessibility

### Screen Reader Support

#### HTML Accessibility Implementation

```html
<!-- Decorative icons (hidden from screen readers) -->
<i class="modus-icons" aria-hidden="true">star</i>

<!-- Meaningful icons (include text alternative) -->
<i class="modus-icons" aria-label="Save document">save_disk</i>

<!-- Icon with visible text -->
<button>
  <i class="modus-icons" aria-hidden="true">download</i>
  <span>Download File</span>
</button>

<!-- Icon-only button with proper labeling -->
<button aria-label="Close dialog">
  <i class="modus-icons" aria-hidden="true">close</i>
</button>
```

#### React Accessibility Implementation

```tsx
// Decorative icons
<i className="modus-icons" aria-hidden="true">star</i>

// Meaningful icons
<i className="modus-icons" aria-label="Save document">save_disk</i>

// Icon with visible text
<button>
  <i className="modus-icons" aria-hidden="true">download</i>
  <span>Download File</span>
</button>

// Icon-only button component
const IconButton = ({ icon, label, onClick, ...props }) => (
  <button aria-label={label} onClick={onClick} {...props}>
    <i className="modus-icons" aria-hidden="true">{icon}</i>
  </button>
);

// Usage
<IconButton icon="close" label="Close dialog" onClick={handleClose} />
```

### Focus Indicators

```css
/* Icon focus styles */
.icon-focusable:focus {
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Button with icon focus */
.btn-icon:focus {
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: 2px;
}
```

## 🔍 Icon Validation & Testing

### Icon Name Validation

#### HTML/JavaScript Validation

```javascript
// Valid icon names array (subset for example)
const validIconNames = [
  "add",
  "edit_combination",
  "delete",
  "save_disk",
  "download",
  "upload",
  "search",
  "filter",
  "settings",
  "home",
  "dashboard",
  "menu",
  "close",
  "check",
  "warning",
  "info",
  "alert",
  "help",
  // ... include all valid names
];

// Validation function
function isValidIconName(iconName) {
  return validIconNames.includes(iconName);
}

// Usage
const iconName = "settings";
if (isValidIconName(iconName)) {
  console.log(`✅ Valid icon: ${iconName}`);
} else {
  console.warn(`❌ Invalid icon: ${iconName}`);
}
```

#### React/TypeScript Validation

```tsx
// Type definition for valid icon names
type ValidIconName =
  | 'add' | 'edit_combination' | 'delete' | 'save_disk' | 'download'
  | 'search' | 'filter' | 'settings' | 'home' | 'dashboard'
  | 'check' | 'warning' | 'info' | 'alert' | 'help'
  // ... include all valid names
  ;

// Icon component with validation
interface IconProps {
  name: ValidIconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color,
  className = '',
  ...ariaProps
}) => {
  const sizeClass = `icon-${size}`;
  const classes = `modus-icons ${sizeClass} ${className}`.trim();

  return (
    <i
      className={classes}
      style={{ color }}
      {...ariaProps}
    >
      {name}
    </i>
  );
};

// Usage with type safety
<Icon name="settings" size="lg" aria-label="Open settings" />
<Icon name="download" aria-hidden />
```

### Icon Rendering Test

```javascript
// Test if icons are loading correctly
function testIconRendering() {
  const testIcons = [
    "add",
    "edit_combination",
    "delete",
    "save_disk",
    "download",
  ];

  testIcons.forEach((iconName) => {
    const icon = document.createElement("i");
    icon.className = "modus-icons";
    icon.textContent = iconName;
    document.body.appendChild(icon);

    // Check if icon rendered correctly
    const computedStyle = window.getComputedStyle(icon);
    const fontFamily = computedStyle.fontFamily;

    console.log(
      `Icon ${iconName}: ${
        fontFamily.includes("modus-icons") ? "PASS" : "FAIL"
      }`
    );

    document.body.removeChild(icon);
  });
}

// Icon accessibility test
function testIconAccessibility() {
  const icons = document.querySelectorAll(".modus-icons");

  icons.forEach((icon) => {
    const hasAriaLabel = icon.hasAttribute("aria-label");
    const hasAriaHidden = icon.hasAttribute("aria-hidden");
    const hasVisibleText =
      icon.nextElementSibling && icon.nextElementSibling.textContent.trim();

    if (!hasAriaLabel && !hasAriaHidden && !hasVisibleText) {
      console.warn("Icon may need accessibility improvements:", icon);
    }
  });
}
```

## 🚀 Performance Optimization

### Icon Loading Optimization

```html
<!-- Preload critical icons -->
<link
  rel="preload"
  href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
  as="style"
  crossorigin="anonymous"
/>

<!-- Lazy load non-critical icons -->
<i class="modus-icons lazy-load" data-icon="complex_icon"></i>
```

### Icon Caching

```javascript
// Cache frequently used icons
const iconCache = new Map();

function getIcon(iconName) {
  if (iconCache.has(iconName)) {
    return iconCache.get(iconName);
  }

  const iconElement = document.createElement("i");
  iconElement.className = "modus-icons";
  iconElement.textContent = iconName;

  iconCache.set(iconName, iconElement);
  return iconElement;
}

// React icon caching with useMemo
const CachedIcon = React.memo(({ name, ...props }) => (
  <i className="modus-icons" {...props}>
    {name}
  </i>
));
```

## ✅ Best Practices

### Do's ✅

- **Always use valid icon names** from the approved list
- **Include proper accessibility attributes** (`aria-label` or `aria-hidden`)
- **Use consistent spacing** (8px for horizontal, 4px for vertical)
- **Apply theme-aware colors** using CSS custom properties
- **Test icons across all themes** to ensure visibility
- **Use semantic icon names** that match their purpose

### Don'ts ❌

- **Don't use invalid icon names** - they won't render
- **Don't forget accessibility** - always include proper ARIA attributes
- **Don't hard-code colors** - use CSS custom properties for theming
- **Don't use icons without context** in icon-only buttons
- **Don't mix icon systems** - stick to Modus icons consistently

## 🔧 Common Issues & Solutions

### Issue: Icons Not Displaying

**Problem**: Icons show as text or don't appear

**Solution**: Ensure CSS is loaded and font family is correct

```css
.modus-icons {
  font-family: "modus-icons" !important;
}
```

### Issue: Icon Spacing Problems

**Problem**: Icons too close or too far from text

**Solution**: Use consistent spacing utilities

```css
.icon-with-text {
  margin-right: 8px;
}
```

### Issue: Icon Color Not Changing

**Problem**: Icons don't respond to theme changes

**Solution**: Use CSS custom properties for theming

```css
.icon-themed {
  color: var(--modus-wc-color-primary);
}
```

### Issue: Invalid Icon Names

**Problem**: Icon names not rendering

**Solution**: Verify against the approved icon list

```tsx
// ✅ Valid - 'settings' is in the list
<i className="modus-icons">settings</i>

// ❌ Invalid - 'gear' is not in the list (use 'settings' instead)
<i className="modus-icons">gear</i>
```

## 🎯 Quick Reference

### Most Common Icons

```css
/* Navigation */
menu, close, arrow_left, arrow_right, home, dashboard

/* Actions */
add, edit_combination, delete, save_disk, download, upload, search, settings

/* Status */
check_circle, warning, info, alert, help

/* Content */
file, folder_open, document, image, calendar

/* User */
person, user_account, sign_in, sign_out
```

### Common Icon Name Alternatives

When choosing icons, use these Modus equivalents:

- For gear/cog → use `settings`
- For user → use `person`
- For trash → use `delete`
- For plus → use `add`
- For minus → use `remove`
- For edit → use `edit_combination`
- For save → use `save_disk`
