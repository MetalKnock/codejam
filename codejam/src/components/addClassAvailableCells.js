function addClassAvailableCells(idAvailableCells) {
  idAvailableCells.forEach((id) => {
    if (id) {
      document.getElementById(id).classList.add("cell--available");
      document.getElementById(id).draggable = true;
      // document.getElementById(
      //   id
      // ).innerHTML = `<div class = 'field__item cell cell--available'>${id}<div>`;
    }
  });
}
export default addClassAvailableCells;
