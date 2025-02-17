// Scroll Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Testimonials Data
    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c',
            stars: 5,
            text: "My daughter absolutely loves her new educational blocks! They're perfect for learning!",
            author: "Sarah's Mom"
        },
        {
            image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74',
            stars: 5,
            text: "The quality of the toys is outstanding. My son plays with them every day!",
            author: "John's Dad"
        },
        {
            image: 'https://images.unsplash.com/photo-1543332143-4e8c27e3256f',
            stars: 5,
            text: "Fast shipping and amazing customer service. Will definitely shop here again!",
            author: "Emma's Mom"
        }
    ];

    // Create Testimonial Cards
    const testimonialsCarousel = document.querySelector('.testimonials-carousel');
    testimonials.forEach(testimonial => {
        const testimonialCard = createTestimonialCard(testimonial);
        testimonialsCarousel.appendChild(testimonialCard);
    });

    // Initialize chat icon functionality
    const chatIcon = document.querySelector('.chat-icon');
    chatIcon.addEventListener('click', () => {
        alert('Our chat support will be available soon!');
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Helper function to create testimonial cards
function createTestimonialCard(testimonial) {
    const div = document.createElement('div');
    div.className = 'testimonial animate-on-scroll';
    div.innerHTML = `
        <img src="${testimonial.image}" alt="Happy Customer">
        <div class="stars">${'★'.repeat(testimonial.stars)}</div>
        <p>"${testimonial.text}"</p>
        <h4>- ${testimonial.author}</h4>
    `;
    return div;
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add floating animation to featured toys
const toyCards = document.querySelectorAll('.toy-card');
toyCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px) rotate(2deg)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0) rotate(0)';
    });
});
