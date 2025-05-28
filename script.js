const header = document.getElementById('header');

function updateHeaderStyle() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeaderStyle);
window.addEventListener('load', updateHeaderStyle);
