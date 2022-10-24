import createHtmlTag from "../helpers/createHtmlTag";
import youWinBackground from "../assets/curtain-background.jpg";
import diabloWin from "../assets/diablo-win.png";
function createYouWin() {
  createHtmlTag("div", "field__you-win you-win", "field");
  createHtmlTag("div", "you-win__text", "you-win");
  createHtmlTag("img", "you-win__image", "you-win");

  createHtmlTag("button", "you-win__button btn", "you-win");
  createHtmlTag("div", "you-win__button-left btn-left", "you-win__button");
  createHtmlTag("div", "you-win__button-right btn-right", "you-win__button");
  createHtmlTag("div", "you-win__button-middle btn-middle", "you-win__button");

  createHtmlTag("img", "you-win__background background", "you-win");

  const youWin = document.querySelector(".you-win");
  youWin.style.display = "none";

  const youWinText = document.querySelector(".you-win__text");
  youWinText.innerHTML = "Hooray! You solved the puzzle in ##:## and N moves!";

  const close = document.querySelector(".you-win__button-middle");
  close.innerHTML = "NEW GAME";

  const image = document.querySelector(".you-win__image");
  image.src = diabloWin;
  const imgbg = document.querySelector(".you-win__background");
  imgbg.src = youWinBackground;
}
export default createYouWin;
