function renderMoves(numberOfMoves) {
  const moves = document.querySelector(".moves");
  moves.innerHTML = `${numberOfMoves}`;
}
export default renderMoves;
