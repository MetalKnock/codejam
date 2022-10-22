import handleClickNavigation from "./handleClickNavigation";

let clickNavigationListener = new AbortController();

function clickNavigation(matrix, transition, size, myAudio) {
  if (clickNavigationListener.signal.aborted) {
    clickNavigationListener = new AbortController();
  }
  const navigation = document.querySelector(".navigation");
  navigation.addEventListener(
    "click",
    handleClickNavigation(matrix, transition, size, myAudio),
    clickNavigationListener
  );
}
function removeClickNavigation() {
  clickNavigationListener.abort();
}
export { clickNavigation, removeClickNavigation };
