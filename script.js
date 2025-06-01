const pressBtn = document.getElementById('pressBtn');
const timer = document.getElementById('timer');
const message = document.getElementById('message');
const alarmSound = document.getElementById('alarmSound');

function startSequence() {
  pressBtn.classList.add('hidden');
  timer.classList.remove('hidden');
  timer.classList.add('show');

  let countdown = 3;
  timer.textContent = `Timer: ${countdown} seconds`;

  const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      timer.textContent = `Timer: ${countdown} seconds`;
    } else {
      clearInterval(interval);
      timer.classList.remove('show');
      timer.classList.add('hidden');

      // Show final message
      message.classList.remove('hidden');
      message.classList.add('show', 'bounce');
      message.textContent = 'Dr Sho just Stole Everything. Game Over';
      message.style.color = '#ff3333';
      message.style.textShadow = '0 0 20px #ff3333';

      // Play sound effect
      alarmSound.play();

      // After 10 seconds, reset to initial state
      setTimeout(() => {
        message.classList.remove('show', 'bounce');
        message.classList.add('hidden');
        pressBtn.classList.remove('hidden');
      }, 3000);
    }
  }, 1000);
}

// Event listener for button
pressBtn.addEventListener('click', startSequence);

// Initialize particles.js
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00ff99" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": { "enable": true, "distance": 150, "color": "#00ff99", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 2, "out_mode": "out" }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } },
    "modes": { "repulse": { "distance": 100 } }
  },
  "retina_detect": true
});
