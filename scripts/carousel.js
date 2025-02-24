document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.carousel').getElementsByTagName('img');
    let currentSlide = 0;
    const slideInterval = 6000; // Change slide every 3 seconds

    // Show first slide initially
    slides[0].classList.add('active');

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Start automatic slideshow
    setInterval(nextSlide, slideInterval);
});