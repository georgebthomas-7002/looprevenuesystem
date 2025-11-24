/**
 * Main JavaScript file
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    init();
});

/**
 * Initialize the application
 */
function init() {
    // Initialize loop animation mouse tracking
    initLoopAnimation();

    // Initialize theme toggle
    initThemeToggle();
}

/**
 * Loop animation mouse tracking
 */
function initLoopAnimation() {
    const heroSection = document.getElementById('hero-section');
    const loopAnimation = document.getElementById('loop-animation');
    const loopCircles = document.querySelectorAll('.loop-circle');

    if (!heroSection || !loopAnimation || loopCircles.length === 0) {
        return;
    }

    let isHovering = false;

    // Mouse enter - activate interactive mode
    heroSection.addEventListener('mouseenter', () => {
        isHovering = true;
        loopAnimation.classList.add('interactive');
    });

    // Mouse leave - deactivate interactive mode
    heroSection.addEventListener('mouseleave', () => {
        isHovering = false;
        loopAnimation.classList.remove('interactive');

        // Reset circles to their original positions
        loopCircles.forEach(circle => {
            circle.style.transform = '';
        });
    });

    // Mouse move - make circles follow cursor
    heroSection.addEventListener('mousemove', (e) => {
        if (!isHovering) return;

        const rect = heroSection.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        loopCircles.forEach((circle, index) => {
            const rect = circle.getBoundingClientRect();
            const circleX = rect.left + rect.width / 2 - heroSection.getBoundingClientRect().left;
            const circleY = rect.top + rect.height / 2 - heroSection.getBoundingClientRect().top;

            // Calculate distance from mouse
            const deltaX = mouseX - circleX;
            const deltaY = mouseY - circleY;

            // Different follow strengths for each circle (0.05 to 0.15)
            const followStrength = 0.05 + (index * 0.015);

            // Calculate new position
            const moveX = deltaX * followStrength;
            const moveY = deltaY * followStrength;

            // Apply transform
            circle.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
        });
    });
}

/**
 * Theme toggle functionality
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    if (!themeToggle) return;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

/**
 * Update theme toggle icon
 */
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle-icon');
    if (!icon) return;

    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

/**
 * Example utility function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions if using modules
// export { init, debounce };
