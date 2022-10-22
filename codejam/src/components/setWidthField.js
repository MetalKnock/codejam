function setWidthField(size) {
  const field = document.querySelector(".field__list");

  const widthWindow = document.documentElement.clientWidth;
  const heightWindow = document.documentElement.clientHeight;
  //   if (widthWindow < heightWindow) {
  let widthCell = 150;
  if (widthWindow < 900) {
    widthCell = (widthWindow * 0.1667 * 5) / size;
  }

  field.style["grid-template-columns"] = `repeat(${size}, ${widthCell}px)`;
  field.style["grid-template-rows"] = `repeat(${size}, ${widthCell}px)`;
  //   } else {
  //     let heightWindow = 150;
  //     if (widthWindow < 900) {
  //       heightWindow = heightWindow * 0.33;
  //     }

  //     field.style["grid-template-columns"] = `repeat(${size}, ${heightWindow}px)`;
  //     field.style["grid-template-rows"] = `repeat(${size}, ${heightWindow}px)`;
  //   }
}
export default setWidthField;
