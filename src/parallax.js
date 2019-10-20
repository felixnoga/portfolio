const parallax = (element, distance, speed) => {
    let el = document.querySelector(element);
    el.style.transform = `translateY(-${distance*speed}px)`;
    // el.style.transform = 'translateY('+distance*speed+'px)';
};
const parallaxHorizontal = (element, distance, speed, direction='right') => {
    let el = document.querySelector(element);
    if (direction === 'right') {
        el.style.transform = `translateX(${distance*speed}px)`;
    }
    else {
        el.style.transform = `translateX(-${distance*speed}px)`;
    }

};

const fadeInElement = (container, element, distance) => {
    let contenedor = document.querySelector(container);
    let elemento = document.querySelector(element);

    if(window.scrollY>contenedor.offsetTop-contenedor.offsetTop/1.5) {
        elemento.style.opacity = '1';
        elemento.style.transform = `translateX(-${distance}px)`;
        elemento.style.transform += `rotate(720deg)`;
    }
    else if (window.scrollY<(contenedor.offsetTop+contenedor.offsetHeight)) {
        let desplazamiento = elemento.getBoundingClientRect().right+elemento.offsetWidth;
        elemento.style.opacity = '0';
        elemento.style.transform = `translateX(${desplazamiento}px)`;
    }
};


export {parallax, parallaxHorizontal, fadeInElement};