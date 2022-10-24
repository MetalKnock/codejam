import cellAnimation from "../components/cellAnimation";
import changeMatrix from "../components/changeMatrix";
import getCoordsAnimationStart from "../helpers/getCoordsAnimationStart";
import getCoordsAnimationEnd from "../helpers/getCoordsAnimationEnd";
import renderMatrix from "../components/renderMatrix";

import removeClassAvailableCells from "../components/removeClassAvailableCells";
import getIdAvailableCells from "../helpers/getIdAvailableCells";
import addClassAvailableCells from "../components/addClassAvailableCells";
import getAnimationAvailable from "../helpers/getAnimationAvailable";
import switchAnimationAvailable from "../helpers/switchAnimationAvailable";
import renderMoves from "../helpers/renderMoves";
import addOneMove from "../helpers/addOneMove";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import grag from "./grag";
import checkWin from "../helpers/checkWin";
import removeAllEventListeners from "../helpers/removeAllEventListeners";
import { clickCell } from "./clickCell";
import { clickSizeMenu } from "./clickSizeMenu";
import { clickBurgerMenu } from "./clickBurgerMenu";
import { clickNavigation } from "./clickNavigation";

function handleClickCell(
  matrix,
  transition,
  idAvailableCells,
  myAudio,
  transitionNumber
) {
  return function curriedFunc(e) {
    const id = Number(e.target.id);

    if (!getAnimationAvailable()) return;

    for (let i = 0; i <= 3; i++) {
      if (idAvailableCells.indexOf(id) === i) {
        let direction;

        if (i === 0) {
          direction = "top";
        }
        if (i === 1) {
          direction = "right";
        }
        if (i === 2) {
          direction = "bottom";
        }
        if (i === 3) {
          direction = "left";
        }

        removeAllEventListeners();
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

          let size = matrix.length;
          clickSizeMenu(size, matrix, transition, myAudio);
          clickBurgerMenu(matrix, transition, size, myAudio);
          clickNavigation(matrix, transition, size, myAudio);
          clickCell(matrix, transition, myAudio);

          addClassAvailableCells(idAvailableCells);

          addOneMove();
          renderMoves(getNumberOfMoves());
          grag(matrix, transition, myAudio);
          checkWin(matrix, transition, myAudio);
          switchAnimationAvailable();
        }, transitionNumber * 1000);
      }
    }
  };
}
export default handleClickCell;
