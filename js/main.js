// Main initialization and utility functions

// Add floating elements dynamically
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const colors = ['rgba(37, 99, 235, 0.1)', 'rgba(245, 158, 11, 0.1)', 'rgba(16, 185, 129, 0.1)'];
    
    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        const size = Math.random() * 100 + 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.background = color;
        element.style.top = `${Math.random() * 100}%`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDuration = `${Math.random() * 20 + 10}s`;
        
        floatingContainer.appendChild(element);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        // Add mouseenter event
        icon.addEventListener('mouseenter', function() {
            console.log('Hover detected on:', this);
            this.style.border = '3px solid green !important';
            this.style.background = 'lightgreen !important';
        });
        
        // Add mouseleave event
        icon.addEventListener('mouseleave', function() {
            console.log('Hover ended on:', this);
            this.style.border = '1px solid blue !important';
            this.style.background = 'white !important';
        });
    });
});

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80
    });
}