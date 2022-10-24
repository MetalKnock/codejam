import hoverSoundImp from "../assets/invscrol.wav";

function handleHoverButtonsSoundPlay(classMemory) {
  return function curriedFunc(e) {
    if (classMemory !== e.target.parentElement.classList.value) {
      classMemory = e.target.parentElement.classList.value;
      if (e.target.parentElement.classList.contains("btn")) {
        if (!JSON.parse(localStorage.getItem("sound"))) return;
        const hoverSound = new Audio(hoverSoundImp);
        hoverSound.playbackRate = 3;
        hoverSound.volume = 0.5;
        hoverSound.play();
      }
    }
  };
}
export default handleHoverButtonsSoundPlay;
