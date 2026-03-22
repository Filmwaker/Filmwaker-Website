document.addEventListener('DOMContentLoaded', function() {
    
    // FILTERING FUNCTIONALITY
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectSections = document.querySelectorAll('.project-section');
    const dividers = document.querySelectorAll('.project-divider');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Mostra/nascondi sezioni
            projectSections.forEach(section => {
                if (filterValue === 'all' || section.getAttribute('data-category') === filterValue) {
                    section.classList.remove('hide');
                    section.style.display = 'flex';
                } else {
                    section.classList.add('hide');
                    section.style.display = 'none';
                }
            });

            // Ricalcola zig-zag sui progetti visibili
            const visible = Array.from(projectSections).filter(s => !s.classList.contains('hide'));
            visible.forEach((section, index) => {
                section.style.animation = 'none';
                section.offsetHeight;
                section.style.animation = 'fadeInUp 0.8s ease forwards';
                // pari = row-reverse, dispari = normale
                if (index % 2 === 1) {
                    section.classList.add('row-reverse');
                } else {
                    section.classList.remove('row-reverse');
                }
            });

            // Divider
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