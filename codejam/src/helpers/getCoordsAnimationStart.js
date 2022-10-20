import getCoordsAvailableCells from "./getCoordsAvailableCells";

function getCoordsAnimationStart(matrix, direction) {
  const coordsAvailableCells = getCoordsAvailableCells(matrix);

  switch (direction) {
    case "top":
      return coordsAvailableCells[0];

    case "right":
      return coordsAvailableCells[1];

    case "bottom":
      return coordsAvailableCells[2];

    case "left":
      return coordsAvailableCells[3];
  }
}
export default getCoordsAnimationStart;
