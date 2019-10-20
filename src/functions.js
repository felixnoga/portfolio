let menuBars = document.querySelector('#menu-bars');
let closeMenu = document.querySelector('#close-menu');
let menu = document.querySelector('.menu-items');


const showMenuOnMobile = () => {
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
export {showMenuOnMobile, closeMenuOnMobile, resetWindow};