let accordion = document.querySelectorAll(".accordion");
accordion.forEach((elem) => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("open");
        let body = elem.querySelector(".accordion__body");

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
        } else {
            body.style.maxHeight = `${body.scrollHeight + 64}px`;
        }
    });
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

const pagination = document.querySelector(".slider__pagination");

for (let i = 0; i < slides.length; i++) {
    const bar = document.createElement("span");
    bar.classList.add("bar");
    if (i === 0) {
        bar.classList.add("active");
    }
    pagination.appendChild(bar);
}

const bars = document.querySelectorAll(".bar");

for (let i = 0; i < bars.length; i++) {
    bars[i].addEventListener("click", () => {
        goToSlide(i);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].classList.remove("active");
    bars[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    bars[currentSlide].classList.add("active");
}
