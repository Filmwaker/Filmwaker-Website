document.addEventListener('DOMContentLoaded', function () {

    const filterBtns    = document.querySelectorAll('.filter-btn');
    const sections      = document.querySelectorAll('.project-section');
    const dividers      = document.querySelectorAll('.project-divider');

    function applyFilter(filterValue) {
        // 1. Mostra/nascondi sezioni
        sections.forEach(section => {
            const match = filterValue === 'all' || section.dataset.category === filterValue;
            section.classList.toggle('hidden', !match);
        });

        // 2. Divider: visibili solo in "tutto"
        dividers.forEach(hr => hr.classList.toggle('hidden', filterValue !== 'all'));

        // 3. Rianima le sezioni visibili
        sections.forEach(section => {
            if (!section.classList.contains('hidden')) {
                section.style.animation = 'none';
                section.offsetHeight; // reflow
                section.style.animation = '';
            }
        });
    }

    // Bottoni filtro
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    // Init da URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const target = document.querySelector(`.filter-btn[data-filter="${hash}"]`);
        if (target) setTimeout(() => target.click(), 50);
    }

    // Navbar scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        nav.style.background    = window.pageYOffset > 100 ? 'rgba(10,22,40,0.98)' : 'rgba(10,22,40,0.95)';
        nav.style.boxShadow     = window.pageYOffset > 100 ? '0 5px 30px rgba(0,217,255,0.1)' : 'none';
    });

    // Scroll-to-top
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => scrollBtn.classList.toggle('visible', window.pageYOffset > 300));
        scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});

function openVideo(videoId) {
    window.open('https://www.youtube.com/watch?v=' + videoId, '_blank');
}
