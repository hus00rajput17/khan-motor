// Highlight Active Navigation Link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active'); // Add the active class to the current page
        } else {
            link.classList.remove('active');
        }
    });
});

// Smooth Scroll Effect for Anchor Links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is a hash link
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Button Interactivity (e.g., CTA Buttons)
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked! Performing the associated action...');
    });
});

// Contact Form Submission Handler (Optional Placeholder Logic)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault(); // Prevent actual submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset(); // Reset the form
    });
}
