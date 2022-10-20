import "./styles/main.scss";
import createHtml from "./components/createHtml";
import clickCell from "./listeners/clickCell";
import createMatrix from "./components/createMatrix";
import getIdAvailableCells from "./helpers/getIdAvailableCells";
import getCoordsAnimationStart from "./helpers/getCoordsAnimationStart";

const matrix = createMatrix(4);
const transition = "1s";
let animationAvailable = true;
createHtml(matrix);
clickCell(matrix, animationAvailable, transition);

// getIdAvailableCells(matrix);
getCoordsAnimationStart(matrix);
