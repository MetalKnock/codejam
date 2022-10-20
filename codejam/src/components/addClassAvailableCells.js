function addClassAvailableCells(idAvailableCells) {
  idAvailableCells.forEach((id) => {
    if (id) {
      document.getElementById(id).classList.add("cell--available");
    }
  });
}
export default addClassAvailableCells;
