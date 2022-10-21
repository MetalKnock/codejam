function getAnimationAvailable() {
  const animationAvailable = document.querySelector(".animationAvailable");
  return Boolean(animationAvailable.dataset.animationAvailable);
}
export default getAnimationAvailable;
