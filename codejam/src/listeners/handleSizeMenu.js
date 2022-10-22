import renderMatrix from "../components/renderMatrix";
import renderTimer from "../components/renderTimer";
import setWidthField from "../components/setWidthField";
import getAnimationAvailable from "../helpers/getAnimationAvailable";
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

function handleSizeMenu(size, matrix, transition, myAudio) {
  return function curriedFunc(e) {
    if (!getAnimationAvailable()) return;

    for (let i = 3; i <= 8; i++) {
      if (e.target.classList.contains(`size${i}x${i}`)) {
        removeAllEventListeners();

        size = i;

        zeroingNumberOfMoves();
        renderMoves(getNumberOfMoves());
        clearInterval(getIdSetInterval());
        renderTimer(0);

        matrix = getSolvableMatrix(size);
        renderMatrix(matrix);
        setWidthField(size);
        clickCell(matrix, transition, myAudio);
        clickNavigation(matrix, transition, size, myAudio);
        clickSizeMenu(size, matrix, transition, myAudio);
        grag(matrix, transition, myAudio);
        resizeWindow(size);
      }
    }
  };
}
export default handleSizeMenu;
