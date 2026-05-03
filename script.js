function showMessage() {
  alert("UI Loaded Successfully!");
}

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('load', () => {
  reveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('active');
    }, i * 200);
  });
});