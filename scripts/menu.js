const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__bottom');

/* overlay */
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

/* toggle */
function toggleMenu() {
    const isOpen = nav.classList.contains('active');

    burger.classList.toggle('active', !isOpen);
    nav.classList.toggle('active', !isOpen);
    overlay.classList.toggle('active', !isOpen);

    document.body.style.overflow = !isOpen ? 'hidden' : '';
}

/* events */
burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

/* close on link click */
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 690) {
            toggleMenu();
        }
    });
});

/* close on ESC */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        toggleMenu();
    }
});

/* close on resize */
window.addEventListener('resize', () => {
    if (window.innerWidth > 690 && nav.classList.contains('active')) {
        toggleMenu();
    }
});

// Кнопка "Наверх"
const scrollTopButton = document.getElementById('scrollTop');

// Показываем кнопку после скролла
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Прокрутка к началу страницы
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});