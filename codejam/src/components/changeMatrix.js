function changeMatrix(matrix, coordsStart, coordsEnd) {
  const memory = matrix[coordsEnd[0]][coordsEnd[1]];
  matrix[coordsEnd[0]][coordsEnd[1]] = matrix[coordsStart[0]][coordsStart[1]];
  matrix[coordsStart[0]][coordsStart[1]] = memory;
}
export default changeMatrix;
