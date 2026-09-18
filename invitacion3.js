// Hojas cayendo
const leafEmojis = ['🍃','🌿','🍂'];
for(let i=0;i<24;i++){
  const l = document.createElement('div');
  l.classList.add('leaf');
  l.textContent = leafEmojis[Math.floor(Math.random()*leafEmojis.length)];
  l.style.left = Math.random()*100 + 'vw';
  l.style.animationDuration = (6 + Math.random()*5) + 's';
  l.style.animationDelay = (Math.random()*8) + 's';
  l.style.fontSize = (18 + Math.random()*14) + 'px';
  document.body.appendChild(l);
}

// Palmeras de fondo
const palmPositions = [4, 18, 78, 92];
palmPositions.forEach((pos, i) => {
  const p = document.createElement('div');
  p.classList.add('palm');
  p.textContent = '🌴';
  p.style.left = pos + 'vw';
  p.style.fontSize = (60 + (i % 2) * 30) + 'px';
  document.body.appendChild(p);
});

// Dinos de fondo (decorativos, quietos, en las esquinas)
const bgDinos = [
  { src:'img/braquiosaurio.png', left:'-3vw', width:170 },
  { src:'img/parasaurolophus.png', left:'75vw', width:140 }
];
bgDinos.forEach(d => {
  const b = document.createElement('img');
  b.classList.add('dino-bg');
  b.src = d.src;
  b.alt = '';
  b.style.left = d.left;
  b.style.width = d.width + 'px';
  document.body.appendChild(b);
});

// Dino caminando de un lado a otro POR ENCIMA de la tarjeta (imagen)
const cardEl = document.querySelector('.card');

const dinoWalk = document.createElement('img');
dinoWalk.classList.add('dino-walk');
dinoWalk.src = 'img/estegosaurio.png';
dinoWalk.alt = 'Dinosaurio caminando';
cardEl.appendChild(dinoWalk);

// Pterodáctilo volando POR ENCIMA de la tarjeta (imagen)
const dinoFly = document.createElement('img');
dinoFly.classList.add('dino-fly');
dinoFly.src = 'img/pterodactilo.png';
dinoFly.alt = 'Pterodáctilo volando';
cardEl.appendChild(dinoFly);

// RSVP -> abre WhatsApp con mensaje de confirmación al número del festejo
const WHATSAPP_NUMBER = '528331819672'; // 833 181 96 72 con lada de México (52)
const WHATSAPP_MESSAGE = 'Confirmo mi asistencia';

const btn = document.getElementById('rsvpBtn');
const msg = document.getElementById('confirmMsg');
btn.addEventListener('click', () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  window.open(url, '_blank');

  msg.style.display = 'block';
  btn.textContent = '¡Confirmado! ✅';
  btn.disabled = true;
  btn.style.opacity = '0.85';
  btn.style.cursor = 'default';
});
