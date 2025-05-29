document.addEventListener('DOMContentLoaded', () => {
  const bg1 = document.querySelector('.background1-image');

  // Плавное появление через добавление класса
  setTimeout(() => {
    bg1.classList.add('visible');
  }, 100); // задержка для плавности

  // Параллакс при скролле
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Смещаем фон вниз с небольшой скоростью (0.3)
    bg1.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
});