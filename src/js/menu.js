const hamburger = document.querySelector('.menu__btn'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
});

