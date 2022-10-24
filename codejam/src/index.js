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
