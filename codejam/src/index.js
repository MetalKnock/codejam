import "./styles/main.scss";
import createHtml from "./components/createHtml";
import clickCell from "./listeners/clickCell";
import createMatrix from "./components/createMatrix";
import getIdAvailableCells from "./helpers/getIdAvailableCells";
import getCoordsAnimationStart from "./helpers/getCoordsAnimationStart";
import checkMatrixSolvability from "./helpers/checkMatrixSolvability ";
import randomSortArray from "./helpers/randomSortArray";
import convertMatrixInOneDimensionalArray from "./helpers/convertMatrixInOneDimensionalArray";
import convertArrayInMatrix from "./helpers/convertArrayInMatrix";

let size = 4;
let matrix = createMatrix(size);

matrix = convertArrayInMatrix(
  randomSortArray(convertMatrixInOneDimensionalArray(matrix))
);

while (!checkMatrixSolvability(matrix)) {
  matrix = convertArrayInMatrix(
    randomSortArray(convertMatrixInOneDimensionalArray(matrix))
  );
}

const transition = "1s";
let animationAvailable = true;
createHtml(matrix);
clickCell(matrix, animationAvailable, transition);

// getIdAvailableCells(matrix);
getCoordsAnimationStart(matrix);
console.log(`matrix is solvability:${checkMatrixSolvability(matrix)}`);
