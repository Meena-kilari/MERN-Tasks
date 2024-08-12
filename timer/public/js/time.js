let timer = document.getElementById('timer');
let timeLeft = 3600; // 1 hour in seconds
let interval = setInterval(() => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timer.textContent = `Time: ${minutes} : ${seconds} `;
  timeLeft--;
  if (timeLeft === 0) {
    clearInterval(interval);
    // You can add code here to handle the case when the timer reaches 0
  }
}, 1000);