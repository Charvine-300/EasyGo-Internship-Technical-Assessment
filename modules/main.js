//Mobile Menu for Homepage
const burgerIcon = document.querySelector('#customized-menu');
const navbarMenu = document.querySelector('#navbarBasicExample');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('is-active');
  navbarMenu.classList.toggle('is-active');
})
