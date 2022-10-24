import renderMatrix from "../components/renderMatrix";
import renderTimer from "../components/renderTimer";
import setWidthField from "../components/setWidthField";
import getAnimationAvailable from "../helpers/getAnimationAvailable";
import getIdSetInterval from "../helpers/getIdSetInterval";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import getNumberOfMovesSave from "../helpers/getNumberOfMovesSave";
import getSolvableMatrix from "../helpers/getSolvableMatrix";
import removeAllEventListeners from "../helpers/removeAllEventListeners";
import renderMoves from "../helpers/renderMoves";
import switchAnimationAvailable from "../helpers/switchAnimationAvailable";
import zeroingNumberOfMoves from "../helpers/zeroingNumberOfMoves";
import { clickBurgerMenu } from "./clickBurgerMenu";
import { clickCell } from "./clickCell";
import { clickNavigation } from "./clickNavigation";
import { clickSizeMenu } from "./clickSizeMenu";
import grag from "./grag";
import { resizeWindow } from "./resizeWindow";

function handleClickCurtainMenu(matrix, size, transition, myAudio) {
  return function curriedFunc(e) {
    const curtain = document.querySelector(".curtain");
    const buttonNewGame = document.querySelector(".curtain__new-game");
    const buttonContinue = document.querySelector(".curtain__continue");
    if (e.target.parentElement.classList.contains("curtain__new-game")) {
      if (!getAnimationAvailable()) return;
      switchAnimationAvailable();

      buttonNewGame.style.opacity = 0;
      buttonContinue.style.opacity = 0;

      setTimeout(() => {
        removeAllEventListeners();

        matrix = getSolvableMatrix(size);

        clearInterval(getIdSetInterval());
        renderTimer(0);
        zeroingNumberOfMoves();
        renderMoves(getNumberOfMoves());
        renderMatrix(matrix);
        setWidthField(size);
        clickCell(matrix, transition, myAudio);
        grag(matrix, transition, myAudio);
        clickNavigation(matrix, transition, size, myAudio);
        clickSizeMenu(size, matrix, transition, myAudio);
        clickBurgerMenu(matrix, transition, size, myAudio);
        resizeWindow(size);
        switchAnimationAvailable();
        curtain.style.display = "none";
      }, 1000);
    }
    if (e.target.parentElement.classList.contains("curtain__continue")) {
      if (localStorage.getItem("atLeastOneSave") === null) {
        return;
      }
      if (!getAnimationAvailable()) return;
      switchAnimationAvailable();

      buttonNewGame.style.opacity = 0;
      buttonContinue.style.opacity = 0;

      setTimeout(() => {
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
        grag(matrix, transition, myAudio);
        clickNavigation(matrix, transition, size, myAudio);
        clickSizeMenu(size, matrix, transition, myAudio);
        clickBurgerMenu(matrix, transition, size, myAudio);
        // resizeWindow(size);
        switchAnimationAvailable();
        curtain.style.display = "none";
      }, 1000);
    }
  };
}
export default handleClickCurtainMenu;
