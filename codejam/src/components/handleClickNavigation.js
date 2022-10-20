import addClassAvailableCells from "./addClassAvailableCells";
import renderMatrix from "./renderMatrix";
import getIdAvailableCells from "../helpers/getIdAvailableCells";
import clickCell from "../listeners/clickCell";
import myAudioResource from "../assets/usb-slide-back-106529.mp3";

function handleClickNavigation(matrix, animationAvailable, transition) {
  return function curriedFunc(e) {
    console.log(`animation available:${animationAvailable}`);
    if (!animationAvailable) return;
    if (e.target.classList.contains("start")) {
      console.log("start");
    }
    if (e.target.classList.contains("save")) {
      localStorage.setItem("matrix", JSON.stringify(matrix));
    }
    if (e.target.classList.contains("sound")) {
      let sound = JSON.parse(localStorage.getItem("sound"));
      sound = !sound;
      localStorage.removeItem("sound");
      localStorage.setItem("sound", sound);
      const soundButton = document.querySelector(".sound");
      if (!sound) {
        soundButton.classList.add("sound--off");
      } else {
        soundButton.classList.remove("sound--off");
      }
    }
    if (e.target.classList.contains("load")) {
      // debugger;
      const cells = document.querySelector(".field__list");
      const transitionNumber = transition.slice(0, -1);
      const myAudio = new Audio(myAudioResource);

      console.log(
        matrix,
        animationAvailable,
        transition,
        idAvailableCells,
        myAudio,
        transitionNumber
      );
      let cellsClone = cells.cloneNode(true);
      cells.parentNode.replaceChild(cellsClone, cells);

      const matrix = JSON.parse(localStorage.getItem("matrix"));
      renderMatrix(matrix);
      let idAvailableCells = getIdAvailableCells(matrix);
      addClassAvailableCells(idAvailableCells);
      clickCell(matrix, animationAvailable, transition);
    }
  };
}
export default handleClickNavigation;
