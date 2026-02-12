// Messages
const messages = {
  7: { title: "Rose Day 🌹", msg: "If I had one rose for every smile you gave me, I’d be lost in a garden of you." },
  8: { title: "Propose Day 💍", msg: "I choose you today, tomorrow, and every day after that." },
  9: { title: "Chocolate Day 🍫", msg: "Life is sweeter with chocolate… and perfect with you." },
  10:{ title: "Teddy Day 🧸", msg: "If comfort had a face, it would look like you." },
  11:{ title: "Promise Day 🤍", msg: "I promise to stand with you in every season of life." },
  12:{ title: "Hug Day 🤗", msg: "A hug from you is my favorite safe place." },
  13:{ title: "Kiss Day 💋", msg: "Every kiss from you feels like home." },
  14:{ title: "Valentine’s Day ❤️", msg: "You’re not just my Valentine — you’re my favorite part of every day." }
};

document.addEventListener("DOMContentLoaded", () => {
  // Popup logic
  document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", () => {
      const d = day.getAttribute("data-day");
      document.getElementById("popup-title").innerText = messages[d].title;
      document.getElementById("popup-msg").innerText = messages[d].msg;
      document.getElementById("popup").style.display = "flex";
    });
  });

  document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
  });

  // Background Music
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("musicBtn");

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "⏸ Pause Music";
    } else {
      music.pause();
      btn.textContent = "▶ Play Music";
    }
  });

  // Confetti
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 2,
      speed: Math.random() * 2 + 0.6,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawConfetti);
  }
  drawConfetti();
});
