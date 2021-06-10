const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
let direction;

right.addEventListener('click', function() {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)';
});

left.addEventListener('click', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(20%)';
});

slider.addEventListener('transitionend', function() {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }
    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
});

// var images=[]
// function images() {
//
// }