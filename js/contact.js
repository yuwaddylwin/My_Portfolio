// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Using Formspree for form submission
        const response = await fetch('https://formspree.io/f/xrbrekrv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        showFormMessage('Sorry, there was an error sending your message. Please try again or email me directly at yuwaddylwin.2004@gmail.com', 'error');
    } finally {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Alternative email functionality
function sendEmailDirectly(formData) {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:yuwaddylwin.2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    return true;
}