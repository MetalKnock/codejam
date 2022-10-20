import createContainer from "./createContainer";
import createHtmlTag from "./createHtmlTag";
import renderMatrix from "./renderMatrix";

function createHtml(matrix) {
  createContainer();
  createHtmlTag("nav", "navigation", "container");

  createHtmlTag("button", "navigation__button start", "navigation");
  const start = document.querySelector(".start");
  start.innerHTML = "start";

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
}
export default createHtml;
