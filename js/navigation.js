// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = document.querySelectorAll('a[data-page]'); 
    const pages = document.querySelectorAll('.page');
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links'); // UL element
    
    // Set home page as active by default
    showPage('home-page');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page') + '-page';
            showPage(pageId);
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });

        document.getElementById(pageId).classList.add('active');
        
        // Update URL hash
        window.location.hash = pageId.replace('-page', '');
    }
    
    // Check URL hash on page load
    if (window.location.hash) {
        const pageId = window.location.hash.substring(1) + '-page';
        showPage(pageId);
    }
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

