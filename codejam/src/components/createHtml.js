import createContainer from "./createContainer";
import createHtmlTag from "./createHtmlTag";
import renderMatrix from "./renderMatrix";

function createHtml(matrix) {
  createContainer();
  createHtmlTag("div", "field", "container");
  createHtmlTag("ul", "field__list", "field");

  renderMatrix(matrix);
}
export default createHtml;
