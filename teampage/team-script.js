document.addEventListener('DOMContentLoaded', function() {
    
    // NOTE: Navbar and Scroll-to-top logic are handled by ../root/script.js
    // We only need to handle specific Team Page animations here to avoid duplication.

    // Intersection Observer for fading in Team Cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS transition
                entry.target.classList.add('visible');
                
                // Optional: Add a slight stagger effect based on index
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                
                // Stop observing once visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all team cards
    document.querySelectorAll('.team-card').forEach(el => {
        observer.observe(el);
    });
});