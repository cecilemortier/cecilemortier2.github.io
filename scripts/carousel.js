document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-element');
    let currentSlide = 0;
    const slideInterval = 8000; // Change slide every 8 seconds

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Add touch and click event listeners to carousel
    ['click', 'touchstart'].forEach(function(event) {
        carousel.addEventListener(event, function(e) {
            e.preventDefault();
            nextSlide();
        });
    });

    // Start automatic slideshow
    setInterval(nextSlide, slideInterval);
});
