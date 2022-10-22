import createHtmlTag from "../helpers/createHtmlTag";

function createCurtain() {
  createHtmlTag("div", "field__curtain curtain", "field");
  createHtmlTag("button", "curtain__continue", "curtain");
  const continueGame = document.querySelector(".curtain__continue");

  if (localStorage.getItem("atLeastOneSave") === null) {
    continueGame.disabled = true;
    continueGame.innerHTML =
      "CONTINUE<br>(To activate, click on save during the game)";
  } else {
    continueGame.disabled = false;
    continueGame.innerHTML = "CONTINUE";
  }

  createHtmlTag("button", "curtain__new-game", "curtain");
  const newGame = document.querySelector(".curtain__new-game");
  newGame.innerHTML = "NEW GAME";

  createHtmlTag("div", "curtain__left", "curtain");
  createHtmlTag("div", "curtain__right", "curtain");
}
export default createCurtain;
