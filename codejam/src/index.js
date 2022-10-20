import "./styles/main.scss";
import createHtml from "./components/createHtml";
import clickCell from "./listeners/clickCell";
import createMatrix from "./components/createMatrix";
import checkMatrixSolvability from "./helpers/checkMatrixSolvability ";
import randomSortArray from "./helpers/randomSortArray";
import convertMatrixInOneDimensionalArray from "./helpers/convertMatrixInOneDimensionalArray";
import convertArrayInMatrix from "./helpers/convertArrayInMatrix";
import clickNavigation from "./listeners/clickNavigation";

let size = 4;

let matrix = createMatrix(size);
let sound = true;
localStorage.setItem("sound", JSON.stringify(sound));

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
clickNavigation(matrix, animationAvailable, transition);

clickCell(matrix, animationAvailable, transition);
