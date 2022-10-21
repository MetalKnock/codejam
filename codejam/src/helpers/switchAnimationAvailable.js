function switchAnimationAvailable() {
  const animationAvailable = document.querySelector(".animationAvailable");
  animationAvailable.dataset.animationAvailable === ""
    ? (animationAvailable.dataset.animationAvailable = "true")
    : (animationAvailable.dataset.animationAvailable = "");
}
export default switchAnimationAvailable;
