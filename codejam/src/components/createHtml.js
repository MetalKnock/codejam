import createContainer from "./createContainer";
import createHtmlTag from "./createHtmlTag";
import renderMatrix from "./renderMatrix";

function createHtml(matrix) {
  createContainer();
  createHtmlTag("nav", "navigation", "container");

  createHtmlTag("button", "navigation__button restart", "navigation");
  const restart = document.querySelector(".restart");
  restart.innerHTML = "restart";

  createHtmlTag("button", "navigation__button save", "navigation");
  const save = document.querySelector(".save");
  save.innerHTML = "save";

  createHtmlTag("button", "navigation__button sound", "navigation");

  createHtmlTag("button", "navigation__button load", "navigation");
  const load = document.querySelector(".load");
  load.innerHTML = "load";

  createHtmlTag("div", "field", "container");
  createHtmlTag("ul", "field__list", "field");
  renderMatrix(matrix);
  createHtmlTag("div", "animationAvailable", "container");
  const animationAvailable = document.querySelector(".animationAvailable");
  animationAvailable.dataset.animationAvailable = "true";
}
export default createHtml;
