function convertMatrixInOneDimensionalArray(matrix) {
  const matrixInArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrixInArray.push(matrix[i][j]);
    }
  }
  return matrixInArray;
}
export default convertMatrixInOneDimensionalArray;
