import handleClickNewGameYouWin from "./handleClickNewGameYouWin";

let clickNewGameYouWinListener = new AbortController();

function clickNewGameYouWin(matrix, transition, myAudio) {
  if (clickNewGameYouWinListener.signal.aborted) {
    clickNewGameYouWinListener = new AbortController();
  }
  const newGameYouWin = document.querySelector(".you-win__button");
  newGameYouWin.addEventListener(
    "click",
    handleClickNewGameYouWin(matrix, transition, myAudio),
    clickNewGameYouWinListener
  );
}
function removeClickNewGameYouWin() {
  clickNewGameYouWinListener.abort();
}
export { clickNewGameYouWin, removeClickNewGameYouWin };
