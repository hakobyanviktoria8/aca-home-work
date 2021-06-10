const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const btn = document.querySelectorAll(".btn");
const images= document.querySelectorAll(".images img");

//slide  carusel
let index = 0;
function slidesCarusel(dir) {
    index += dir;
    if (index > slides.length-1) {index = 0}
    if (index < 0) {index = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        images[i].classList.remove('active');
    }
    slides[index].style.display = "block";
    images[index].classList.add("active")
}
slidesCarusel(0);

prev.addEventListener("click", () => {slidesCarusel(-1)});
next.addEventListener("click", () => {slidesCarusel(1)});

// setTimeout carusel
let timer = setInterval(() => {slidesCarusel(1)}, 2000);

btn.forEach(x => x.addEventListener("mouseover",() => {
    clearInterval(timer)
}));
btn.forEach(x => x.addEventListener("mouseout",() => {
    timer = setInterval(() => {slidesCarusel(1)}, 2000)
}));

//imaages click
images.forEach(x => x.addEventListener("click",(event) => {
    // let data = event.target.getAttribute("data");
    let data = event.target.closest("[data]");
    index = data -1;
    slidesCarusel(0)
}));

//keybord Left & right button !Vata Ashxatum
// document.onkeydown = keyDown;
// function keyDown(e) {
//     e = e || window.event;
//     if (e.keyCode === 37) {
//         clearInterval(timer);
//         slidesCarusel(-1)
//     }
//     else if (e.keyCode === 39) {
//         clearInterval(timer);
//         slidesCarusel(1)
//     }
// }
// document.onkeyup = keyUp;
// function keyUp() {
//     timer = setInterval(() => {slidesCarusel(1)}, 2000)
// }

// poqr img mecacman ayl exanak !CHSTUGVAC

// images.onclick = function (event) {
//     let img = event.target.closest("img");
//     if (!img) return;
//     showIMG(img.src, img.alt);
//     event.preventDefault();
// };
// function showIMG(src, alt) {
//     largeImg.src = src;
//     largeImg.alt = alt;
// }