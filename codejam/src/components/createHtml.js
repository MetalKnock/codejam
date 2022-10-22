import createContainer from "./createContainer";
import createHtmlTag from "../helpers/createHtmlTag";
import renderMatrix from "./renderMatrix";
import renderMoves from "../helpers/renderMoves";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import renderTimer from "./renderTimer";
import createTime from "./createTime";
import createCurtain from "./createCurtain";
import createResultList from "./createResultList";
import createYouWin from "./createYouWin";

function createHtml(matrix) {
  createContainer();

  createHtmlTag("nav", "navigation", "container");

  createHtmlTag("div", "moves", "navigation");
  renderMoves(getNumberOfMoves());

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

  createHtmlTag("button", "navigation__button result", "navigation");
  const result = document.querySelector(".result");
  result.innerHTML = "result";

  createHtmlTag("div", "timer", "navigation");
  // const time = createTime();

  renderTimer(0, true);

  createHtmlTag("div", "field", "container");
  createHtmlTag("ul", "field__list", "field");
  createCurtain();
  createResultList();
  createYouWin();
  renderMatrix(matrix);

  createHtmlTag("div", "animationAvailable", "container");

  createHtmlTag("nav", "size-menu", "container");
  for (let i = 3; i <= 8; i++) {
    createHtmlTag("button", `size-menu__button size${i}x${i}`, "size-menu");
    const button = document.querySelector(`.size${i}x${i}`);
    button.innerHTML = `${i}x${i}`;
  }

  const animationAvailable = document.querySelector(".animationAvailable");
  animationAvailable.dataset.animationAvailable = "true";
}
export default createHtml;
