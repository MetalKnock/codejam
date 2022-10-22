import createHtmlTag from "../helpers/createHtmlTag";

function createResultList() {
  createHtmlTag("div", "field__result-list resultl", "field");
  createHtmlTag("ul", "resultl__list-date list-date", "resultl");
  createHtmlTag("ul", "resultl__list-size list-size", "resultl");
  createHtmlTag("ul", "resultl__list-moves list-moves", "resultl");
  createHtmlTag("ul", "resultl__list-time list-time", "resultl");

  createHtmlTag("li", "list-date__item", "list-date");
  const date = document.querySelector(".list-date__item");
  date.innerHTML = "DATE";

  createHtmlTag("li", "list-size__item", "list-size");
  const size = document.querySelector(".list-size__item");
  size.innerHTML = "SIZE";

  createHtmlTag("li", "list-moves__item", "list-moves");
  const moves = document.querySelector(".list-moves__item");
  moves.innerHTML = "MOVES";

  createHtmlTag("li", "list-time__item", "list-time");
  const time = document.querySelector(".list-time__item");
  time.innerHTML = "TIME";

  // createHtmlTag("div", "resultl__no-result", "resultl");
  // const noResult = document.querySelector(".resultl__no-result");
  // noResult.innerHTML =
  //   "The list of records is empty, you need to win the game.";
}
export default createResultList;
