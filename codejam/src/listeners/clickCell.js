import getIdAvailableCells from "../helpers/getIdAvailableCells";
import addClassAvailableCells from "../components/addClassAvailableCells";
import myAudioResource from "../assets/usb-slide-back-106529.mp3";
import handleClickCell from "../components/handleClickCell";

function clickCell(matrix, transition) {
  const cells = document.querySelector(".field__list");

  let idAvailableCells = getIdAvailableCells(matrix);

  addClassAvailableCells(idAvailableCells);
  const transitionNumber = transition.slice(0, -1);
  const myAudio = new Audio(myAudioResource);

  cells.addEventListener(
    "click",
    handleClickCell(
      matrix,
      transition,
      idAvailableCells,
      myAudio,
      transitionNumber
    )
  );
}
export default clickCell;
