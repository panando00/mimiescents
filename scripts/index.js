// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    // Constants
    const phoneNumber = '+27617504607';
    const scrollThreshold = 100;

    // Mobile Menu Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
            }
        });
    }

    // WhatsApp Integration
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

    // Smooth Scrolling for Anchor Links
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

    // Navigation Background Change on Scroll
    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.scrollY > scrollThreshold) {
                nav.style.background = 'rgba(128, 0, 128, 0.95)';
            } else {
                nav.style.background = 'linear-gradient(to right, var(--primary-pink), var(--royal-purple))';
            }
        }
    });
});