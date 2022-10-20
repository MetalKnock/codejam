import cellAnimation from "../components/cellAnimation";
import changeMatrix from "../components/changeMatrix";
import getCoordsAnimationStart from "../helpers/getCoordsAnimationStart";
import getCoordsAvailableCells from "../helpers/getCoordsAvailableCells";
import getIdAvailableCells from "../helpers/getIdAvailableCells";

import getCoordsAnimationEnd from "../helpers/getCoordsAnimationEnd";
import renderMatrix from "../components/renderMatrix";

function clickCell(matrix, animationAvailable, transition) {
  const cell = document.querySelector(".field__list");
  let idAvailableCells = getIdAvailableCells(matrix);
  const transitionNumber = transition.slice(0, -1);

  cell.addEventListener("click", (e) => {
    const id = Number(e.target.id);

    if (!animationAvailable) return;

    if (idAvailableCells.indexOf(id) === 0) {
      animationAvailable = false;
      cellAnimation(id, "top", transition);

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "top"),
          getCoordsAnimationEnd(matrix, "top")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        console.log(matrix);
        animationAvailable = true;
        console.log("animation end");
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 1) {
      animationAvailable = false;
      cellAnimation(id, "right", transition);

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "right"),
          getCoordsAnimationEnd(matrix, "right")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        console.log(matrix);
        animationAvailable = true;
        console.log("animation end");
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 2) {
      animationAvailable = false;
      cellAnimation(id, "bottom", transition);

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "bottom"),
          getCoordsAnimationEnd(matrix, "bottom")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        console.log(matrix);
        animationAvailable = true;
        console.log("animation end");
      }, transitionNumber * 1000);
    }

    if (idAvailableCells.indexOf(id) === 3) {
      animationAvailable = false;
      cellAnimation(id, "left", transition);

      setTimeout(() => {
        changeMatrix(
          matrix,
          getCoordsAnimationStart(matrix, "left"),
          getCoordsAnimationEnd(matrix, "left")
        );
        idAvailableCells = getIdAvailableCells(matrix);
        renderMatrix(matrix);
        console.log(matrix);
        animationAvailable = true;
        console.log("animation end");
      }, transitionNumber * 1000);
    }
  });
}
export default clickCell;
