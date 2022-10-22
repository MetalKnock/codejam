import handleSizeMenu from "./handleSizeMenu";

let clickSizeMenuListener = new AbortController();

function clickSizeMenu(size, matrix, transition, myAudio) {
  if (clickSizeMenuListener.signal.aborted) {
    clickSizeMenuListener = new AbortController();
  }
  const sizeMenu = document.querySelector(".size-menu");
  sizeMenu.addEventListener(
    "click",
    handleSizeMenu(size, matrix, transition, myAudio),
    clickSizeMenuListener
  );
}
function removeClickSizeMenu() {
  clickSizeMenuListener.abort();
}
export { clickSizeMenu, removeClickSizeMenu };
