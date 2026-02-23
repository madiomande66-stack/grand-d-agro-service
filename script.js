// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => { mobileNav.style.display = 'none'; });
});

// Formulaire WhatsApp enrichi
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const requestType = document.getElementById('requestType').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const phoneNumber = '2250172513751';
  const text = `Bonjour GRAND‑D AGRO SERVICE,%0A%0ANom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ATéléphone: ${encodeURIComponent(phone)}%0AType: ${encodeURIComponent(requestType)}%0AObjet: ${encodeURIComponent(subject)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});

// Newsletter (simulation)
document.getElementById('newsletterBtn').addEventListener('click', function() {
  const email = document.getElementById('newsletterEmail').value;
  if(email) alert('Merci pour votre inscription (simulation)');
  else alert('Veuillez entrer un email');
});

// Lightbox
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImage');
const closeBtn = document.querySelector('.lightbox-close');
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = item.dataset.src;
  });
});
closeBtn.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => {
  if(e.target === modal) modal.style.display = 'none';
});

// Filtre produits
document.getElementById('productSearch').addEventListener('input', function(e) {
  const search = e.target.value.toLowerCase();
  document.querySelectorAll('#productsGrid .card').forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    const desc = card.querySelector('p').innerText.toLowerCase();
    if(title.includes(search) || desc.includes(search)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const winH = window.innerHeight;
    if (top < winH - 120) el.classList.add('show');
  });
}
window.addEventListener('scroll', checkReveal);
checkReveal();

// Back to top
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backTop.classList.add('show');
  else backTop.classList.remove('show');
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Language switcher placeholder
document.querySelectorAll('.lang-switcher span').forEach(span => {
  span.addEventListener('click', function() {
    document.querySelectorAll('.lang-switcher span').forEach(s => s.classList.remove('active'));
    this.classList.add('active');
    alert('Version linguistique démo (non fonctionnelle)');
  });
});