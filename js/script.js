const sliderTrack = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider(index) {
    const slideWidth = document.querySelector('.gallery-item').offsetWidth;
    sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        const index = parseInt(event.target.dataset.index, 10);
        updateSlider(index);
    });
});

window.addEventListener('resize', () => updateSlider(currentIndex));

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    navMenu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navMenu.classList.remove("active");
        }
    });
});
