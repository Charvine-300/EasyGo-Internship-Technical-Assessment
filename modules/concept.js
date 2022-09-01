//Mobile menu for conept dashboard
const conceptIcon = document.querySelector('#concept-burger');
const conceptMenu = document.querySelector('#concept-menu');


conceptIcon.addEventListener('click', () => {
    conceptMenu.classList.toggle('is-active');
    conceptIcon.classList.toggle('is-active');
})