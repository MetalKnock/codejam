function deleteClickCell() {
  const cells = document.querySelector(".field__list");
  let cellsClone = cells.cloneNode(true);
  cells.parentNode.replaceChild(cellsClone, cells);
}
export default deleteClickCell;
