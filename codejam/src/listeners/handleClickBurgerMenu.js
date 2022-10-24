import { clickBurgerMenuButton } from "./clickBurgerMenuButton";

function handleClickBurgerMenu(matrix, transition, myAudio, transitionNumber) {
  return function curriedFunc(e) {
    const menu = document.querySelector(".field__menu");
    menu.style.display = "flex";
    clickBurgerMenuButton(matrix, transition, myAudio, transitionNumber);
  };
}
export default handleClickBurgerMenu;
