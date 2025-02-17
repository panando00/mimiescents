// contact-script.js
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp direct message setup
    const whatsappLink = document.querySelector('.whatsapp-link');
    const phoneNumber = '+27XXXXXXXXX'; // Replace with actual number
    
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            e.preventDefault();
            const message = 'Hi! I would like to know more about your fragrances.';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('p').style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
            }
        });
    });
});
