import convertMatrixInOneDimensionalArray from "./convertMatrixInOneDimensionalArray";

function checkMatrixSolvability(matrix) {
  //   let matrix1 = [
  //     [5, 6, 7, 12],
  //     [9, 11, 10, 8],
  //     [1, 2, 3, 4],
  //     [15, 14, 13, 0],
  //   ];
  // let matrix2 = [
  //   [5, 1, 4],
  //   [3, 0, 6],
  //   [7, 2, 8],
  // ];
  const oddMatrixSize = matrix.length % 2 ? true : false;

  let matrixInArray = convertMatrixInOneDimensionalArray(matrix);
  let sum = 0;

  for (let i = 0; i < matrixInArray.length; i++) {
    if (matrixInArray[i] !== 0) {
      sum += matrixInArray[i] - 1;
      let j = i - 1;
      while (j >= 0) {
        if (matrixInArray[j] !== 0 && matrixInArray[j] < matrixInArray[i]) {
          sum--;
        }
        j--;
      }
    } else {
      if (!oddMatrixSize) {
        sum += Math.floor(i / Math.sqrt(matrixInArray.length)) + 1;
      }
    }
  }

  if (sum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
export default checkMatrixSolvability;
