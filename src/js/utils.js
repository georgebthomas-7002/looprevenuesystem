/**
 * Utility Functions
 */

/**
 * Fetch data from an API
 * @param {string} url - The API endpoint
 * @returns {Promise} - Promise with the response data
 */
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

/**
 * Throttle function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Get element by selector
 * @param {string} selector - CSS selector
 * @returns {Element} - DOM element
 */
function $(selector) {
    return document.querySelector(selector);
}

/**
 * Get all elements by selector
 * @param {string} selector - CSS selector
 * @returns {NodeList} - List of DOM elements
 */
function $$(selector) {
    return document.querySelectorAll(selector);
}
