import createHtmlTag from "../helpers/createHtmlTag";
import curtainBackground from "../assets/curtain-background.jpg";

function createCurtain() {
  createHtmlTag("div", "field__curtain curtain", "field");
  createHtmlTag("button", "curtain__continue btn", "curtain");
  createHtmlTag("div", "curtain__continue-left btn-left", "curtain__continue");
  createHtmlTag(
    "div",
    "curtain__continue-right btn-right",
    "curtain__continue"
  );
  createHtmlTag(
    "div",
    "curtain__continue-middle btn-middle",
    "curtain__continue"
  );
  const continueGameLeft = document.querySelector(".curtain__continue-left");
  const continueGameRight = document.querySelector(".curtain__continue-right");
  const continueGameMiddle = document.querySelector(
    ".curtain__continue-middle"
  );

  if (localStorage.getItem("atLeastOneSave") === null) {
    continueGameMiddle.disabled = true;
    continueGameMiddle.innerHTML = "CONTINUE`";
    continueGameMiddle.style.color = "grey";
    continueGameMiddle.style.cursor = "not-allowed";
    continueGameLeft.style.cursor = "not-allowed";
    continueGameRight.style.cursor = "not-allowed";
  } else {
    continueGameMiddle.disabled = false;
    continueGameMiddle.innerHTML = "CONTINUE";
  }

  createHtmlTag("button", "curtain__new-game btn", "curtain");
  createHtmlTag("div", "curtain__new-game-left btn-left", "curtain__new-game");
  createHtmlTag(
    "div",
    "curtain__new-game-right btn-right",
    "curtain__new-game"
  );
  createHtmlTag(
    "div",
    "curtain__new-game-middle btn-middle",
    "curtain__new-game"
  );

  const newGame = document.querySelector(".curtain__new-game-middle");
  newGame.innerHTML = "NEW GAME";

  createHtmlTag("img", "curtain__background background", "curtain");
  const imgbg = document.querySelector(".curtain__background");
  imgbg.src = curtainBackground;
}
export default createCurtain;
