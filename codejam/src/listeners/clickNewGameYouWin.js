import handleClickNewGameYouWin from "./handleClickNewGameYouWin";

let clickNewGameYouWinListener = new AbortController();

function clickNewGameYouWin(matrix, size, transition, myAudio) {
  if (clickNewGameYouWinListener.signal.aborted) {
    clickNewGameYouWinListener = new AbortController();
  }
  const newGameYouWin = document.querySelector(".you-win__button-new-game");
  newGameYouWin.addEventListener(
    "click",
    handleClickNewGameYouWin(matrix, size, transition, myAudio),
    clickNewGameYouWinListener
  );
}
function removeclickNewGameYouWin() {
  clickNewGameYouWinListener.abort();
}
export { clickNewGameYouWin, removeclickNewGameYouWin };
