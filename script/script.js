// Selecciona el texto que quieres animar
const headerText = document.querySelector('h1');

// Evento al hacer scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    headerText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
