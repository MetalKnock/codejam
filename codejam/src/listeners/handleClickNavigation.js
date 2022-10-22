import renderMatrix from "../components/renderMatrix";
import renderTimer from "../components/renderTimer";
import setWidthField from "../components/setWidthField";
import getAnimationAvailable from "../helpers/getAnimationAvailable";
import getCurrentTimeFromTimer from "../helpers/getCurrentTimeFromTimer";
import getIdSetInterval from "../helpers/getIdSetInterval";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import getNumberOfMovesSave from "../helpers/getNumberOfMovesSave";
import getSolvableMatrix from "../helpers/getSolvableMatrix";
import removeAllEventListeners from "../helpers/removeAllEventListeners";
import renderMoves from "../helpers/renderMoves";
import zeroingNumberOfMoves from "../helpers/zeroingNumberOfMoves";
import { clickCell } from "./clickCell";
import { clickNavigation } from "./clickNavigation";
import { clickSizeMenu } from "./clickSizeMenu";
import grag from "./grag";
import { resizeWindow } from "./resizeWindow";

function handleClickNavigation(matrix, transition, size, myAudio) {
  return function curriedFunc(e) {
    if (!getAnimationAvailable()) return;

    if (e.target.classList.contains("restart")) {
      removeAllEventListeners();

      matrix = getSolvableMatrix(size);

      clearInterval(getIdSetInterval());
      renderTimer(0);
      zeroingNumberOfMoves();
      renderMoves(getNumberOfMoves());
      renderMatrix(matrix);
      setWidthField(size);
      clickCell(matrix, transition, myAudio);
      clickNavigation(matrix, transition, size, myAudio);
      clickSizeMenu(size, matrix, transition, myAudio);
      grag(matrix, transition, myAudio);
      resizeWindow(size);
    }

    if (e.target.classList.contains("save")) {
      localStorage.setItem("matrix", JSON.stringify(matrix));
      localStorage.setItem("numberOfMovesSave", getNumberOfMoves());
      localStorage.setItem("size", JSON.stringify(size));
      localStorage.setItem("time", JSON.stringify(getCurrentTimeFromTimer()));
      localStorage.setItem("atLeastOneSave", JSON.parse(true));
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
      removeAllEventListeners();

      size = JSON.parse(localStorage.getItem("size"));
      matrix = JSON.parse(localStorage.getItem("matrix"));

      clearInterval(getIdSetInterval());
      renderTimer(localStorage.getItem("time"));
      localStorage.setItem("numberOfMoves", getNumberOfMovesSave());
      renderMoves(getNumberOfMoves());

      renderMatrix(matrix);
      setWidthField(size);
      clickCell(matrix, transition, myAudio);
      clickNavigation(matrix, transition, size, myAudio);
      clickSizeMenu(size, matrix, transition, myAudio);
      grag(matrix, transition, myAudio);
      resizeWindow(size);
    }
    if (e.target.classList.contains("result")) {
      const resultList = document.querySelector(".field__result-list");
      resultList.style.display = "block";
    }
  };
}
export default handleClickNavigation;
