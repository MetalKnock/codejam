function createHtmlTag(tag, className, parentClassName, inner = "", id) {
  const newTag = document.createElement(tag);
  newTag.className = className;
  const parent = document.querySelector(`.${parentClassName}`);
  newTag.innerHTML = inner;

  if (id) {
    newTag.id = id;
  }
  if (id === 0) {
    newTag.id = id;
  }
  parent.append(newTag);
  // document.querySelector(`.${className.split(" ")[0]}`).classList.add(inner);
  // console.log(document.querySelector(`.${className.split(" ")[0]}`));
}
export default createHtmlTag;
