import "./styles/main.scss";
import createHtml from "./components/createHtml";
import clickCell from "./listeners/clickCell";

import clickNavigation from "./listeners/clickNavigation";
import getSolvableMatrix from "./helpers/getSolvableMatrix";
import zeroingNumberOfMoves from "./helpers/zeroingNumberOfMoves";
import grag from "./listeners/grag";

let size = 4;

let matrix = getSolvableMatrix(size);
let sound = true;

localStorage.setItem("sound", JSON.stringify(sound));
zeroingNumberOfMoves();

const transition = "0.1s";
createHtml(matrix);
clickNavigation(matrix, transition, size);

clickCell(matrix, transition);
grag(matrix, transition);
