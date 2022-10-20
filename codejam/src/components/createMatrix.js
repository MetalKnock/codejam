function createMatrix(size) {
  const matrixLength = size ** 2;
  let matrixInArray = [];
  for (let i = 1; i < matrixLength; i++) {
    matrixInArray.push(i);
  }
  matrixInArray.push(0);

  const matrix = [];

  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = matrixInArray[i * size + j];
    }
  }
  return matrix;
}
export default createMatrix;
