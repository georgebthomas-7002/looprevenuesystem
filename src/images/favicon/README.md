# Favicon Files

This directory contains the Loop Revenue System favicon used across all pages.

## Current Files

- `favicon.svg` - SVG version (recommended for modern browsers)
- `favicon.png` - PNG fallback (add your own 32x32 PNG here)
- `apple-touch-icon.png` - iOS home screen icon (add your own 180x180 PNG here)

## Recommended Sizes for PNG Files

If you want to replace the SVG with PNG versions:

1. **favicon.png** - 32×32 pixels (standard favicon)
2. **favicon-16x16.png** - 16×16 pixels
3. **favicon-32x32.png** - 32×32 pixels
4. **apple-touch-icon.png** - 180×180 pixels (for iOS devices)
5. **android-chrome-192x192.png** - 192×192 pixels
6. **android-chrome-512x512.png** - 512×512 pixels

## Current Implementation

All HTML files reference:
```html
<link rel="icon" type="image/svg+xml" href="/src/images/favicon/favicon.svg">
<link rel="icon" type="image/png" href="/src/images/favicon/favicon.png">
```

The SVG version will be used by modern browsers, with PNG as a fallback.
