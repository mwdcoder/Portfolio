// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Language Toggle
const langToggle = document.getElementById('langToggle');
let currentLang = 'en'; // Default to English

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // Toggle HTML lang and dir attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Toggle button text
    langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
    
    // Toggle content visibility
    const arElements = document.querySelectorAll('.ar');
    const enElements = document.querySelectorAll('.en');
    
    arElements.forEach(el => {
        el.style.display = currentLang === 'ar' ? '' : 'none';
    });
    
    enElements.forEach(el => {
        el.style.display = currentLang === 'en' ? '' : 'none';
    });
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (currentLang === 'en' && link.dataset.en) {
            link.textContent = link.dataset.en;
        } else if (currentLang === 'ar' && link.dataset.ar) {
            link.textContent = link.dataset.ar;
        }
    });
});

// Scroll Indicator
window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollIndicator.style.width = scrolled + '%';
});

// Reveal on Scroll
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Smooth Scroll
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

// Cursor hover effect on links and buttons
const hoverElements = document.querySelectorAll('a, button, .btn');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});