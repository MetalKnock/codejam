function getNumberOfMoves() {
  return JSON.parse(localStorage.getItem("numberOfMoves"));
}
export default getNumberOfMoves;
