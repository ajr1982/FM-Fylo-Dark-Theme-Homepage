var themeSwitcher = new TimelineMax({
    paused: true
});
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");
var slideX = sun.offsetWidth;

function keepItTight() {
    slideX = sun.offsetWidth;
}

function lightTheme() {

    themeSwitcher.play();
}

function darkTheme() {

    themeSwitcher.reverse();
}
window.addEventListener("resize", keepItTight);
sun.addEventListener("click", lightTheme);
moon.addEventListener("click", darkTheme);
themeSwitcher
    .fromTo("#close", .8, {
        fill: '#ffffff'
    }, {
        fill: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("path.ani", .8, {
        fill: '#ffffff'
    }, {
        fill: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("polygon.frame", .8, {
        fill: '#ffffff',
        stroke: '#ffffff'
    }, {
        fill: '#1c2431',
        stroke: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("polygon.hole", .8, {
        fill: '#1c2431',
        stroke: '#1c2431'
    }, {
        fill: '#ffffff',
        stroke: '#ffffff',
        ease: Power1.easeOut
    }, .3)
    .fromTo("polygon.sidewall", .8, {
        fill: '#1c2431',
        stroke: '#1c2431'
    }, {
        fill: '#ffffff',
        stroke: '#ffffff',
        ease: Power1.easeOut
    }, .3)
    .fromTo("p.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("a.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("h1.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("h2.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("h3.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("h3.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("h3.ani", .8, {
        color: '#ffffff'
    }, {
        color: '#1c2431',
        ease: Power1.easeOut
    }, .3)
    .fromTo("main", .8, {
        backgroundColor: '#181f2a'
    }, {
        backgroundColor: '#ffffff',
        ease: Power1.easeOut
    }, .3)
    .fromTo(".overlay", .8, {
        backgroundColor: '#181f2a'
    }, {
        backgroundColor: '#ffffff',
        ease: Power1.easeOut
    }, .3)
    .fromTo("body", .8, {
        backgroundColor: '#181f2a'
    }, {
        backgroundColor: '#ffffff',
        ease: Power1.easeOut
    }, .3)
    .fromTo("section.features", .8, {
        backgroundColor: '#202a3c'
    }, {
        backgroundColor: '#f7f7f7',
        ease: Power1.easeOut
    }, .3)
    .fromTo(".testimonial", .8, {
        backgroundColor: '#202a3c',
        boxShadow: '5px 5px 5px 3px #1c2431'
    }, {
        backgroundColor: '#cccccc',
        boxShadow: '5px 5px 10px 3px rgba(0, 0, 0, .1)',
        ease: Power1.easeOut
    }, .3)
    .fromTo(".floating", .8, {
        backgroundColor: '#202a3c'
    }, {
        backgroundColor: '#cccccc',
        ease: Power1.easeOut
    }, .3)
    .fromTo(".header-bg", .8, {
        opacity: 1
    }, {
        opacity: 0,
        ease: Power1.easeOut
    }, .3)
    .fromTo(".light", .8, {
        x: '0',
        opacity: 1,
    }, {
        x: slideX,
        opacity: 0,
        ease: Power1.easeOut
    }, .3)
    .fromTo(".dark", .8, {
        x: -slideX,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        ease: Power1.easeOut
    }, .3)

;

var menu = document.getElementById("menu");
var close = document.getElementById("close");

function openMenu() {

    mobileMenu.play();
}

function closeMenu() {

    mobileMenu.reverse();
}
var mobileMenu = new TimelineMax({
    paused: true
});
mobileMenu
    .set(".overlay", {
        zIndex: 10
    }, 0.1)
    .fromTo(".overlay", .5, {
        opacity: 0
    }, {
        opacity: 0.9,
        ease: Power1.easeOut
    }, .2)
    .fromTo(".dia-1", .5, {
        y: 0
    }, {
        y: '10vw',
        ease: Power1.easeOut
    }, .2)
    .fromTo(".pos-1", .5, {
        y: 0
    }, {
        y: '10vw',
        ease: Power1.easeOut
    }, .2)
    .fromTo(".dia-2", .5, {
        y: 0
    }, {
        y: '15vw',
        ease: Power1.easeOut
    }, .2)
    .fromTo(".pos-2", .5, {
        y: 0
    }, {
        y: '15vw',
        ease: Power1.easeOut
    }, .2)
    .fromTo(".dia-3", .5, {
        y: 0
    }, {
        y: '20vw',
        ease: Power1.easeOut
    }, .2)
    .fromTo(".pos-3", .5, {
        y: 0
    }, {
        y: '20vw',
        ease: Power1.easeOut
    }, .2)
    .fromTo(".pos-1", .3, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeOut
    }, .4)
    .fromTo(".pos-2", .3, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeOut
    }, .4)
    .fromTo(".pos-3", .3, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Power1.easeOut
    }, .4)

    .set(close, {
        zIndex: 99
    }, 0.3)

;

menu.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);