import handleClickCurtainMenu from "./handleClickCurtainMenu";

let clickCurtainMenuListener = new AbortController();

function clickCurtainMenu(matrix, size, transition, myAudio) {
  if (clickCurtainMenuListener.signal.aborted) {
    clickCurtainMenuListener = new AbortController();
  }

  const curtain = document.querySelector(".curtain");
  curtain.addEventListener(
    "click",
    handleClickCurtainMenu(matrix, size, transition, myAudio),
    clickCurtainMenuListener
  );
}
function removeclickCurtainMenu() {
  clickCurtainMenuListener.abort();
}
export { clickCurtainMenu, removeclickCurtainMenu };
