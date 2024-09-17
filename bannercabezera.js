document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.banner');
    let currentIndex = 0;

    function showNextBanner() {
        banners[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].style.opacity = 1;
    }

    setInterval(showNextBanner, 5000); // Cambia el banner cada 3 segundos
});