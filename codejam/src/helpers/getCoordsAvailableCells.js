function getCoordsAvailableCells(matrix) {
  let iZero, jZero;
  const coordsAvailableCells = ["", "", "", ""]; // top,right,bottom,left
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        iZero = i;
        jZero = j;
        break;
      }
    }
    if (iZero || jZero) {
      break;
    }
  }
  //move top
  if (iZero !== matrix.length - 1) {
    coordsAvailableCells[0] = [iZero + 1, jZero];
  }
  //move right
  if (jZero !== 0) {
    coordsAvailableCells[1] = [iZero, jZero - 1];
  }
  //move bottom
  if (iZero !== 0) {
    coordsAvailableCells[2] = [iZero - 1, jZero];
  }
  //move left
  if (jZero !== matrix.length - 1) {
    coordsAvailableCells[3] = [iZero, jZero + 1];
  }

  // console.log(coordsAvailableCells);
  return coordsAvailableCells;
}
export default getCoordsAvailableCells;
