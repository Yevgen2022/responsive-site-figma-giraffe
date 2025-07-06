const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav__close');
const overlay = document.querySelector('.mobile-nav-overlay');

function openMenu() {
    burger.classList.add('open');
    mobileNav.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // Блокуємо скрол
}

function closeMenu() {
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = ''; // Відновлюємо скрол
}

// Закриваємо меню при зміні розміру екрана
function handleResize() {
    if (window.innerWidth >= 768) {
        closeMenu();
    }
}

burger.addEventListener('click', openMenu);
mobileNavClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Закриваємо при натисканні Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMenu();
    }
});

// Закриваємо при зміні розміру екрана
window.addEventListener('resize', handleResize);
