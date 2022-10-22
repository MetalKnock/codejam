import addClassAvailableCells from "../components/addClassAvailableCells";
import renderMatrix from "../components/renderMatrix";
import convertArrayInMatrix from "../helpers/convertArrayInMatrix";
import convertMatrixInOneDimensionalArray from "../helpers/convertMatrixInOneDimensionalArray";
import getIdAvailableCells from "../helpers/getIdAvailableCells";
import addOneMove from "../helpers/addOneMove";
import renderMoves from "../helpers/renderMoves";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import { clickCell, removeClickCell } from "./clickCell";
import checkWin from "../helpers/checkWin";

function grag(matrix, transition, myAudio) {
  const cellsAvailable = document.querySelectorAll(".cell--available");
  const cellActive = document.querySelector(".cell--active");
  const field = document.querySelector(".field__list");

  cellActive.ondragover = allowDrop;
  cellActive.ondrop = drop;
  for (let i = 0; i < cellsAvailable.length; i++) {
    cellsAvailable[i].ondragstart = drag;
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function drag(e) {
    e.dataTransfer.setData("id", e.target.id);
  }

  function drop(e) {
    let itemId = e.dataTransfer.getData("id");

    const matrixInArray = convertMatrixInOneDimensionalArray(matrix);

    const indexItemId = matrixInArray.indexOf(Number(itemId));
    const indexZero = matrixInArray.indexOf(0);
    const memoryMatrix = matrixInArray[indexItemId];

    matrixInArray[indexItemId] = matrixInArray[indexZero];
    matrixInArray[indexZero] = memoryMatrix;
    matrix = convertArrayInMatrix(matrixInArray);

    removeClickCell();
    renderMatrix(matrix);
    const IdAvailableCells = getIdAvailableCells(matrix);
    addClassAvailableCells(IdAvailableCells);
    clickCell(matrix, transition, myAudio);

    if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();
    addOneMove();
    renderMoves(getNumberOfMoves());
    checkWin(matrix);
    grag(matrix, transition, myAudio);
  }
}
export default grag;
