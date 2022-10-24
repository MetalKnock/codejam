import handleClickBurgerMenuButton from "./handleClickBurgerMenuButton";

let clickBurgerMenuButtonListener = new AbortController();

function clickBurgerMenuButton(matrix, transition, size, myAudio) {
  if (clickBurgerMenuButtonListener.signal.aborted) {
    clickBurgerMenuButtonListener = new AbortController();
  }
  const menu = document.querySelector(".field__menu");
  menu.addEventListener(
    "click",
    handleClickBurgerMenuButton(matrix, transition, size, myAudio),
    clickBurgerMenuButtonListener
  );
}
function removeClickBurgerMenuButton() {
  clickBurgerMenuButtonListener.abort();
}
export { clickBurgerMenuButton, removeClickBurgerMenuButton };
