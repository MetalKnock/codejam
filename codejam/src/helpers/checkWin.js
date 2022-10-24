import { clickNewGameYouWin } from "../listeners/clickNewGameYouWin";
import addResultInLocalStorage from "./addResultInLocalStorage";
import convertMatrixInOneDimensionalArray from "./convertMatrixInOneDimensionalArray";
import getIdSetInterval from "./getIdSetInterval";
import getNumberOfMoves from "./getNumberOfMoves";
import removeAllEventListeners from "./removeAllEventListeners";
import winSound1 from "../assets/win-sound.mp3";

function checkWin(matrix, transition, myAudio) {
  const matrixInArray = convertMatrixInOneDimensionalArray(matrix);

  const winningMatrix = [];
  for (let i = 1; i < matrixInArray.length; i++) {
    winningMatrix.push(i);
  }
  winningMatrix.push(0);

  let result = true;
  for (let i = 0; i < matrixInArray.length; i++) {
    if (matrixInArray[i] !== winningMatrix[i]) result = false;
  }
  // result = true;
  if (result) {
    const winSound = new Audio(winSound1);
    winSound.volume = 0.2;
    if (JSON.parse(localStorage.getItem("sound"))) winSound.play();
    clearInterval(getIdSetInterval());
    removeAllEventListeners();
    clickNewGameYouWin(matrix, transition, myAudio);
    document.querySelector(".you-win__button-left").style.opacity = 1;
    document.querySelector(".you-win__button-right").style.opacity = 1;
    document.querySelector(".you-win__button-middle").style.opacity = 1;

    const youWin = document.querySelector(".you-win");
    const timer = document.querySelector(".timer");
    const youWinText = document.querySelector(".you-win__text");

    youWin.style.display = "flex";
    const arrTime = timer.innerHTML.split(":");
    youWinText.innerHTML = `Hooray! You solved the puzzle in ${arrTime[0]}:${
      arrTime[1]
    } and ${getNumberOfMoves()} moves!`;

    addResultInLocalStorage(matrix);
  }
}
export default checkWin;
