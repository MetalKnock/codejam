function removeClassAvailableCells() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => cell.classList.remove("cell--available"));
}
export default removeClassAvailableCells;
