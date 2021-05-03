// Toggle Mobile Menu
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
        menuIcon.src = "./images/icon-close.svg";
    } else {
        menuIcon.src = "./images/icon-hamburger.svg";
    }
})

// GSAP Animations
gsap.registerPlugin(ScrollTrigger)
const timeline = gsap.timeline({
    defaults: {
        duration: 1
    }
})
timeline
    .from('.header__image', {
        x: '100vw',
        opacity: 0
    }, 0)
    .from('.header__contentText', {
        x: '-120%',
        opacity: 0
    }, 0)
    .from('.nav-item', {
        opacity: 0,
        stagger: .4
    })

ScrollTrigger.batch(".feature__item", {
    start: "top bottom",
    once: true,
    onEnter: (elements, triggers) => {
        gsap.from(elements, {
                opacity: 0,
                stagger: 0.5,
                duration: 1
            })
    }
})