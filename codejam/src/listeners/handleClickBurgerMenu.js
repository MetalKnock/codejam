import buttonDisabled from "../helpers/buttonDisabled";
import { clickBurgerMenuButton } from "./clickBurgerMenuButton";

function handleClickBurgerMenu(matrix, transition, myAudio, transitionNumber) {
  const menu = document.querySelector(".field__menu");
  return function curriedFunc(e) {
    if (
      getComputedStyle(document.querySelector(".field__menu")).display ===
      "none"
    ) {
      menu.style.display = "flex";

      clickBurgerMenuButton(matrix, transition, myAudio, transitionNumber);
    } else {
      menu.style.display = "none";
    }
  };
}
export default handleClickBurgerMenu;
