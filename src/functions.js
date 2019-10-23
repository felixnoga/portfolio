let menuBars = document.querySelector('#menu-bars');
let closeMenu = document.querySelector('#close-menu');
let menu = document.querySelector('.menu-items');


let showMenuOnMobile = () => {
    menuBars.style.display='none';
    menu.style.transform=`translateY(500px)`;
    closeMenu.style.transform = `translateY(500px)`;
};
const closeMenuOnMobile = ()=>{
    menu.style.transform=`translateY(-500px)`;
    closeMenu.style.transform = `translateY(-500px)`;
    document.querySelector('#menu-bars').style.display='block';
};

const resetWindow = () => {
    if(window.innerWidth>768) {
        menuBars.removeAttribute('style');
        closeMenu.removeAttribute('style');
        menu.removeAttribute('style');

    }
};
const validateEmail = email => {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    return regex.test(email);
};
export {showMenuOnMobile, closeMenuOnMobile, resetWindow, validateEmail};