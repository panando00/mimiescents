// script.js
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp Integration
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '+27617504607'; // Replace with actual number
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.dataset.product;
            const price = this.dataset.price;
            
            const message = `Hi! I'm interested in purchasing:\n\n` +
                          `Product: ${product}\n` +
                          `Price: R${price}\n\n` +
                          `Please assist me with my order.`;
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Navigation Menu Toggle for Mobile
    const nav = document.querySelector('nav');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            nav.style.background = 'rgba(128, 0, 128, 0.95)';
        } else {
            nav.style.background = 'linear-gradient(to right, var(--primary-pink), var(--royal-purple))';
        }
    });
});
