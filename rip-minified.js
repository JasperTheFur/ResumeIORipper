const canvas = document.querySelector('[data-testid="preview-canvas-secondary"]');canvas.toBlob(blob => {const url = URL.createObjectURL(blob);window.open(url, '_blank');},'image/png');
