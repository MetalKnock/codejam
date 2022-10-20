function convertArrayInMatrix(array) {
  let matrixSize = Math.sqrt(array.length);
  const matrix = [];
  for (let i = 0; i < matrixSize; i++) {
    matrix[i] = [];
    for (let j = 0; j < matrixSize; j++) {
      matrix[i][j] = array[i * matrixSize + j];
    }
  }
  return matrix;
}
export default convertArrayInMatrix;
