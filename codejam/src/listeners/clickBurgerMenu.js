import handleClickBurgerMenu from "./handleClickBurgerMenu";

let clickBurgerMenuListener = new AbortController();

function clickBurgerMenu(matrix, transition, size, myAudio) {
  if (clickBurgerMenuListener.signal.aborted) {
    clickBurgerMenuListener = new AbortController();
  }
  const navigation = document.querySelector(".burger-menu");
  navigation.addEventListener(
    "click",
    handleClickBurgerMenu(matrix, transition, size, myAudio),
    clickBurgerMenuListener
  );
}
function removeClickBurgerMenu() {
  clickBurgerMenuListener.abort();
}
export { clickBurgerMenu, removeClickBurgerMenu };
