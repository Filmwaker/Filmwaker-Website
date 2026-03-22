/*
╔══════════════════════════════════════════════════════════════╗
║              FILMWAKER INTERACTIVE SCRIPTS                   ║
║              Developed by MrFabry                            ║
║         https://github.com/MrFabry                           ║                ║
╚══════════════════════════════════════════════════════════════╝
*/

console.log('%c🎬 FILMWAKER ', 'background: #00D9FF; color: #0A1628; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%cDeveloped by MrFabry', 'color: #00D9FF; font-size: 14px; font-weight: bold;');
console.log('%chttps://github.com/MrFabry', 'color: #B0C4DE; font-size: 12px;');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.section-title, .service-card, .client-logo, .portfolio-item, .course-card, .faq-item, .mission-content, .mission-image').forEach(el => {
        observer.observe(el);
    });

    // Add hover effect to portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Video fade out on end
    const video = document.querySelector('.video-background');
    const overlay = document.querySelector('.video-overlay');
    if (video && overlay) {
        video.addEventListener('ended', () => {
            video.classList.add('fade-out');
            overlay.classList.add('fade-out');
        });
    }
});

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const button = event.target.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Invio in corso...';
    button.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        button.textContent = 'Messaggio Inviato! ✓';
        button.style.background = '#00B8D4';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            event.target.reset();
        }, 2000);
    }, 1500);
}

// Parallax effect for video hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const videoHero = document.querySelector('.video-hero');
    const videoBackground = document.querySelector('.video-background');
    const videoOverlay = document.querySelector('.video-overlay');
    
    if (videoHero && scrolled < window.innerHeight) {
        videoHero.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Fade out video when scrolling
        const opacity = Math.max(0, 1 - (scrolled / (window.innerHeight * 0.6)));
        if (videoBackground) {
            videoBackground.style.opacity = opacity;
        }
        if (videoOverlay) {
            videoOverlay.style.opacity = opacity;
        }
    }
});

// Add hover effect to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 22, 40, 0.98)';
        nav.style.boxShadow = '0 5px 30px rgba(0, 217, 255, 0.1)';
    } else {
        nav.style.background = 'rgba(10, 22, 40, 0.95)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Video fade out on end
const video = document.querySelector('.video-background');
const overlay = document.querySelector('.video-overlay');
if (video) {
    video.addEventListener('ended', () => {
        video.classList.add('fade-out');
        overlay.classList.add('fade-out');
    });
}

// Video modal functions
function openVideo(videoId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    iframe.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideo();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    if (!carouselTrack) return;

    const brands = [
        { file: 'doom.webp',             name: 'DOOM',              url: 'https://www.doom-entertainment.com' },
        { file: 'flixbus.webp',          name: 'FlixBus',           url: 'https://www.flixbus.it' },
        { file: 'ivgo.webp',             name: 'IVGO',              url: 'https://www.italianvideogameorchestra.com' },
        { file: 'LOGO ITALPOL.webp',     name: 'Italpol',           url: 'https://www.italpol.it' },
        { file: 'medical.webp',          name: 'Medical',           url: '#' },
        { file: 'muschioselvaggio.webp', name: 'Muschio Selvaggio',  url: 'https://www.youtube.com/@MuschioSelvaggio' },
        { file: 'pulppodcast.webp',      name: 'Pulp Podcast',      url: 'https://www.youtube.com/@Pulp_podcast' },
        { file: 'ringo.webp',            name: 'Ringo',             url: 'https://www.ringo.it' },
        { file: 'streamicon.webp',       name: 'Streamicon',        url: '#' },
        { file: 'webstarchannel.webp',   name: 'WebStar Channel',   url: 'https://www.linkedin.com/company/web-stars-channel/' },
    ];

    const basePath = 'brandimages/';

    // Duplica per loop infinito
    [...brands, ...brands].forEach(brand => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <a href="${brand.url}" target="_blank" rel="noopener noreferrer" title="${brand.name}">
                <img src="${basePath}${brand.file}" alt="${brand.name}" onerror="this.parentElement.parentElement.style.display='none'">
            </a>`;
        carouselTrack.appendChild(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top smoothly
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Copyright updater
document.addEventListener("DOMContentLoaded", function() {
        const currentYear = new Date().getFullYear();
        const copyrightElement = document.getElementById("copyright-year");
        if (copyrightElement) {
            const textContent = copyrightElement.textContent;
            const updatedText = textContent.replace(/\d{4}/, currentYear);
            copyrightElement.textContent = updatedText;
        }
    });