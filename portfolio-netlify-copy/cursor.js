//cursor movement
const cursorTag = document.querySelector("div.cursor")
const ball = cursorTag.querySelector("div")

let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0
let speed = 0.2

const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
}

animate()

document.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
});


//IMG blur 

const img = document.querySelectorAll('img');

const blur = function () {
    img.classList.add('img-blur');
}

//James West Coast counter

const change = document.querySelector('.proj-img-container div');
const page = document.querySelector('body')
let counter = 0;
let myImages = [" ", "james_tillman_tour_portrait.png", "la_residency_green.png", "LA_residency_1920[final].png"];

function nextImage() {
    counter += 1;
    if (counter > myImages.length - 1) {
        counter = 0;
    }
    change.style.backgroundImage = "url(" + myImages[counter] + ")";
}

page.addEventListener('click', nextImage);

counter -= 1;
nextImage();


