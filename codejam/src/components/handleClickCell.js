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

    if (idAvailableCells.indexOf(id) === 0) {
      switchAnimationAvailable();

      cellAnimation(id, "top", transition);
      removeClassAvailableCells();
      if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "top"),
          getCoordsAnimationEnd(matrix, "top")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        addClassAvailableCells(idAvailableCells);

        switchAnimationAvailable();
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 1) {
      switchAnimationAvailable();

      cellAnimation(id, "right", transition);
      removeClassAvailableCells();
      if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "right"),
          getCoordsAnimationEnd(matrix, "right")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        addClassAvailableCells(idAvailableCells);

        switchAnimationAvailable();
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 2) {
      switchAnimationAvailable();

      cellAnimation(id, "bottom", transition);
      removeClassAvailableCells();
      if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "bottom"),
          getCoordsAnimationEnd(matrix, "bottom")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        addClassAvailableCells(idAvailableCells);

        switchAnimationAvailable();
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 3) {
      switchAnimationAvailable();

      cellAnimation(id, "left", transition);
      removeClassAvailableCells();
      if (JSON.parse(localStorage.getItem("sound"))) myAudio.play();

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "left"),
          getCoordsAnimationEnd(matrix, "left")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        addClassAvailableCells(idAvailableCells);

        switchAnimationAvailable();
      }, transitionNumber * 1000);
    }
  };
}
export default handleClickCell;
