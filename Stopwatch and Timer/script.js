
let countdownInterval;
let countdownTime = 5 * 60;
let countdownRunning = false;

function startCountdown() {
  if (!countdownRunning) {
    countdownInterval = setInterval(updateCountdown, 1000);
    countdownRunning = true;
  }
}

function updateCountdown() {
  const countdownDisplay = document.getElementById("countdown");
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  countdownDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  countdownTime--;

  if (countdownTime < 0) {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "Time's up!";
    countdownRunning = false;
  }
}

function pauseCountdown() {
  clearInterval(countdownInterval);
  countdownRunning = false;
}

function restartCountdown() {
  clearInterval(countdownInterval);
  countdownTime = 5 * 60;
  countdownRunning = false;
  updateCountdown();
}

// Stopwatch functions (similar to countdown)

let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    stopwatchRunning = true;
  }
}

function updateStopwatch() {
  const stopwatchDisplay = document.getElementById("stopwatch");
  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;
  stopwatchDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  stopwatchTime++;
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function restartStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  stopwatchRunning = false;
  updateStopwatch();
}
