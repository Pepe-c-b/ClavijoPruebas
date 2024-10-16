
document.querySelectorAll('.carousel').forEach((carousel) => {
    let index = 0;
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = carousel.querySelector('.carousel-control.prev');
    const nextButton = carousel.querySelector('.carousel-control.next');

    function updateCarousel() {
        images.forEach((img, i) => {
            img.style.display = 'none';
            if(i === index) {
                img.style.display = 'block';
            }
        });
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});