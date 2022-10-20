import cellAnimation from "../components/cellAnimation";
import changeMatrix from "../components/changeMatrix";
import getCoordsAnimationStart from "../helpers/getCoordsAnimationStart";
import getCoordsAnimationEnd from "../helpers/getCoordsAnimationEnd";
import renderMatrix from "../components/renderMatrix";

import removeClassAvailableCells from "../components/removeClassAvailableCells";
import getIdAvailableCells from "../helpers/getIdAvailableCells";
import addClassAvailableCells from "../components/addClassAvailableCells";

function handleClickCell(
  matrix,
  animationAvailable,
  transition,
  idAvailableCells,
  myAudio,
  transitionNumber
) {
  return function curriedFunc(e) {
    console.log("this is a big function");
    const id = Number(e.target.id);

    if (!animationAvailable) return;

    if (idAvailableCells.indexOf(id) === 0) {
      animationAvailable = false;
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

        animationAvailable = true;
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 1) {
      animationAvailable = false;
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

        animationAvailable = true;
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 2) {
      animationAvailable = false;
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

        animationAvailable = true;
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 3) {
      animationAvailable = false;
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

        animationAvailable = true;
      }, transitionNumber * 1000);
    }
  };
}
export default handleClickCell;
