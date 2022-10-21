import getNumberOfMoves from "./getNumberOfMoves";

function addOneMove() {
  let numberOfMoves = getNumberOfMoves();
  numberOfMoves++;
  localStorage.setItem("numberOfMoves", JSON.stringify(numberOfMoves));
}
export default addOneMove;
