const burger = document.querySelector('.nav-burger');
const nav = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
})