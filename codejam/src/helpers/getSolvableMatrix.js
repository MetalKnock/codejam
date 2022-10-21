import createMatrix from "../components/createMatrix";
import checkMatrixSolvability from "./checkMatrixSolvability ";
import convertArrayInMatrix from "./convertArrayInMatrix";
import convertMatrixInOneDimensionalArray from "./convertMatrixInOneDimensionalArray";
import randomSortArray from "./randomSortArray";

function getSolvableMatrix(size) {
  let matrix = createMatrix(size);
  matrix = convertArrayInMatrix(
    randomSortArray(convertMatrixInOneDimensionalArray(matrix))
  );
  while (!checkMatrixSolvability(matrix)) {
    matrix = convertArrayInMatrix(
      randomSortArray(convertMatrixInOneDimensionalArray(matrix))
    );
  }
  return matrix;
}
export default getSolvableMatrix;
