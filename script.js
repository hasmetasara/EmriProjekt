// Funksionaliteti "Bli Tani"
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.getAttribute('data-title');
    alert(`Ju zgjodhët të blini librin: "${title}"`);
  });
});

// Formulari i kontaktit
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Faleminderit ${name}! Mesazhi juaj u dërgua me sukses.`);
    form.reset();
  });
}
