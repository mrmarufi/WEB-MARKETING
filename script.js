document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        alert('Get Started button clicked!');
    });
});
