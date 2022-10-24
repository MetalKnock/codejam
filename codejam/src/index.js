import "./styles/main.scss";
import createHtml from "./components/createHtml";
import getSolvableMatrix from "./helpers/getSolvableMatrix";
import zeroingNumberOfMoves from "./helpers/zeroingNumberOfMoves";
import myAudioResource from "./assets/usb-slide-back-106529.mp3";
import setWidthField from "./components/setWidthField";
import { resizeWindow } from "./listeners/resizeWindow";
import { clickCurtainMenu } from "./listeners/clickCurtainMenu";
import checkWin from "./helpers/checkWin";
import { hoverButtonsSoundPlay } from "./listeners/hoverButtonsSoundPlay";
import icon from "./assets/favicon.png";

let size = 4;
let matrix = getSolvableMatrix(size);
let sound = true;
const myAudio = new Audio(myAudioResource);
myAudio.playbackRate = 2.5;
localStorage.setItem("sound", JSON.stringify(sound));
const transition = "1s";

zeroingNumberOfMoves();
createHtml(matrix);

setWidthField(size);
clickCurtainMenu(matrix, size, transition, myAudio);

resizeWindow(size);

checkWin(matrix, transition, myAudio);

let listener = new AbortController();
window.addEventListener(
  "click",
  () => {
    hoverButtonsSoundPlay();
    listener.abort();
  },
  listener
);

(function () {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = icon;
  document.getElementsByTagName("head")[0].appendChild(link);
})();

alert(
  "Привет, остались небольшие недочеты, мне нужно еще немного времени. Пожалуйста, проверь мою работу ближе к концу дедлайна. Спасибо за понимание и хорошего дня."
);
