import handleClickCloseResult from "./handleClickCloseResult";

let clickCloseResultListener = new AbortController();

function clickCloseResult(matrix, size, transition, myAudio) {
  if (clickCloseResultListener.signal.aborted) {
    clickCloseResultListener = new AbortController();
  }
  const closeResult = document.querySelector(".resultl__close");
  closeResult.addEventListener(
    "click",
    handleClickCloseResult(matrix, size, transition, myAudio),
    clickCloseResultListener
  );
}
function removeClickCloseResult() {
  clickCloseResultListener.abort();
}
export { clickCloseResult, removeClickCloseResult };
