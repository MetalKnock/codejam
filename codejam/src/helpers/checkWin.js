import addResultInLocalStorage from "./addResultInLocalStorage";
import convertMatrixInOneDimensionalArray from "./convertMatrixInOneDimensionalArray";
import getNumberOfMoves from "./getNumberOfMoves";

function checkWin(matrix) {
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
