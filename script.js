const buttons = document.querySelectorAll('[data-carousel-button]');
const slides = document.querySelector("[data-slides]");

let activeSlide = slides.querySelector("[data-active]");
let index = [...slides.children].indexOf(activeSlide);

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        clearInterval(intervalID);
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        activeSlide = slides.querySelector("[data-active]");

        if(offset === 1 ) {
            index === slides.children.length-1 ? index = 0 : index++;
        } else {
            index === 0 ? index = slides.children.length-1 : index--;
        }

        slides.children[index].dataset.active = true;
        delete activeSlide.dataset.active;

        intervalID = setInterval(defilerSlides,4000);
    })
});

let intervalID = setInterval(defilerSlides,4000);

function defilerSlides() {
    activeSlide = slides.querySelector("[data-active]");

    if(index === slides.children.length-1) {
        index = 0;
    } else {
        index ++;
    }

    slides.children[index].dataset.active = true;
    delete activeSlide.dataset.active;
}