document.addEventListener('DOMContentLoaded', function() {
    
    // FILTERING FUNCTIONALITY
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectSections = document.querySelectorAll('.project-section');
    const dividers = document.querySelectorAll('.project-divider');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Handle Button Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // 2. Filter Projects
            projectSections.forEach(section => {
                section.style.animation = 'none'; // Reset animation
                section.offsetHeight; // Trigger reflow
                section.style.animation = 'fadeInUp 0.8s ease forwards'; // Re-apply

                if (filterValue === 'all' || section.getAttribute('data-category') === filterValue) {
                    section.classList.remove('hide');
                    section.style.display = 'flex'; // Restore flex layout
                } else {
                    section.classList.add('hide');
                    section.style.display = 'none'; // Hard hide to fix layout gaps
                }
            });

            // 3. Handle Dividers (Hide all if filtering, show only if 'all')
            if (filterValue === 'all') {
                dividers.forEach(hr => hr.style.display = 'block');
            } else {
                dividers.forEach(hr => hr.style.display = 'none');
            }
        });
    });

    // Navbar Scroll Effect (Consistent with main site)
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.style.background = 'rgba(10, 22, 40, 0.98)';
            nav.style.boxShadow = '0 5px 30px rgba(0, 217, 255, 0.1)';
        } else {
            nav.style.background = 'rgba(10, 22, 40, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });

    // Scroll to top
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if(scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // INITIALIZE FILTER FROM URL HASH (NEW LOGIC)
    const currentHash = window.location.hash.replace('#', ''); 

    if (currentHash) {
        const targetButton = document.querySelector(`.filter-btn[data-filter="${currentHash}"]`);
        
        if (targetButton) {
            // Programmatically "click" the button to trigger the filter logic
            setTimeout(() => {
                targetButton.click(); 
            }, 50); 
        }
    }
}); 

// OPEN VIDEO IN YOUTUBE (New Tab)
function openVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}