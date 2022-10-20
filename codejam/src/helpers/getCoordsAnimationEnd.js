import getCoordsAvailableCells from "./getCoordsAvailableCells";

function getCoordsAnimationEnd(matrix, direction) {
  const coordsAvailableCells = getCoordsAvailableCells(matrix);
  let coordsEnd;
  switch (direction) {
    case "top":
      coordsEnd = coordsAvailableCells[0];
      coordsEnd[0]--;
      break;
    case "right":
      coordsEnd = coordsAvailableCells[1];
      coordsEnd[1]++;
      break;
    case "bottom":
      coordsEnd = coordsAvailableCells[2];
      coordsEnd[0]++;
      break;
    case "left":
      coordsEnd = coordsAvailableCells[3];
      coordsEnd[1]--;
      break;
  }
  return coordsEnd;
}
export default getCoordsAnimationEnd;
