import createContainer from "./createContainer";
import createHtmlTag from "../helpers/createHtmlTag";
import renderMatrix from "./renderMatrix";
import renderMoves from "../helpers/renderMoves";
import getNumberOfMoves from "../helpers/getNumberOfMoves";
import renderTimer from "./renderTimer";
import createCurtain from "./createCurtain";
import createResultList from "./createResultList";
import createYouWin from "./createYouWin";
import movesGif from "../assets/moves.gif";
import timeGif from "../assets/time.gif";
import createBurgerMenu from "./createBurgerMenu";
import buttonDisabled from "../helpers/buttonDisabled";

function createHtml(matrix) {
  createContainer();

  createHtmlTag("nav", "navigation", "container");

  createHtmlTag("button", "navigation__button restart btn", "navigation");
  createHtmlTag("div", "restart-left btn-left", "restart");
  createHtmlTag("div", "restart-right btn-right", "restart");
  createHtmlTag("div", "restart-middle btn-middle", "restart");
  const restart = document.querySelector(".restart-middle");
  restart.innerHTML = "restart";

  createHtmlTag("button", "navigation__button save btn", "navigation");
  createHtmlTag("div", "save-left btn-left", "save");
  createHtmlTag("div", "save-right btn-right", "save");
  createHtmlTag("div", "save-middle btn-middle", "save");
  const save = document.querySelector(".save-middle");
  save.innerHTML = "save";

  createHtmlTag("button", "navigation__button sound", "navigation");

  createHtmlTag("button", "navigation__button load btn", "navigation");
  createHtmlTag("div", "load-left btn-left", "load");
  createHtmlTag("div", "load-right btn-right", "load");
  createHtmlTag("div", "load-middle btn-middle", "load");
  const load = document.querySelector(".load-middle");
  load.innerHTML = "load";

  createHtmlTag("button", "navigation__button result btn", "navigation");
  createHtmlTag("div", "result-left btn-left", "result");
  createHtmlTag("div", "result-right btn-right", "result");
  createHtmlTag("div", "result-middle btn-middle", "result");
  const result = document.querySelector(".result-middle");
  result.innerHTML = "result";

  createHtmlTag("button", "navigation__button burger-menu btn", "navigation");
  createHtmlTag("div", "burger-menu-left btn-left", "burger-menu");
  createHtmlTag("div", "burger-menu-right btn-right", "burger-menu");
  createHtmlTag("div", "burger-menu-middle btn-middle", "burger-menu");
  const burgerMenu = document.querySelector(".burger-menu-middle");
  burgerMenu.innerHTML = "menu";

  createHtmlTag("div", "field", "container");
  createHtmlTag("ul", "field__list", "field");
  createCurtain();
  createResultList();
  createYouWin();
  renderMatrix(matrix);

  createHtmlTag("div", "animationAvailable", "container");

  createHtmlTag("nav", "size-menu", "container");
  for (let i = 3; i <= 8; i++) {
    createHtmlTag(
      "button",
      `size-menu--size${i}x${i} size-menu__button size${i}x${i} btn`,
      "size-menu"
    );
    createHtmlTag("div", `size${i}x${i}-left btn-left`, `size${i}x${i}`);
    createHtmlTag("div", `size${i}x${i}-right btn-right`, `size${i}x${i}`);
    createHtmlTag("div", `size${i}x${i}-middle btn-middle`, `size${i}x${i}`);
    const button = document.querySelector(`.size${i}x${i}-middle`);
    button.innerHTML = `${i}x${i}`;
  }
  createHtmlTag("div", "updated-data", "container");
  createHtmlTag("div", "moves-wrapper", "updated-data");
  createHtmlTag("div", "moves-wrapper__moves moves", "moves-wrapper");
  renderMoves(getNumberOfMoves());
  createHtmlTag("img", "moves-wrapper__background", "moves-wrapper");
  document.querySelector(".moves-wrapper__background").src = movesGif;

  createHtmlTag("div", "time-wrapper", "updated-data");
  createHtmlTag("div", "time-wrapper__timer timer", "time-wrapper");
  renderTimer(0, true);
  createHtmlTag("img", "time-wrapper__background", "time-wrapper");
  document.querySelector(".time-wrapper__background").src = timeGif;

  createBurgerMenu();

  const animationAvailable = document.querySelector(".animationAvailable");
  animationAvailable.dataset.animationAvailable = "true";
  buttonDisabled("restart");
  buttonDisabled("save");
  document.querySelector(".sound").style.cursor = "not-allowed";
  buttonDisabled("load");
  buttonDisabled("result");
  buttonDisabled("burger-menu");
  for (let i = 3; i <= 8; i++) {
    buttonDisabled(`size-menu--size${i}x${i}`);
  }
}
export default createHtml;
