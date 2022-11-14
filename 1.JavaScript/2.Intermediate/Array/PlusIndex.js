function selfPlusIndex(array) {
  const newArray = array.map((item, i) => item + i);
  return newArray;
}

console.log(selfPlusIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
