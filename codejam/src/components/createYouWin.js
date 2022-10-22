import createHtmlTag from "../helpers/createHtmlTag";

function createYouWin() {
  createHtmlTag("div", "field__you-win you-win", "field");
  createHtmlTag("div", "you-win__text", "you-win");
  createHtmlTag("button", "you-win__button-new-game", "you-win");

  const youWin = document.querySelector(".you-win");
  youWin.style.display = "none";

  const youWinText = document.querySelector(".you-win__text");
  youWinText.innerHTML = "Hooray! You solved the puzzle in ##:## and N moves!";

  const close = document.querySelector(".you-win__button-new-game");
  close.innerHTML = "NEW GAME";
}
export default createYouWin;
