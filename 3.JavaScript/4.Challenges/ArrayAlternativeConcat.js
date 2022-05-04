
//You could iterate the min length of both array and build alternate elements
// and at the end push the rest.

var array1 = ["a", "b", "c"],
    array2 = [1, 2, 3, 4],
    result = [],
    i, l = Math.min(array1.length, array2.length);
    
for (i = 0; i < l; i++) {
    result.push(array1[i], array2[i]);
}
result.push(...array1.slice(l), ...array2.slice(l));

console.log(result);


//or

var array3 = ["x", "y", "z"],
  array4 = [1, 2, 3, 4],
  result2 = [array3, array4]
    .reduce((r, a) => (a.forEach((a, i) => (r[i] = r[i] || []).push(a)), r), [])
    .reduce((a, b) => a.concat(b));

console.log(result2);

//or 

const a1 = ["a", "b", "c", "d"];
const a2 = [1, 2];
const res = Math.min(a1.length, a2.length);

const merged = [].concat(
  ...Array.from({ length: res }, (_, i) => [a1[i], a2[i]]),
  a1.slice(res),
  a2.slice(res)
);

console.log(merged);

//or

const array5 = ["a", "b", "c", "d"];
const array6 = [1, 2];
const mergeArrays = (a, b) =>
  (a.length > b.length ? a : b).reduce(
    (acc, cur, i) => (a[i] && b[i] ? [...acc, a[i], b[i]] : [...acc, cur]),
    []
  );

console.log(mergeArrays(array5, array6));

//or

const arr1 = ["a", "b", "c", "d"];
const arr2 = [1, 2];

const res2 = (arr1.length > arr2.length ? arr1 : arr2) // you can replace it with just arr1, if you know its always longer
  .flatMap((e, idx) => (arr2[idx] ? [e, arr2[idx]] : [e]));
console.log(res2);