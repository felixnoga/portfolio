import {parallax, parallaxHorizontal, fadeInElement} from "./parallax";
import {showMenuOnMobile, closeMenuOnMobile, resetWindow} from "./functions";

let elBio= document.querySelector('#bio');
let menuBars = document.querySelector('#menu-bars');
let closeMenu = document.querySelector('#close-menu');

window.addEventListener('scroll', () => {
    parallax('#parallax1', window.scrollY, 0.5);
    parallax('#parallax2', window.scrollY, 1);
    // parallax('#parallax3', window.scrollY, 2.5);
    // parallax('#parallax4', window.scrollY, 4);
    parallaxHorizontal('.header__title', window.scrollY, 2, 'left');
    parallaxHorizontal('.header__subtitle', window.scrollY, 2, 'right');
    fadeInElement('#bio', '#img-bio', 500);
});

window.addEventListener('resize',resetWindow);


menuBars.addEventListener('click', (e) => {
    e.stopPropagation();
    showMenuOnMobile();
});
closeMenu.addEventListener('click', (e)=> {
    e.stopPropagation();
    closeMenuOnMobile();
});

