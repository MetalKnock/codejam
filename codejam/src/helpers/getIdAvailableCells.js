import getCoordsAvailableCells from "./getCoordsAvailableCells";

function getIdAvailableCells(matrix) {
  const coords = getCoordsAvailableCells(matrix);
  const idAvailableCells = ["", "", "", ""];
  coords.forEach((val, i) => {
    if (val) {
      idAvailableCells[i] = matrix[val[0]][val[1]];
    }
  });
  // console.log(idAvailableCells);
  return idAvailableCells;
}
export default getIdAvailableCells;
