const names = 'Names: John, Frank, Johnson, Kelly'
const regex = /(John)/gd;
const matches = [...names.matchAll(regex)];
matches[0];
// [
// "John",
// "John",
// groups: undefined
// index: 7
// indices:[]
//  [7, 11],
//  [7, 11]
// ]
// groups: undefined