document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    const tarifBoxes = document.querySelectorAll('.tarif_box');

    function checkScroll() {
        boxes.forEach(box => {
            const boxPosition = box.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (boxPosition < screenHeight * 0.75) {
                box.classList.add('animate');
            }
        });

        tarifBoxes.forEach(tarifBox => {
            const tarifBoxPosition = tarifBox.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (tarifBoxPosition < screenHeight * 0.75) {
                tarifBox.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
});


