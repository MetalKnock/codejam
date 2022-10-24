import handleHoverButtonsSoundPlay from "./handleHoverButtonsSoundPlay";

let hoverButtonsSoundPlayListener = new AbortController();

function hoverButtonsSoundPlay() {
  if (hoverButtonsSoundPlayListener.signal.aborted) {
    hoverButtonsSoundPlayListener = new AbortController();
  }
  const container = document.querySelector(".container");
  let classMemory = "";
  container.addEventListener(
    "mouseover",
    handleHoverButtonsSoundPlay(classMemory),
    hoverButtonsSoundPlayListener
  );
}
function removeHoverButtonsSoundPlay() {
  hoverButtonsSoundPlayListener.abort();
}
export { hoverButtonsSoundPlay, removeHoverButtonsSoundPlay };
