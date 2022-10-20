import getIdAvailableCells from "../helpers/getIdAvailableCells";
import addClassAvailableCells from "../components/addClassAvailableCells";
import myAudioResource from "../assets/usb-slide-back-106529.mp3";
import handleClickCell from "../components/handleClickCell";

function clickCell(matrix, animationAvailable, transition) {
  const cells = document.querySelector(".field__list");

  let idAvailableCells = getIdAvailableCells(matrix);

  addClassAvailableCells(idAvailableCells);
  const transitionNumber = transition.slice(0, -1);
  const myAudio = new Audio(myAudioResource);
  // debugger;

  console.log(
    matrix,
    animationAvailable,
    transition,
    idAvailableCells,
    myAudio,
    transitionNumber
  );
  cells.addEventListener(
    "click",
    handleClickCell(
      matrix,
      animationAvailable,
      transition,
      idAvailableCells,
      myAudio,
      transitionNumber
    )
  );
}
export default clickCell;
