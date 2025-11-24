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
    // Your initialization code here
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
