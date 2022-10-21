import addOneMove from "../helpers/addOneMove";
import getCoordsAnimationEnd from "../helpers/getCoordsAnimationEnd";
import getCoordsAnimationStart from "../helpers/getCoordsAnimationStart";
import getIdAvailableCells from "../helpers/getIdAvailableCells";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import renderMoves from "../helpers/renderMoves";
import switchAnimationAvailable from "../helpers/switchAnimationAvailable";
import addClassAvailableCells from "./addClassAvailableCells";
import cellAnimation from "./cellAnimation";
import changeMatrix from "./changeMatrix";
import removeClassAvailableCells from "./removeClassAvailableCells";
import renderMatrix from "./renderMatrix";

function innerHandleClickCell(
  matrix,
  transition,
  idAvailableCells,
  myAudio,
  transitionNumber,
  id
) {
  let direction;
  console.log(idAvailableCells);
  switch (idAvailableCells.indexOf(id)) {
    case 0:
      direction = "top";
      break;
    case 1:
      direction = "right";
      break;
    case 2:
      direction = "bottom";
      break;
    case 3:
      direction = "left";
      break;
  }
  //   if (idAvailableCells.indexOf(id) === 0) {
  switchAnimationAvailable();

  cellAnimation(id, direction, transition);
  removeClassAvailableCells();
  if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();

  setTimeout(() => {
    changeMatrix(
      matrix,
      getCoordsAnimationStart(matrix, direction),
      getCoordsAnimationEnd(matrix, direction)
    );
    idAvailableCells = getIdAvailableCells(matrix);
    renderMatrix(matrix);
    addClassAvailableCells(idAvailableCells);

    addOneMove();
    renderMoves(getNumberOfMoves());

    switchAnimationAvailable();
  }, transitionNumber * 1000);
  //   }
}
export default innerHandleClickCell;
