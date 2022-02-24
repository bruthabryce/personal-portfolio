//GSAP Timeline

const projectTl = new TimelineMax();

projectTl
    .set('.index-number', { opacity: 0 })
    .set('.info-holderr', { opacity: 0 })
    .to('.index-number', 0.5, { opacity: 1, y: 5, ease: "power4.in" })
    .to('.info-holderr', 0.5, { opacity: 1, y: 5, ease: "power4.in" });


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

const imgs = document.querySelectorAll('proj-img-container div');

const blur = function () {
    imgs.forEach(img => {
        imgs.classList.add('img-blur');
    })
}

//James West Coast counter

const change = document.querySelector('.proj-img-container div');
const page = document.querySelector('body')
let counter = 0;
let myImages = ['', 'ss-brading-ideation.png', 'ss-promo-mock1.png', 'ss-promo-mock2.png', 'blkwht-portrait.png', 'hairmap-source.png'];

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