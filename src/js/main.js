/**
 * Main JavaScript file
 * Add your custom JavaScript here
 */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Dropdown menu functionality for mobile
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        if (toggle) {
            toggle.addEventListener('click', (e) => {
                // On mobile (small screens), toggle the dropdown
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('open');

                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('open');
                        }
                    });
                }
            });
        }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });
});

// Modern scroll reveal animation with Intersection Observer
const initScrollAnimations = () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.hero-section, .right-place-section, .what-is-loop-section, .ai-humans-section, .how-to-use-section');

    sections.forEach(section => {
        section.classList.add('scroll-reveal');
    });

    // Animate cards with stagger effect
    const cardContainers = [
        { selector: '.role-grid .role-card', stagger: 100 },
        { selector: '.stages-grid .stage-card', stagger: 150 },
        { selector: '.usage-grid .usage-card', stagger: 100 }
    ];

    cardContainers.forEach(container => {
        const cards = document.querySelectorAll(container.selector);
        cards.forEach((card, index) => {
            card.classList.add('scroll-reveal-card');
            card.style.transitionDelay = `${index * container.stagger}ms`;
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Keep observing for sections to allow re-animation if needed
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-card').forEach(element => {
        observer.observe(element);
    });
};

// Button ripple effect
const addButtonRipple = () => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
};

// Parallax effect for hero section
const initParallax = () => {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');
        const heroVisual = hero.querySelector('.hero-visual');

        if (heroContent && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight) * 0.8;
        }

        if (heroVisual && scrolled < hero.offsetHeight) {
            heroVisual.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 - scrolled / hero.offsetHeight * 0.2})`;
        }
    });
};

// Initialize all modern enhancements
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    addButtonRipple();
    initParallax();
});

// Loop diagram stage highlighting based on scroll position
const observeStages = () => {
    const stageBlocks = document.querySelectorAll('.stage-block');
    const diagramStages = document.querySelectorAll('.diagram-stage');

    if (stageBlocks.length === 0 || diagramStages.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const stage = entry.target.getAttribute('data-stage');

                // Remove active class from all stages
                stageBlocks.forEach(block => block.classList.remove('active'));
                diagramStages.forEach(diagramStage => diagramStage.classList.remove('active'));

                // Add active class to current stage
                entry.target.classList.add('active');

                // Find and activate corresponding diagram stage
                const correspondingDiagram = document.getElementById(`stage-${stage}`);
                if (correspondingDiagram) {
                    correspondingDiagram.classList.add('active');
                }
            }
        });
    }, observerOptions);

    stageBlocks.forEach(block => {
        observer.observe(block);
    });
};

// Initialize stage observation when DOM is loaded
document.addEventListener('DOMContentLoaded', observeStages);

// Console log to confirm script is loaded
console.log('Loop Revenue System website loaded successfully!');
