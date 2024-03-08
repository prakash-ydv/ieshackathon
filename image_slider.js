document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide');
    let index = 0;
    slides[index].classList.add('active');
    
    setInterval(function() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 5000); // Change slide every 3 seconds
});
