<?php
/**
 * Main template for Filmwaker English WordPress theme.
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <?php wp_head(); ?>

    <!-- SEO Meta Tags -->
    <title>Filmwaker – Video Production, CGI & 3D Animation</title>
    <meta name="description" content="Filmwaker is your creative studio for video production, CGI and 3D animation. We transform ideas into high-impact visual content. Contact us for a quote.">
    <link rel="canonical" href="https://www.filmwaker.it/">

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Filmwaker – Video Production, CGI & 3D Animation">
    <meta property="og:description" content="We turn your ideas into compelling visual content through video production, CGI and 3D animation.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.filmwaker.it/">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Filmwaker – Video Production, CGI & 3D Animation">
    <meta name="twitter:description" content="High-quality video and CGI for brands and companies. Discover Filmwaker, the studio that elevates your image.">

    <!-- Permissions Policy -->
    <meta http-equiv="Permissions-Policy" content="autoplay=*, encrypted-media=*, accelerometer=*, gyroscope=*, picture-in-picture=*, clipboard-write=*">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon16x16.ico">
    <link rel="icon" type="image/x-icon" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicons/favicon32x32.ico">
</head>

<body id="top">
    <!-- Navigation -->
    <nav>
        <a href="#top" class="logo">
            <img src="<?php echo get_template_directory_uri(); ?>/Logo.webp" alt="Filmwaker Logo">
        </a>

        <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
        </button>

        <ul class="nav-menu" id="navMenu">
            <li><a href="#services">Services</a></li>
            <li><a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html">Portfolio</a></li>
            <li><a href="<?php echo get_template_directory_uri(); ?>/coursepage/courses.html">Courses</a></li>
            <li><a href="<?php echo get_template_directory_uri(); ?>/teampage/team.html">Team</a></li>
            <li><a href="#contact" class="btn-primary">Contact Us</a></li>
        </ul>
    </nav>

    <!-- Hero Video Section -->
    <section class="video-hero">
        <video class="video-background" autoplay muted loop playsinline>
            <source src="<?php echo get_template_directory_uri(); ?>/fIlmwaker-produzione-video2.mp4" type="video/mp4">
        </video>

        <div class="video-overlay"></div>

        <div class="video-hero-content">
            <h1>
                <span class="hashtag">#</span>
                REVOLUTIONIZE<br>
                YOUR IMAGE<br>
                WITH <span class="highlight">FILMWAKER</span>
            </h1>

            <p>
                We produce high-quality video content and 3D animation that capture the essence of your brand and share it with the world.
            </p>

            <div class="hero-cta">
                <a href="mailto:info@filmwaker.it" class="btn-primary">Request a Quote</a>
                <a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html" class="btn-secondary">View Our Work</a>
            </div>
        </div>

        <div class="scroll-indicator"></div>
    </section>

    <!-- Services -->
    <section id="services" class="services">
        <h2 class="section-title">Our Services</h2>

        <div class="services-grid">
            <a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html#commercial" class="service-card-link">
                <div class="service-card">
                    <h3>Video Production</h3>
                    <p>
                        From pre-production to post-production, we design and craft videos that elevate your brand with cinematic storytelling.
                    </p>
                </div>
            </a>

            <a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html#cgi" class="service-card-link">
                <div class="service-card">
                    <h3>CGI &amp; 3D Animation</h3>
                    <p>
                        3D modeling, visual effects and smooth animation to bring your ideas, environments and products to life.
                    </p>
                </div>
            </a>

            <a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html#commercial" class="service-card-link">
                <div class="service-card">
                    <h3>Commercials</h3>
                    <p>
                        High-impact advertising designed to capture attention and deliver memorable visual communication.
                    </p>
                </div>
            </a>
        </div>
    </section>

    <!-- Clients -->
    <section id="clients" class="clients">
        <h2 class="section-title">Our Clients</h2>

        <div class="carousel-container">
            <div class="carousel-track" id="carouselTrack">
                <img 
                    src="https://filmwaker.it/wp-content/uploads/2025/01/ITAL-POL-logo.png" 
                    alt="ITAL-POL Logo" 
                    class="client-logo"
                >
                <img 
                    src="https://filmwaker.it/wp-content/uploads/2025/01/DOOM-logo.png" 
                    alt="DOOM Logo" 
                    class="client-logo"
                >
            </div>
        </div>
    </section>

    <!-- Portfolio -->
    <section id="portfolio" class="portfolio">
        <h2 class="section-title">Latest Work</h2>

        <div class="portfolio-grid">
            <a href="https://www.youtube.com/watch?v=MpuCteZkey4" target="_blank" class="portfolio-item" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/MpuCteZkey4/maxresdefault.jpg" 
                     onerror="this.src='https://img.youtube.com/vi/MpuCteZkey4/hqdefault.jpg'" 
                     alt="Portfolio: Virtual Production"
                     style="width:100%;height:100%;object-fit:cover;">
                <div class="portfolio-play">▶</div>
            </a>

            <a href="https://www.youtube.com/watch?v=x8jp9q4_BBo&t" target="_blank" class="portfolio-item" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/x8jp9q4_BBo/maxresdefault.jpg" 
                     onerror="this.src='https://img.youtube.com/vi/x8jp9q4_BBo/hqdefault.jpg'" 
                     alt="Portfolio: Interview"
                     style="width:100%;height:100%;object-fit:cover;">
                <div class="portfolio-play">▶</div>
            </a>

            <a href="https://www.youtube.com/watch?v=EGciy4S_5Zk&t" target="_blank" class="portfolio-item" rel="noopener noreferrer">
                <img src="https://img.youtube.com/vi/EGciy4S_5Zk/maxresdefault.jpg" 
                     onerror="this.src='https://img.youtube.com/vi/EGciy4S_5Zk/hqdefault.jpg'" 
                     alt="Portfolio: CGI and Unreal Engine"
                     style="width:100%;height:100%;object-fit:cover;">
                <div class="portfolio-play">▶</div>
            </a>
        </div>
    </section>

    <!-- Video Modal -->
    <div id="videoModal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:9999;align-items:center;justify-content:center;">
        <span onclick="closeVideo()" style="position:absolute;top:30px;right:50px;font-size:50px;color:var(--cyan);cursor:pointer;z-index:10000;">&times;</span>
        <iframe id="videoFrame" width="80%" height="80%" frameborder="0" allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write" allowfullscreen></iframe>
    </div>

    <!-- Mission Section -->
    <section class="mission">
        <div class="mission-content">
            <h2>Our Mission</h2>
            <p>
                We transform your vision into reality through powerful video production and advanced CGI. Our goal is to help your brand stand out in the digital landscape.
            </p>
            <p><strong>What does your production workflow look like?</strong></p>
            <p>
                We follow a complete and professional workflow, from concept creation and planning to filming, CGI and final delivery.
            </p>
            <p><strong>Do you offer 3D animation services?</strong></p>
            <p>
                Yes. We provide end-to-end 3D animation solutions, including modeling, animation, lighting and rendering.
            </p>
        </div>
        <div class="mission-image">
            <img src="<?php echo get_template_directory_uri(); ?>/mission-image.webp" alt="Our Mission">
        </div>
    </section>

    <!-- Courses Section -->
    <section id="courses" class="courses">
        <h2 class="section-title">Our Courses</h2>
        <div class="courses-grid">
            <a href="<?php echo get_template_directory_uri(); ?>/coursepage/courses.html#game-development" class="course-card-link">
                <div class="course-card">
                    <div class="course-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/courseimages/coursegame.webp" alt="Game Development Course" onerror="this.style.display='none'">
                    </div>
                    <div class="course-content">
                        <h3>Game Development Fundamentals</h3>
                        <p>
                            Learn how to build professional games using advanced tools. From game design to programming, master the foundations of modern development.
                        </p>
                        <div class="course-meta">
                            <span>Level: Beginner</span>
                            <span>€99</span>
                        </div>
                    </div>
                </div>
            </a>

            <a href="<?php echo get_template_directory_uri(); ?>/coursepage/courses.html#visual-effects" class="course-card-link">
                <div class="course-card">
                    <div class="course-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/courseimages/coursevfx.webp" alt="VFX Course" onerror="this.style.display='none'">
                    </div>
                    <div class="course-content">
                        <h3>Visual Effects Mastery</h3>
                        <p>
                            Learn advanced visual effects techniques. From compositing to color grading, create cinematic visuals that transform your scenes.
                        </p>
                        <div class="course-meta">
                            <span>Level: Intermediate</span>
                            <span>€149</span>
                        </div>
                    </div>
                </div>
            </a>

            <a href="<?php echo get_template_directory_uri(); ?>/coursepage/courses.html#virtual-production" class="course-card-link">
                <div class="course-card">
                    <div class="course-image">
                        <img src="<?php echo get_template_directory_uri(); ?>/courseimages/coursevirtualproduction.webp" alt="Virtual Production Course" onerror="this.style.display='none'">
                    </div>
                    <div class="course-content">
                        <h3>Virtual Production Pro</h3>
                        <p>
                            Explore the future of filmmaking with LED walls and real-time rendering. Learn how to manage virtual sets and immersive production pipelines.
                        </p>
                        <div class="course-meta">
                            <span>Level: Advanced</span>
                            <span>€199</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h4>How do I start a project with you?</h4>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>
                    Contact us via email or through the website. Tell us about your vision and we’ll schedule a call to discuss goals, deadlines and budget.
                </p>
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h4>What are your delivery times?</h4>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>
                    Delivery times depend on the project complexity. We always provide a detailed quote with a clear timeline.
                </p>
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h4>Do you include revisions?</h4>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>
                    Yes. Feedback and revisions are an essential part of our workflow to ensure a perfect result.
                </p>
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(this)">
                <h4>How can I learn more about your pricing?</h4>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>
                    Contact us for a free consultation. We’ll evaluate your needs and provide a personalized quote.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="contact-content">
            <h2 class="section-title">Contact Us</h2>
            <p style="color: var(--text-light); margin-bottom: 2rem; font-size: 1.1rem;">
                Turn your vision into reality. Let’s talk about your project.
            </p>
            <a href="mailto:info@filmwaker.it" class="btn-primary" style="display:inline-block;font-size:1.2rem;padding:1.2rem 2.5rem;">
                Send an Email
            </a>
            <p style="color: var(--text-light); margin-top: 2rem; font-size: 1rem;">
                📧 info@filmwaker.it
            </p>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-section">
            <h4>Services</h4>
            <ul>
                <li><a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html#commercial">Video Production</a></li>
                <li><a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html#cgi">CGI &amp; Animation</a></li>
                <li><a href="<?php echo get_template_directory_uri(); ?>/portfoliopage/portfolio.html#commercial">Commercials</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Resources</h4>
            <ul>
                <li><a href="<?php echo get_template_directory_uri(); ?>/teampage/team.html">Meet the Team</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Social</h4>
            <ul>
                <li><a href="https://www.instagram.com/filmwaker" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/filmwaker" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.youtube.com/@filmwaker" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
        </div>
    </footer>

    <!-- Credit Section -->
    <div class="credit-info">
        <p>
            <small>© 2025 Filmwaker Studio. All rights reserved. Website designed &amp; developed by </small>
            <a href="https://mrfabry.github.io" target="_blank" rel="noopener noreferrer">MrFabry</a>
        </p>
    </div>

    <button id="scrollTopBtn" class="scroll-top-btn" aria-label="Scroll to top">
        <i class="fa fa-arrow-up"></i>
    </button>

    <?php wp_footer(); ?>
    <script>
        const FILMWAKER_THEME_URL = "<?php echo get_template_directory_uri(); ?>";
    </script>
    <script src="<?php echo get_template_directory_uri(); ?>/script.js"></script>
</body>
</html>
