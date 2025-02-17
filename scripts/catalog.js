// catalog-script.js
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

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

    // WhatsApp Integration
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '+27XXXXXXXXX'; // Replace with actual number
    
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
});
