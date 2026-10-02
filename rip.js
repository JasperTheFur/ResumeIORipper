
canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}, 'image/png');
