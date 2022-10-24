import renderTimer from "../components/renderTimer";
import { clickCloseResult } from "../listeners/clickCloseResult";
import createHtmlTag from "./createHtmlTag";
import getCurrentTimeFromTimer from "./getCurrentTimeFromTimer";
import getIdSetInterval from "./getIdSetInterval";
import switchAnimationAvailable from "./switchAnimationAvailable";
import removeAllEventListeners from "./removeAllEventListeners";
function renderResults(matrix, size, transition, myAudio) {
  const resultList = document.querySelector(".field__result-list");

  resultList.style.display = "flex";
  clearInterval(getIdSetInterval());
  removeAllEventListeners();
  clickCloseResult(matrix, size, transition, myAudio);
  document.querySelector(".resultl__close-left").style.opacity = 1;
  document.querySelector(".resultl__close-right").style.opacity = 1;
  document.querySelector(".resultl__close-middle").style.opacity = 1;

  if (!localStorage.getItem("result-list")) return;
  // console.log(1);
  const arrResultList = JSON.parse(localStorage.getItem("result-list"));
  const arrResultListSort = [...arrResultList].sort((a, b) =>
    a.numberOfMoves != b.numberOfMoves
      ? a.numberOfMoves - b.numberOfMoves
      : a.time != b.time
      ? a.time - b.time
      : a.size - b.size
  );
  let length = arrResultListSort.length < 10 ? arrResultListSort.length : 10;
  for (let i = 0; i < length; i++) {
    createHtmlTag("li", `list-date__item list-date__item--${i}`, "list-date");
    const date = document.querySelector(`.list-date__item--${i}`);
    const date1 = new Date(arrResultListSort[i].date);
    const hours = `${
      date1.getHours() < 10 ? "0" + date1.getHours() : date1.getHours()
    }`;
    const minutes = `${
      date1.getMinutes() < 10 ? "0" + date1.getMinutes() : date1.getMinutes()
    }`;
    const dateInner = `${
      date1.getDate() < 10 ? "0" + date1.getDate() : date1.getDate()
    }`;
    const month = `${
      date1.getMonth() < 10 ? "0" + date1.getMonth() : date1.getMonth()
    }`;

    date.innerHTML = `${dateInner}.${month} - ${hours}:${minutes}`;

    createHtmlTag("li", `list-size__item list-size__item--${i}`, "list-size");
    const size = document.querySelector(`.list-size__item--${i}`);
    size.innerHTML = arrResultListSort[i].size;

    createHtmlTag(
      "li",
      `list-moves__item list-moves__item--${i}`,
      "list-moves"
    );
    const moves = document.querySelector(`.list-moves__item--${i}`);
    moves.innerHTML = arrResultListSort[i].numberOfMoves;

    createHtmlTag("li", `list-time__item list-time__item--${i}`, "list-time");
    const time = document.querySelector(`.list-time__item--${i}`);
    time.innerHTML = arrResultListSort[i].time;
  }
}
export default renderResults;
