
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
});



// Feature card toggle on arrow button click
document.querySelectorAll('.feature-card').forEach(card => {
    const btn = card.querySelector('.arrow-btn');
    btn.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

// Smooth scrolling for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slider = document.querySelector('.locations-slider');

const scrollAmount = 300; // pixels to scroll per click

leftArrow.addEventListener('click', () => {
    slider.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});







// Expandable Cards Functionality
document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".expandable-card .toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".expandable-card");
            const isExpanded = card.classList.contains("expanded");

            card.classList.toggle("expanded");
            this.textContent = isExpanded ? "Show More" : "Show Less";
        });
    });
});






// Expand/Collapse About Boxes
document.querySelectorAll('.about-box').forEach(box => {
    const btn = box.querySelector('.toggle-btn');
    const content = box.querySelector('.about-box-content');

    btn.addEventListener('click', () => {
        const expanded = box.classList.toggle('expanded');
        btn.textContent = expanded ? 'Show less' : 'Show more';
        btn.setAttribute('aria-expanded', expanded);
        content.setAttribute('aria-hidden', !expanded);
    });

    box.querySelector('.about-box-header').addEventListener('click', (e) => {
        if (e.target === btn) return;
        btn.click();
    });
});

