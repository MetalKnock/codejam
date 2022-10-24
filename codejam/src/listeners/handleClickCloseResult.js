import renderTimer from "../components/renderTimer";
import getCurrentTimeFromTimer from "../helpers/getCurrentTimeFromTimer";
import switchAnimationAvailable from "../helpers/switchAnimationAvailable";
import { clickBurgerMenu } from "./clickBurgerMenu";
import { clickCell } from "./clickCell";
import { removeClickCloseResult } from "./clickCloseResult";
import { clickNavigation } from "./clickNavigation";
import { clickSizeMenu } from "./clickSizeMenu";
import grag from "./grag";
import { resizeWindow } from "./resizeWindow";

function handleClickCloseResult(matrix, size, transition, myAudio) {
  return function curriedFunc(e) {
    const resultList = document.querySelector(".field__result-list");

    document.querySelector(".resultl__close-left").style.opacity = 0;
    document.querySelector(".resultl__close-right").style.opacity = 0;
    document.querySelector(".resultl__close-middle").style.opacity = 0;

    switchAnimationAvailable();
    removeClickCloseResult();

    setTimeout(() => {
      renderTimer(getCurrentTimeFromTimer());

      clickCell(matrix, transition, myAudio);
      clickNavigation(matrix, transition, size, myAudio);
      clickSizeMenu(size, matrix, transition, myAudio);
      clickBurgerMenu(matrix, transition, size, myAudio);
      grag(matrix, transition, myAudio);
      resizeWindow(size);
      switchAnimationAvailable();
      document.querySelector(".resultl__table-date").innerHTML = "";
      document.querySelector(".resultl__table-size").innerHTML = "";
      document.querySelector(".resultl__table-moves").innerHTML = "";
      document.querySelector(".resultl__table-time").innerHTML = "";
      resultList.style.display = "none";
    }, 1000);
  };
}
export default handleClickCloseResult;
