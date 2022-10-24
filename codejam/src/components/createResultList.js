import createHtmlTag from "../helpers/createHtmlTag";
import fieldBackground from "../assets/curtain-background.jpg";

function createResultList() {
  createHtmlTag("div", "field__result-list resultl", "field");

  createHtmlTag("div", "resultl__title title", "resultl");

  createHtmlTag("h2", "title__date", "resultl__title");
  const date = document.querySelector(".title__date");
  date.innerHTML = "DATE";

  createHtmlTag("h2", "title__size", "resultl__title");
  const size = document.querySelector(".title__size");
  size.innerHTML = "SIZE";

  createHtmlTag("h2", "title__moves", "resultl__title");
  const moves = document.querySelector(".title__moves");
  moves.innerHTML = "MOVES";

  createHtmlTag("h2", "title__time", "resultl__title");
  const time = document.querySelector(".title__time");
  time.innerHTML = "TIME";

  createHtmlTag("div", "resultl__table", "resultl");
  createHtmlTag("ul", "resultl__table-date list-date", "resultl__table");
  createHtmlTag("ul", "resultl__table-size list-size", "resultl__table");
  createHtmlTag("ul", "resultl__table-moves list-moves", "resultl__table");
  createHtmlTag("ul", "resultl__table-time list-time", "resultl__table");

  createHtmlTag("button", "resultl__close btn", "resultl");
  createHtmlTag("div", "resultl__close-left btn-left", "resultl__close");
  createHtmlTag("div", "resultl__close-right btn-right", "resultl__close");
  createHtmlTag("div", "resultl__close-middle btn-middle", "resultl__close");
  const close = document.querySelector(".resultl__close-middle");
  close.innerHTML = "CLOSE";

  createHtmlTag("img", "field__background background", "resultl");
  const imgbg = document.querySelector(".field__background");
  imgbg.src = fieldBackground;

  // createHtmlTag("div", "resultl__no-result", "resultl");
  // const noResult = document.querySelector(".resultl__no-result");
  // noResult.innerHTML =
  //   "The list of records is empty, you need to win the game.";
}
export default createResultList;
