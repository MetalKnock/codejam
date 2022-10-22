import getNumberOfMoves from "./getNumberOfMoves";

function addResultInLocalStorage(matrix) {
  const timer = document.querySelector(".timer");
  const arrTime = timer.innerHTML.split(":");
  const time = Number(arrTime[0]) * 60 + Number(arrTime[1]);
  const newResult = {
    numberOfMoves: getNumberOfMoves(),
    time: time,
    size: matrix.length,
    date: new Date(),
  };
  if (localStorage.getItem("result-list")) {
    const arrResultList = JSON.parse(localStorage.getItem("result-list"));
    arrResultList.push(newResult);
    localStorage.setItem("result-list", JSON.stringify(arrResultList));
  } else {
    const arrResultList = [];
    arrResultList.push(newResult);
    localStorage.setItem("result-list", JSON.stringify(arrResultList));
  }
}
export default addResultInLocalStorage;
