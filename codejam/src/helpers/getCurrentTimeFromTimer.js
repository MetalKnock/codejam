function getCurrentTimeFromTimer() {
  const timer = document.querySelector(".timer");
  const arrTime = timer.innerHTML.split(":");

  const minutes = Number(arrTime[0]);
  const seconds = Number(arrTime[1]);
  return minutes * 60 + seconds;
}
export default getCurrentTimeFromTimer;
