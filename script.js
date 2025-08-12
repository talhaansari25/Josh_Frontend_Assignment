
        let currentTestimonial = 1;
        const testimonials = [
            {
                logo: "IBM",
                text: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
                author: "John Doe",
                role: "UI designer"
            },
            {
                logo: "Microsoft",
                text: "Slate has revolutionized how I manage my freelance projects. The intuitive design makes scheduling effortless.",
                author: "Jane Smith",
                role: "Product Manager"
            },
            {
                logo: "Google",
                text: "As a freelancer, I needed something simple yet powerful. Slate delivers exactly what I was looking for.",
                author: "Mike Johnson",
                role: "Developer"
            }
        ];

        function showTestimonial(n) {
            const testimonial = testimonials[n - 1];
            const content = document.getElementById('testimonialContent');
            content.innerHTML = `
                <div class="testimonial-logo">${testimonial.logo}</div>
                <p class="testimonial-text">${testimonial.text}</p>
                <div class="testimonial-author">
                    <div class="author-avatar" style="background: url('data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 100\\'><circle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'%23ddd\\'/><circle cx=\\'50\\' cy=\\'35\\' r=\\'15\\' fill=\\'%23999\\'/><path d=\\'M20 80 Q20 60 50 60 Q80 60 80 80\\' fill=\\'%23999\\'/></svg>') center/cover;"></div>
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            `;
        }

        function currentSlide(n) {
            currentTestimonial = n;
            showTestimonial(n);
            
            // Update dots
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === n - 1);
            });
        }

        // Auto-slide testimonials
        function autoSlide() {
            currentTestimonial = currentTestimonial >= testimonials.length ? 1 : currentTestimonial + 1;
            currentSlide(currentTestimonial);
        }

        setInterval(autoSlide, 5000);

        // Video Player
        const video = document.getElementById('featuresVideo');
        const playButton = document.getElementById('playButton');

        function toggleVideo() {
            if (video.paused) {
                video.play();
                playButton.classList.remove('show');
            } else {
                video.pause();
                playButton.classList.add('show');
            }
        }

        video.addEventListener('click', toggleVideo);
        playButton.addEventListener('click', toggleVideo);

        video.addEventListener('ended', () => {
            playButton.classList.add('show');
        });

        // Contact Form
        const contactForm = document.getElementById('contactForm');
        const modal = document.getElementById('successModal');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show success modal
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
            
            // Reset form
            contactForm.reset();
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function closeModal() {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Smooth scrolling for navigation links
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

        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                if (email && isValidEmail(email)) {
                    alert('Thank you for subscribing to our newsletter!');
                    this.reset();
                } else {
                    alert('Please enter a valid email address');
                }
            });
        }

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            showTestimonial(1);
        });