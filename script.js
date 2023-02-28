// Define variables
let stopwatch = document.getElementById('stopwatch');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let startTime;
let elapsedTime = 0;
let interval;

// Format time as HH:MM:SS
function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  return (
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)
  );
}

// Update stopwatch
function update() {
  elapsedTime = Date.now() - startTime;
  stopwatch.textContent = formatTime(elapsedTime);
}

// Start stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  interval = setInterval(update, 10);
}

// Stop stopwatch
function stop() {
  clearInterval(interval);
  elapsedTime = Date.now() - startTime;
}

// Reset stopwatch
function reset() {
  clearInterval(interval);
  elapsedTime = 0;
  stopwatch.textContent = '00:00:00';
}

// Event listeners
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
