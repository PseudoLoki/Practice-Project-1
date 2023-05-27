const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener("click", () => {
    document.querySelector('.nav-menu').classList.toggle('showMenu')
});

ScrollReveal().reveal('.showcase', {delay: 300});
ScrollReveal().reveal('.news-cards', {delay: 300});
ScrollReveal().reveal('.new-card', {delay: 300});
ScrollReveal().reveal('.banner', {delay: 300});
ScrollReveal().reveal('.social', {delay: 300});
ScrollReveal().reveal('.footer-links', {delay: 300});