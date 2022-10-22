import createHtmlTag from "../helpers/createHtmlTag";

function createResultList() {
  createHtmlTag("div", "field__result-list result-list", "field");
  createHtmlTag("ul", "result-list__list", "result-list");
  createHtmlTag("li", "result-list__item", "result-list__list");
  const resultItem = document.querySelector(".result-list__item");
  resultItem.innerHTML = "123";
  createHtmlTag("div", "result-list__no-result", "result-list");
  const noResult = document.querySelector(".result-list__no-result");
  noResult.innerHTML =
    "The list of records is empty, you need to win the game.";
}
export default createResultList;
