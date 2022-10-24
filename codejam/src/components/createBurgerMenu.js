import createHtmlTag from "../helpers/createHtmlTag";
import menuBackground from "../assets/curtain-background.jpg";

function createBurgerMenu() {
  createHtmlTag("div", "field__menu menu", "field");

  createHtmlTag(
    "button",
    "menu__button--restart menu__button restart btn",
    "field__menu"
  );
  createHtmlTag("div", "restart-left btn-left", "menu__button--restart");
  createHtmlTag("div", "restart-right btn-right", "menu__button--restart");
  createHtmlTag(
    "div",
    "menu__button--restart-middle  restart-middle btn-middle",
    "menu__button--restart"
  );
  const restart = document.querySelector(".menu__button--restart-middle");
  restart.innerHTML = "restart";

  createHtmlTag(
    "button",
    "menu__button--save menu__button save btn",
    "field__menu"
  );
  createHtmlTag("div", "save-left btn-left", "menu__button--save");
  createHtmlTag("div", "save-right btn-right", "menu__button--save");
  createHtmlTag(
    "div",
    "menu__button--save-middle save-middle btn-middle",
    "menu__button--save"
  );
  const save = document.querySelector(".menu__button--save-middle");
  save.innerHTML = "save";

  createHtmlTag(
    "button",
    "menu__button menu__button--sound sound",
    "field__menu"
  );

  createHtmlTag(
    "button",
    "menu__button--load menu__button  load btn",
    "field__menu"
  );
  createHtmlTag("div", "load-left btn-left", "menu__button--load");
  createHtmlTag("div", "load-right btn-right", "menu__button--load");
  createHtmlTag(
    "div",
    "menu__button--load-middle load-middle btn-middle",
    "menu__button--load"
  );
  const load = document.querySelector(".menu__button--load-middle");
  load.innerHTML = "load";

  createHtmlTag(
    "button",
    "menu__button--result menu__button result btn",
    "field__menu"
  );
  createHtmlTag("div", "result-left btn-left", "menu__button--result");
  createHtmlTag("div", "result-right btn-right", "menu__button--result");
  createHtmlTag(
    "div",
    "menu__button--result-middle result-middle btn-middle",
    "menu__button--result"
  );
  const result = document.querySelector(".menu__button--result-middle");
  result.innerHTML = "result";

  createHtmlTag("nav", "menu__size-menu size-menu1", "field__menu");
  for (let i = 3; i <= 8; i++) {
    createHtmlTag(
      "button",
      `size-menu__button menu__size-menu--size${i}x${i} size${i}x${i} btn`,
      "menu__size-menu"
    );
    createHtmlTag(
      "div",
      `size${i}x${i}-left btn-left`,
      `menu__size-menu--size${i}x${i}`
    );
    createHtmlTag(
      "div",
      `size${i}x${i}-right btn-right`,
      `menu__size-menu--size${i}x${i}`
    );
    createHtmlTag(
      "div",
      `menu__size-menu--size${i}x${i}-middle size${i}x${i}-middle btn-middle`,
      `menu__size-menu--size${i}x${i}`
    );
    const button = document.querySelector(
      `.menu__size-menu--size${i}x${i}-middle`
    );
    button.innerHTML = `${i}x${i}`;
  }
  createHtmlTag("img", "menu__background background", "field__menu");
  const imgbg = document.querySelector(".menu__background");
  imgbg.src = menuBackground;
}
export default createBurgerMenu;
