// Find the preview canvas using its data-testid attribute
const canvas = document.querySelector(
    '[data-testid="preview-canvas-secondary"]'
);

// Convert the canvas into a PNG Blob
canvas.toBlob(blob => {

    // Create a temporary blob URL pointing to the PNG data
    const url = URL.createObjectURL(blob);

    // Open the blob URL in a new browser tab
    window.open(url, '_blank');

}, 'image/png'); // Tell toBlob() that we want the canvas encoded as PNG
