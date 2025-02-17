// catalog.js - Combined script
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    if (filterButtons.length && products.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter products
                const category = button.dataset.category;
                products.forEach(product => {
                    if (category === 'all' || product.dataset.category === category) {
                        product.style.display = 'block';
                        product.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }

    // WhatsApp Integration
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '+27617504607'; // Using the number from your HTML
    
    if (whatsappButtons.length) {
        whatsappButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = this.dataset.product;
                const price = this.dataset.price;
                
                if (product && price) {
                    const message = `Hi! I'm interested in purchasing:\n\n` +
                                `Product: ${product}\n` +
                                `Price: R${price}\n\n` +
                                `Please assist me with my order.`;
                    
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                }
            });
        });
    }
});