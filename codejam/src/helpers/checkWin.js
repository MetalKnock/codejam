import { clickNewGameYouWin } from "../listeners/clickNewGameYouWin";
import addResultInLocalStorage from "./addResultInLocalStorage";
import convertMatrixInOneDimensionalArray from "./convertMatrixInOneDimensionalArray";
import getIdSetInterval from "./getIdSetInterval";
import getNumberOfMoves from "./getNumberOfMoves";
import removeAllEventListeners from "./removeAllEventListeners";
import winSound1 from "../assets/win-sound.mp3";
import buttonDisabled from "./buttonDisabled";

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
  if (result) {
    buttonDisabled("restart");
    buttonDisabled("save");
    document.querySelector(".sound").style.cursor = "not-allowed";
    buttonDisabled("load");
    buttonDisabled("result");
    buttonDisabled("burger-menu");
    for (let i = 3; i <= 8; i++) {
      buttonDisabled(`size-menu--size${i}x${i}`);
    }

    const winSound = new Audio(winSound1);
    winSound.volume = 0.2;
    let listener = new AbortController();
    if (JSON.parse(localStorage.getItem("sound"))) {
      window.addEventListener(
        "mouseover",
        () => {
          winSound.play();
          listener.abort();
        },
        listener
      );
    }
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
