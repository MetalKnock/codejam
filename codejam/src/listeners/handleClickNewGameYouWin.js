import renderMatrix from "../components/renderMatrix";
import renderTimer from "../components/renderTimer";
import setWidthField from "../components/setWidthField";
import getIdSetInterval from "../helpers/getIdSetInterval";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import getSolvableMatrix from "../helpers/getSolvableMatrix";
import removeAllEventListeners from "../helpers/removeAllEventListeners";
import renderMoves from "../helpers/renderMoves";
import zeroingNumberOfMoves from "../helpers/zeroingNumberOfMoves";
import { clickCell } from "./clickCell";
import { clickNavigation } from "./clickNavigation";
import { clickSizeMenu } from "./clickSizeMenu";
import grag from "./grag";
import { resizeWindow } from "./resizeWindow";

function handleClickNewGameYouWin(matrix, size, transition, myAudio) {
  return function curriedFunc(e) {
    const curtain = document.querySelector(".curtain");
    const youWin = document.querySelector(".field__you-win");
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
    youWin.style.display = "none";
  };
}
export default handleClickNewGameYouWin;
