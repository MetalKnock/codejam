import convertMatrixInOneDimensionalArray from "../helpers/convertMatrixInOneDimensionalArray";
import createHtmlTag from "../helpers/createHtmlTag";

function renderMatrix(matrix) {
  const field = document.querySelector(".field__list");
  if (field.hasChildNodes()) {
    field.innerHTML = "";
  }
  const matrixInArray = convertMatrixInOneDimensionalArray(matrix);
  const lengthMatrix = matrixInArray.length;
  for (let i = 0; i < lengthMatrix; i++) {
    if (matrixInArray[i] !== 0) {
      createHtmlTag(
        "li",
        "field__item cell",
        "field__list",
        matrixInArray[i],
        matrixInArray[i]
      );
    } else {
      createHtmlTag(
        "li",
        "field__item cell cell--active",
        "field__list",
        "",
        matrixInArray[i]
      );
    }
  }
}
export default renderMatrix;
