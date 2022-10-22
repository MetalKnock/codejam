import setWidthField from "../components/setWidthField";

let resizeWindowListener = new AbortController();

function resizeWindow(size) {
  if (resizeWindowListener.signal.aborted) {
    resizeWindowListener = new AbortController();
  }
  window.addEventListener(
    "resize",
    handleResizeWindow(size),
    resizeWindowListener
  );
}

function handleResizeWindow(size) {
  return function curriedFunc() {
    setWidthField(size);
  };
}

function removeResizeWindow() {
  resizeWindowListener.abort();
}

export { resizeWindow, removeResizeWindow };
