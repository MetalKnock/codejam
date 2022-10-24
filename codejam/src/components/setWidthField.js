function setWidthField(size) {
  const field = document.querySelector(".field__list");
  field.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
  field.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
  const fontSize = Math.floor((4 * 40) / size);
  document.querySelector(".field__list").style["font-size"] = `${fontSize}px`;
}
export default setWidthField;
