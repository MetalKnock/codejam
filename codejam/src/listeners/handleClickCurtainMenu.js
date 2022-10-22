import renderMatrix from "../components/renderMatrix";
import renderTimer from "../components/renderTimer";
import setWidthField from "../components/setWidthField";
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

function handleClickCurtainMenu(matrix, size, transition, myAudio) {
  return function curriedFunc(e) {
    const curtain = document.querySelector(".curtain");
    if (e.target.classList.contains("curtain__new-game")) {
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
        clickNavigation(matrix, transition, size, myAudio);
        clickSizeMenu(size, matrix, transition, myAudio);
        grag(matrix, transition, myAudio);
        resizeWindow(size);
        curtain.style.display = "none";
      }, 1000);
    }
    if (e.target.classList.contains("curtain__continue")) {
      if (localStorage.getItem("atLeastOneSave") === null) {
        return;
      }
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
        clickNavigation(matrix, transition, size, myAudio);
        clickSizeMenu(size, matrix, transition, myAudio);
        grag(matrix, transition, myAudio);
        resizeWindow(size);
        curtain.style.display = "none";
      }, 1000);
    }
  };
}
export default handleClickCurtainMenu;
