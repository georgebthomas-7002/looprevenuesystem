# Website Boilerplate

A clean, modern website boilerplate with custom brand colors and responsive design.

## Features

- Clean, semantic HTML5 structure
- Modern CSS with CSS Variables
- Responsive design (mobile-friendly)
- Smooth scrolling navigation
- Custom brand color palette
- Easy to customize and extend

## Brand Colors

This boilerplate includes a complete set of brand colors:

- **Navy**: `#142d63` - Primary dark color
- **Teal**: `#028393` - Primary brand color
- **Peach**: `#faaa68` - Accent color
- **Orange**: `#f65625` - Secondary accent color
- **Blue**: `#3D5A80` - Alternative blue
- **Light Blue**: `#98C1D9` - Light accent
- **Cyan**: `#E0FBFC` - Lightest accent

## Project Structure

```
├── src/
│   ├── css/
│   │   └── styles.css       # Main stylesheet with brand colors
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   ├── images/              # Place your images here
│   └── fonts/               # Custom fonts (if needed)
├── index.html               # Main HTML file
└── README.md                # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit `index.html` to add your own content
3. **Modify styles**: Update `src/css/styles.css` to customize the design
4. **Add functionality**: Extend `src/js/main.js` with your JavaScript code

## Customization

### Changing Colors

All brand colors are defined as CSS variables in `src/css/styles.css`. You can easily change them by modifying the `:root` section:

```css
:root {
    --brand-navy: #142d63;
    --brand-teal: #028393;
    /* ... other colors */
}
```

### Adding New Sections

Follow the existing section structure in `index.html`:

```html
<section id="your-section" class="section">
    <div class="container">
        <h2>Section Title</h2>
        <p>Your content here</p>
    </div>
</section>
```

### Responsive Design

The boilerplate includes responsive breakpoints for mobile devices. Modify the media queries in `styles.css` to adjust the responsive behavior.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[Your License Here]
