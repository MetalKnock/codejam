import addClassAvailableCells from "./addClassAvailableCells";
import renderMatrix from "./renderMatrix";
import getIdAvailableCells from "../helpers/getIdAvailableCells";
import clickCell from "../listeners/clickCell";
import myAudioResource from "../assets/usb-slide-back-106529.mp3";
import getAnimationAvailable from "../helpers/getAnimationAvailable";
import deleteClickCell from "../helpers/deleteClickCell";
import getSolvableMatrix from "../helpers/getSolvableMatrix";

function handleClickNavigation(matrix, transition, size) {
  return function curriedFunc(e) {
    if (!getAnimationAvailable()) return;

    if (e.target.classList.contains("restart")) {
      deleteClickCell();
      matrix = getSolvableMatrix(size);
      renderMatrix(matrix);
      clickCell(matrix, transition);
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
      const transitionNumber = transition.slice(0, -1);
      const myAudio = new Audio(myAudioResource);

      deleteClickCell();

      const matrix = JSON.parse(localStorage.getItem("matrix"));
      renderMatrix(matrix);
      let idAvailableCells = getIdAvailableCells(matrix);
      addClassAvailableCells(idAvailableCells);
      clickCell(matrix, transition);
    }
  };
}
export default handleClickNavigation;
