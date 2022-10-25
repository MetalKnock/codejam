import renderMatrix from "../components/renderMatrix";
import renderTimer from "../components/renderTimer";
import setWidthField from "../components/setWidthField";
import buttonEnabled from "../helpers/buttonEnabled";
import getIdSetInterval from "../helpers/getIdSetInterval";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import getSolvableMatrix from "../helpers/getSolvableMatrix";
import removeAllEventListeners from "../helpers/removeAllEventListeners";
import renderMoves from "../helpers/renderMoves";
import switchAnimationAvailable from "../helpers/switchAnimationAvailable";
import zeroingNumberOfMoves from "../helpers/zeroingNumberOfMoves";
import { clickBurgerMenu } from "./clickBurgerMenu";
import { clickCell } from "./clickCell";
import { clickNavigation } from "./clickNavigation";
import { removeClickNewGameYouWin } from "./clickNewGameYouWin";

import { clickSizeMenu } from "./clickSizeMenu";
import grag from "./grag";
import { resizeWindow } from "./resizeWindow";

function handleClickNewGameYouWin(matrix, transition, myAudio) {
  return function curriedFunc(e) {
    const curtain = document.querySelector(".curtain");
    const youWin = document.querySelector(".field__you-win");

    document.querySelector(".you-win__button-left").style.opacity = 0;
    document.querySelector(".you-win__button-middle").style.opacity = 0;
    document.querySelector(".you-win__button-right").style.opacity = 0;

    switchAnimationAvailable();
    removeClickNewGameYouWin();

    setTimeout(() => {
      let size = 4;
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
      clickBurgerMenu(matrix, transition, size, myAudio);
      grag(matrix, transition, myAudio);
      resizeWindow(size);
      switchAnimationAvailable();
      curtain.style.display = "none";
      youWin.style.display = "none";

      buttonEnabled("restart");
      buttonEnabled("save");
      document.querySelector(".sound").style.cursor = "pointer";
      buttonEnabled("load");
      buttonEnabled("result");
      buttonEnabled("burger-menu");
      for (let i = 3; i <= 8; i++) {
        buttonEnabled(`size-menu--size${i}x${i}`);
      }
    }, 1000);
  };
}
export default handleClickNewGameYouWin;
