const carruselItems = document.querySelector('.carrusel-items');
const btnIzq = document.querySelector('.carrusel-btn.izquierda');
const btnDer = document.querySelector('.carrusel-btn.derecha');

let currentIndex = 0;
const cardWidth = 320;
const visibleCards = Math.floor(document.querySelector('.carrusel-contenedor').offsetWidth / cardWidth);
const maxIndex = carruselItems.children.length - visibleCards;

btnIzq.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarrusel();
  }
});

btnDer.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarrusel();
  }
});

function updateCarrusel() {
  const offset = currentIndex * cardWidth;
  carruselItems.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }
  updateCarrusel();
}

let autoScroll = setInterval(nextSlide, 3000);

carruselItems.addEventListener('mouseenter', () => {
  clearInterval(autoScroll);
});

carruselItems.addEventListener('mouseleave', () => {
  autoScroll = setInterval(nextSlide, 3000);
});