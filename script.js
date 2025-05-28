// Плавное появление при скролле
const fadeInElements = document.querySelectorAll('.fade-in');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  fadeInElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });

  // Параллакс
  const bg = document.querySelector('.bg-building');
  const fg = document.querySelector('.fg-building');

  if (bg && fg) {
    const scrollY = window.scrollY;
    bg.style.transform = `translate(-50%, ${scrollY * 0.1}px)`;
    fg.style.transform = `translate(-50%, ${scrollY * 0.2}px)`;
  }
}

window.addEventListener('scroll', handleScroll);
handleScroll();
