// Theme Switcher JavaScript

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themePanel = document.getElementById('theme-panel');
    const themeOptions = document.querySelectorAll('.theme-option');

    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Toggle panel visibility
    themeToggle.addEventListener('click', function () {
        themePanel.classList.toggle('active');
    });

    // Close panel when clicking outside
    document.addEventListener('click', function (event) {
        if (!themeToggle.contains(event.target) && !themePanel.contains(event.target)) {
            themePanel.classList.remove('active');
        }
    });

    // Theme option click handlers
    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedTheme = this.getAttribute('data-theme');
            applyTheme(selectedTheme);
            localStorage.setItem('theme', selectedTheme);

            // Close panel after selection
            setTimeout(() => {
                themePanel.classList.remove('active');
            }, 300);
        });
    });

    // Apply theme function
    function applyTheme(theme) {
        // Remove existing theme classes
        document.body.classList.remove('light-mode', 'dark-mode');

        // Add selected theme class
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.add('dark-mode');
        }

        // Update active state on buttons
        themeOptions.forEach(option => {
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }
});
