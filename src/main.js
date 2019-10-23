import Vue from "vue";
import {parallax, parallaxHorizontal, fadeInElement} from "./parallax";
import {showMenuOnMobile, closeMenuOnMobile, resetWindow, validateEmail} from "./functions";




let elBio= document.querySelector('#bio');
let menuBars = document.querySelector('#menu-bars');
let closeMenu = document.querySelector('#close-menu');
Vue.directive('numericOnly', {
    bind(el) {
        el.addEventListener('keyup', () => {
            let regex = /^\+?[\d]*$/;
            if (!regex.test(el.value)) {
                el.value = el.value.slice(0, -1);
            }
        })
    }
});
let app = new Vue({
    el: '#contact-form',
    data: {
        contacto: {
            nombre: {
                nombre: '',
                completed: false,
                error: false
            },
            email: {
                email: '',
                completed: false,
                error: false
            },
            telefono: {
                telefono: '',
                completed: false,
                error: false
            },
            mensaje: {
                mensaje: '',
                completed: false,
                error: false
            }
        },
        step: 1,
        totalSteps: 5
    },
    methods: {
        checkCompleted: function (e) {
            if(e.target.getAttribute('name')==='nombre') {
                this.contacto.nombre.completed = e.target.value.length > 3;
                this.contacto.nombre.error = e.target.value.length <= 3;
            }
            else if(e.target.getAttribute('name')==='email') {
                this.contacto.email.error = !validateEmail(e.target.value);
                this.contacto.email.completed = validateEmail(e.target.value);
            }
            else if(e.target.getAttribute('name')==='telefono') {
                this.contacto.telefono.error = e.target.value.length <= 8;
                this.contacto.telefono.completed = e.target.value.length > 8;
            }
            else if(e.target.getAttribute('name')==='mensaje') {
                this.contacto.mensaje.error = e.target.value.length<=8;
                this.contacto.mensaje.completed = e.target.value.length>8;

            }
        },
        nextStep() {
            if(this.totalSteps>this.step) {
                this.step++;
            }
            if (this.step===2) {
                document.querySelector('li.progress-item:nth-child(1)').classList.remove('progress-item');
                document.querySelector('form li:nth-child(1)').classList.add('progress-item-completed');
            }
            else if (this.step===3) {
                document.querySelector('li.progress-item:nth-child(2)').classList.remove('progress-item');
                document.querySelector('form li:nth-child(2)').classList.add('progress-item-completed');
            }
            else if (this.step===4) {
                document.querySelector('li.progress-item:nth-child(3)').classList.remove('progress-item');
                document.querySelector('form li:nth-child(3)').classList.add('progress-item-completed');
            }
            else if (this.step===5) {
                document.querySelector('li.progress-item:nth-child(4)').classList.remove('progress-item');
                document.querySelector('form li:nth-child(4)').classList.add('progress-item-completed');
            }
        },
        prevStep () {
            this.step--;
        }

    }

});

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
    console.log('click');
    e.stopPropagation();
    showMenuOnMobile();
});
closeMenu.addEventListener('click', (e)=> {
    e.stopPropagation();
    closeMenuOnMobile();
});


