
//INDEX
const preloadTl = new TimelineMax();

preloadTl
    .set('.invisible', { opacity: 0 })
    //.to('#loader-page', 5, {width: 2000, ease: Power4.easeIn})
    //.to('#loader-page', 0.3, {opacity: 0, ease:Linear.easeOut})
    //.to('.percent-loader', 1.5,{ y: -10, opacity: 0, ease:"power4"})
    .to('.name', 0.5, { opacity: 1, ease: Linear.easeIn })
    //.staggerFrom('.nav-links a', 0.8, {opacity:0, ease: Power4.easeIn}, 0.2)
    .to('.invisible', 1, { opacity: 1 }, 'visible')
    .staggerFrom('.list-item', 0.3, { opacity: 0, ease: "power4.in" }, 0.1, 'visible');







// INFO PAGE


const infotl = new TimelineMax();

infotl
    .set('.img-blur', { opacity: 0 })
    .staggerFrom('.nav-links a', 0.8, { opacity: 0, ease: Power4.easeIn }, 0.2)
    .to('.img-blur', 0.8, { y: 10, opacity: 1, ease: Linear.easeIn }, 'content')
    .staggerFrom('.info-item', 0.8, { y: 10, opacity: 0, ease: "power4.in" }, 0.2, 'content');


//Home PAGE

const homeTl = new TimelineMax();

homeTl
    .set('.space-item', { opacity: 0 })
    .to('.name', 0.5, { opacity: 1, ease: Linear.easeIn })
    .staggerFrom('.space-item', 1, { opacity: 0, ease: Linear.easeIn, delay: 1 }, 0.2);


// img pixelated preview

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const links = [...document.querySelectorAll('li.list-item')]

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        for (let j = 0; j < links.length; j++) {
            if (j !== i) {
                links[j].style.opacity = 0.2;
            } else {
                links[j].style.opacity = 1;
            }
        }
    })

    links[i].addEventListener('mouseleave', () => {
        for (let i = 0; i < links.length; i++) {
            links[i].style.opacity = 1;
        }
    })
}

let imgIndex = 0;
//load images into array for reference

const images = [
    'james_tillman_tour_portrait.png',
    'truthordare-002.png',
    'ss-promo-mock2.png',
    'push-notification-modal.jpg',
    'onboarding-hero.jpg',
    'myofferingshome.jpg',
    'james-tillman-website.png',
    'coming-soon-img.png',
    'boiproject2.png',
    'AP01_nyt.jpeg',
    'portriats001.png'
]

let imgArr = [];


canvas.style.width = "500px";
canvas.style.height = "500px";

// Canvas mousemove variables


window.addEventListener('mousemove', (e) => {

})

images.forEach((image, idx) => {
    let elImage = new Image(300);
    elImage.src = image;
    elImage.classList.add('project-image')
    document.body.append(elImage);
    imgArr.push(elImage)
})

//Draw images to the canvas
let percent = 0;
let target = 0;

function drawImage(idx) {
    let { width, height } = imgArr[idx].getBoundingClientRect();

    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    //pixelate by diabling the smoothing
    ctx.webkitImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.msSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    if (target === 1) { //link has been hovered
        // 2 speeds to make the effect more gradual
        if (percent < 0.6) {
            percent += .01;
        } else if (percent < 1) {
            percent += 0.1;
        }
    } else if (target === 0) {
        if (percent > 0.6) {
            percent -= 0.3
        } else if (percent > 0) {
            percent -= .01;
        }
    }

    let scaledWidth = width * percent;
    let scaledHeight = height * percent;

    if (percent >= 1) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        ctx.drawImage(imgArr[idx], 0, 0, width, height);
    } else {
        ctx.drawImage(imgArr[idx], 0, 0, scaledWidth, scaledHeight);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        if (canvas.width !== 0 && canvas.height !== 0) {
            ctx.drawImage(canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, width, height);
        }
    }
}



links.forEach((link, idx) => {
    link.addEventListener('mouseenter', () => {
        imgIndex = idx;
        target = 1
    })

    link.addEventListener('mouseleave', () => {
        target = 0;
    })
})

function animate() {
    drawImage(imgIndex);
    window.requestAnimationFrame(animate);
}

animate()




// Home page space movement

/*const body = document.querySelector('body');
const homeProjects = ['.item1', '.item2', '.item3', '.item4', '.item5', '.item6', '.item7', '.item8', '.item9', '.item10' ]

homeProjects.forEach.addEventListener("mouseover", function(){
  body.style.backgroundColor = "red"
});


document.querySelectorAll('.space-item').forEach(item => {
  item.addEventListener('mouseover', event =>{
    body.style.backgroundColor = 'red'
  })
})

const spaceItem = document.getElementsByClassName('space-item');
spaceItem.style.transform = 'translateX(200px) translateY(-200px) ease';

//HOME

const titles = document.querySelectorAll('div.space-item')

titles.forEach(title =>{
  document.addEventListener("mousemove", function(event){
    const aimX = (event.pageX - (window.innerWidth/2)) / 20
    const aimY = (event.pageY - (window.innerWidth/2)) / -20
    titles.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`
  })
})*/










