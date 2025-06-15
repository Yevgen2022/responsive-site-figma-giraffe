
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
});
