import getGridGap from "../helpers/getGridGap";
import getWidth from "../helpers/getWidth";

function cellAnimation(number, direction, transition, visible = true) {
  const widthCell = Number(getWidth("cell"));
  const gap = Number(getGridGap("field__list"));
  const distance = widthCell + gap;
  const cell = document.getElementById(number);

  if (visible) {
    cell.style.transition = transition;
  }

  if (direction === "top") {
    cell.style.transform = `translateY(-${distance}px)`;
  }

  if (direction === "bottom") {
    cell.style.transform = `translateY(${distance}px)`;
  }

  if (direction === "left") {
    cell.style.transform = `translateX(-${distance}px)`;
  }

  if (direction === "right") {
    cell.style.transform = `translateX(${distance}px)`;
  }
}
export default cellAnimation;
