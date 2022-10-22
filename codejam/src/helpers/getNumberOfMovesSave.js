function getNumberOfMovesSave() {
  return JSON.parse(localStorage.getItem("numberOfMovesSave"));
}
export default getNumberOfMovesSave;
