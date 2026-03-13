// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial Load Animation
const tl = gsap.timeline();

// Navbar animation
tl.from('.navbar', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    clearProps: 'all' // Remove inline styles after animation so CSS hover effects work
});

// Hero Content Animation
tl.to('.hero-title', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
}, '-=0.5');

tl.to('.hero-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
}, '-=0.7');

tl.to('.hero-actions', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
}, '-=0.7');


// Parallax for Background Images
gsap.to('.hero-section', {
    backgroundPosition: `50% ${-window.innerHeight / 2}px`,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});


// Product Scroll Animations
const sections = document.querySelectorAll('.product-section');

sections.forEach((section) => {
    const textElements = section.querySelectorAll('.product-text > *');
    const imageWrapper = section.querySelector('.image-wrapper');

    // Text Reveal on Scroll
    gsap.from(textElements, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Image Reveal on Scroll
    gsap.from(imageWrapper, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        rotationY: -15, // Adding a slight 3D angle effect
        duration: 1.2,
        ease: 'power4.out'
    });
});

// Cursor parallax effect on image hover
const images = document.querySelectorAll('.image-wrapper');
images.forEach((imgWrap) => {
    imgWrap.addEventListener('mousemove', (e) => {
        const rect = imgWrap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(imgWrap, {
            rotationY: x * 0.05,
            rotationX: -y * 0.05,
            ease: 'power2.out',
            duration: 0.5
        });
    });

    imgWrap.addEventListener('mouseleave', () => {
        gsap.to(imgWrap, {
            rotationY: 0,
            rotationX: 0,
            ease: 'power2.out',
            duration: 0.8
        });
    });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        // Add to clicked
        this.classList.add('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for navbar
                behavior: 'smooth'
            });
        }
    });
});
