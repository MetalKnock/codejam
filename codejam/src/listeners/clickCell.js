import getIdAvailableCells from "../helpers/getIdAvailableCells";
import addClassAvailableCells from "../components/addClassAvailableCells";
import handleClickCell from "./handleClickCell";

let clickCellListener = new AbortController();

function clickCell(matrix, transition, myAudio) {
  if (clickCellListener.signal.aborted) {
    clickCellListener = new AbortController();
  }

  const cells = document.querySelector(".field__list");

  let idAvailableCells = getIdAvailableCells(matrix);

  addClassAvailableCells(idAvailableCells);
  const transitionNumber = transition.slice(0, -1);

  cells.addEventListener(
    "click",
    handleClickCell(
      matrix,
      transition,
      idAvailableCells,
      myAudio,
      transitionNumber
    ),
    clickCellListener
  );
}

function removeClickCell() {
  clickCellListener.abort();
}
export { clickCell, removeClickCell };
