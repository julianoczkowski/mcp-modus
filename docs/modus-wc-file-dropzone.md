---
tag: modus-wc-file-dropzone
category: Inputs & Actions
storybook: https://trimble-oss.github.io/modus-wc-2.0/main/?path=/docs/components-file-dropzone--docs
---

## Purpose

A file dropzone component that allows users to drag and drop files for upload, with built-in validation for file types, sizes, counts, and filename lengths.

## Attributes

- **`accept-file-types`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: Accepted file types (e.g., `.jpg,.png` or `image/*`).  
  • _Reflected as prop_: **yes**

- **`custom-class`**  
  • _Type_: `string`  
  • _Default_: `""`  
  • _Notes_: Custom CSS class to apply to the dropzone element.  
  • _Reflected as prop_: **yes**

- **`disabled`**  
  • _Type_: `boolean`  
  • _Default_: `undefined`  
  • _Notes_: Disables the file input and dropzone interaction.  
  • _Reflected as prop_: **yes**

- **`file-dragged-over-instructions`**  
  • _Type_: `string`  
  • _Default_: `"Drop files here"`  
  • _Notes_: Custom instructions shown when files are dragged over the dropzone.  
  • _Reflected as prop_: **yes**

- **`include-state-icon`**  
  • _Type_: `boolean`  
  • _Default_: `true`  
  • _Notes_: Show state icon (upload, success, error) in the dropzone.  
  • _Reflected as prop_: **yes**

- **`instructions`**  
  • _Type_: `string`  
  • _Default_: `undefined`  
  • _Notes_: Custom instructions shown as the default dropzone message.  
  • _Reflected as prop_: **yes**

- **`invalid-file-type-message`**  
  • _Type_: `string`  
  • _Default_: `"File format not accepted"`  
  • _Notes_: Custom error message when an invalid file type is selected.  
  • _Reflected as prop_: **yes**

- **`max-file-count`**  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: Maximum number of files allowed; shows error if exceeded.  
  • _Reflected as prop_: **yes**

- **`max-file-name-length`**  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: Maximum allowed length of filename (excluding extension); shows error if exceeded.  
  • _Reflected as prop_: **yes**

- **`max-total-file-size-bytes`**  
  • _Type_: `number`  
  • _Default_: `undefined`  
  • _Notes_: Maximum total file size in bytes; shows error if exceeded.  
  • _Reflected as prop_: **yes**

- **`multiple`**  
  • _Type_: `boolean`  
  • _Default_: `undefined`  
  • _Notes_: Allow multiple file selection.  
  • _Reflected as prop_: **yes**

- **`success-message`**  
  • _Type_: `string`  
  • _Default_: `"Successfully uploaded"`  
  • _Notes_: Success message displayed when files are uploaded successfully.  
  • _Reflected as prop_: **yes**

## Events

- **`fileSelect`** — Fires a `CustomEvent<FileList>` when files are selected (either via drag-and-drop or file browser).

## Methods

- **`reset()`** — Resets the dropzone to its initial state, clearing all error and success states. Returns `Promise<void>`.

## Slots

- **`dropzone`** — Named slot for adding custom content such as progress indicators or additional instructions within the dropzone area.

## Usage

```html
<!-- Basic file dropzone -->
<modus-wc-file-dropzone
  accept-file-types=".doc, .docx, .pdf"
  instructions="Drag files here or browse to upload"
></modus-wc-file-dropzone>

<!-- Multiple files with image types -->
<modus-wc-file-dropzone
  accept-file-types="image/*"
  multiple
  instructions="Select multiple image files"
></modus-wc-file-dropzone>

<!-- With validation constraints -->
<modus-wc-file-dropzone
  accept-file-types=".doc, .docx, .pdf"
  multiple
  max-file-count="3"
  max-file-name-length="20"
  max-total-file-size-bytes="10485760"
  invalid-file-type-message="Invalid file format. Please upload correct file type."
  instructions="Upload files (max 3 files, 10MB total, filename ≤ 20 chars)"
></modus-wc-file-dropzone>

<!-- With custom content slot (progress indicator) -->
<modus-wc-file-dropzone
  id="custom-dropzone"
  accept-file-types=".pdf, .doc, .docx"
  success-message="Files uploaded successfully!"
  instructions="Drag files here or browse to upload"
>
  <div slot="dropzone" style="width: 300px; margin-top: 1rem;">
    <modus-wc-progress value="70" label="70% Uploaded"></modus-wc-progress>
  </div>
</modus-wc-file-dropzone>

<!-- Disabled state -->
<modus-wc-file-dropzone
  disabled
  instructions="File upload is currently disabled"
></modus-wc-file-dropzone>
```

## Event Handling

```html
<script>
  const dropzone = document.querySelector("modus-wc-file-dropzone");

  // Listen for file selection
  dropzone.addEventListener("fileSelect", (event) => {
    const files = event.detail;
    console.log("Selected files:", files);

    // Process each file
    for (let i = 0; i < files.length; i++) {
      console.log(`File ${i + 1}: ${files[i].name} (${files[i].size} bytes)`);
    }
  });

  // Reset the dropzone programmatically
  async function resetDropzone() {
    await dropzone.reset();
    console.log("Dropzone reset");
  }
</script>
```

## Validation States

The dropzone automatically validates files and displays appropriate error messages:

- **File Type Error**: When file extension or MIME type doesn't match `accept-file-types`
- **File Count Error**: When number of files exceeds `max-file-count`
- **File Size Error**: When total file size exceeds `max-total-file-size-bytes`
- **Filename Length Error**: When filename (without extension) exceeds `max-file-name-length`
