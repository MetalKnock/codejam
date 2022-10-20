function randomSortArray(array) {
  let i = array.length,
    j;

  while (i != 0) {
    j = Math.floor(Math.random() * i);
    i--;

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
export default randomSortArray;
