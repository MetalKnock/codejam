function getGridGap(className) {
  const element = document.querySelector(`.${className}`);
  const style = getComputedStyle(element);

  return style["grid-gap"].split(" ")[0].slice(0, -2);
}
export default getGridGap;
