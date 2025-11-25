// Load Yin-Yang animation using Lottie
// This script assumes lottie-web is already loaded on the page.
// It loads an animation JSON from a CDN (LottieFiles) and renders it into the element with id 'yin-yang-icon'.

document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('yin-yang-icon');
    if (!container) return;

    // Example public Lottie animation URL (Yin Yang). Replace with your own if desired.
    var animationUrl = 'https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json';

    // Fetch the JSON and initialize the animation.
    fetch(animationUrl)
        .then(function (response) { return response.json(); })
        .then(function (animationData) {
            lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData,
            });
        })
        .catch(function (err) {
            console.error('Failed to load Yin-Yang Lottie animation:', err);
        });
});
