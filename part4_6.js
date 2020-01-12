const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  console.log(keysAreLessPivot, 'keysAreLessPivot');
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  console.log(keysAreMorePivot, 'keysAreMorePivot ');
  return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
};

console.log(quickSort([1, 5, 2, 10])); // [2, 3, 5, 10] 