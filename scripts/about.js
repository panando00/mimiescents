// about-script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate value cards on scroll
    const valueCards = document.querySelectorAll('.value-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    valueCards.forEach(card => observer.observe(card));
});
