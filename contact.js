document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Reset error messages
                    document.querySelectorAll('[id$="Error"]').forEach(el => {
                        el.classList.add('hidden');
                    });
                    
                    // Validate form
                    let isValid = true;
                    
                    // Name validation
                    const nameInput = document.getElementById('name');
                    if (!nameInput.value.trim()) {
                        document.getElementById('nameError').classList.remove('hidden');
                        isValid = false;
                    }
                    
                    // Email validation
                    const emailInput = document.getElementById('email');
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(emailInput.value)) {
                        document.getElementById('emailError').classList.remove('hidden');
                        isValid = false;
                    }
                    
                    // Message validation
                    const messageInput = document.getElementById('message');
                    if (!messageInput.value.trim()) {
                        document.getElementById('messageError').classList.remove('hidden');
                        isValid = false;
                    }
                    
                    if (isValid) {
                        // In a real application, you would send the form data to a server here
                        // For this demo, we'll just show the success message
                        
                        // Clear form
                        contactForm.reset();
                        
                        // Show success message
                        successMessage.classList.remove('hidden');
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.classList.add('hidden');
                        }, 5000);
                    }
                });
            }
            
            // Add animation classes on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.animate-fade-in');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.classList.add('opacity-100', 'transform-none');
                    }
                });
            };
            
            // Initial check
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
        });