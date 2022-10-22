function renderTimer(time, zeroTime = false) {
  const timer = document.querySelector(".timer");
  let seconds = time % 60;
  let minutes = Math.floor(time / 60) % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let currentTime = `${minutes}:${seconds}`;
  timer.innerHTML = currentTime;
  if (!zeroTime) {
    const idSetInterval = setInterval(handleRenderTimer(time), 1000);
    document.querySelector(".timer").dataset.idSetInterval = idSetInterval;
  }
}
function handleRenderTimer(time) {
  return function showTime() {
    const timer = document.querySelector(".timer");
    time++;
    let seconds = time % 60;
    let minutes = Math.floor(time / 60) % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let currentTime = `${minutes}:${seconds}`;
    timer.innerHTML = currentTime;
  };
}

export default renderTimer;
