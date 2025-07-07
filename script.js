/* ----- NUEVA LISTA DE MENSAJES ----- */
const messages = [
  { text: "Nuestra historia es infinita",   emoji: "♾️" },
  { text: "Gracias por existir",            emoji: "🙏" },
  { text: "Contigo todo es mejor",          emoji: "😊" },
  { text: "Mi corazón late por ti",         emoji: "💓" },
  { text: "Eres mi alegría diaria",         emoji: "😄" },
  { text: "Tú y yo por siempre",            emoji: "👫" },
  { text: "Juntos por siempre",             emoji: "🔒" },
  { text: "Eres mi razón de ser",           emoji: "❤️" },
  { text: "Cada día te quiero más",         emoji: "💕" },
  { text: "Nuestro amor es eterno",         emoji: "🌹" },
  { text: "Eres mi todo",                   emoji: "🌟" },
  { text: "Siempre a tu lado",              emoji: "🤝" },
  { text: "Te amo muchisimo amor",          emoji: "💖" },
  { text: "Eres mi sol y mi luna",          emoji: "☀️🌙" },
  { text: "Te adoro",                       emoji: "🥰" },
  { text: "Eres mi persona favorita",       emoji: "🫶" },
  { text: "Siempre pienso en ti",           emoji: "💭" },
  { text: "Tu sonrisa me ilumina",          emoji: "🌟" },
  { text: "Eres lo mejor que me ha pasado", emoji: "🎁" },
  { text: "Cada momento contigo es mágico", emoji: "✨" },
];

/* ----- COLORES DE CORAZÓN ----- */
const colors = [
  "#FF1493", "#FF69B4", "#FF6EC7", "#FF4C4C",
  "#FF3366", "#D936A8", "#FF0033", "#B200B2"
];

/* ===== CORAZONES (≈ 60 por segundo) ===== */
setInterval(createHeart, 17);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.background = color;
  heart.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;

  const angle  = Math.random() * 2 * Math.PI;
  const radius = Math.random() * 700 + 400;
  heart.style.setProperty("--x", `${Math.cos(angle) * radius}px`);
  heart.style.setProperty("--y", `${Math.sin(angle) * radius}px`);

  heart.style.left = `${innerWidth / 2}px`;
  heart.style.top  = `${innerHeight / 2}px`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1300);
}

/* ===== MENSAJES AUTOMÁTICOS ===== */

/* Ajusta este valor ms si quieres otra frecuencia */
const MESSAGE_INTERVAL = 900;      // 1.5 s

setInterval(spawnMessage, MESSAGE_INTERVAL);

function spawnMessage() {
  const { text, emoji } = messages[Math.floor(Math.random() * messages.length)];

  const msg = document.createElement("div");
  msg.className = "message";

  /* Emoji al final */
  const span = document.createElement("span");
  span.textContent = `${text} ${emoji}`;
  msg.appendChild(span);

  /* Posición aleatoria dentro del 70 % central */
  const marginX = innerWidth * 0.15;
  const marginY = innerHeight * 0.15;
  msg.style.left = `${Math.random() * (innerWidth  - marginX * 2) + marginX}px`;
  msg.style.top  = `${Math.random() * (innerHeight - marginY * 2) + marginY}px`;

  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000); // coincide con animación de 3 s
}
