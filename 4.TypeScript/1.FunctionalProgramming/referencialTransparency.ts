const numbers: number[] = [4,5,2,10,22];

function sort(list: number[]) {
    return list.sort()
}

console.log(sort(numbers));
console.log(numbers);

const numbers2: readonly number[] = [99,2,3,0,18];
// Readonly can't modify the array
 
// Make a clone to modify it with spread operator
function sort2(list: readonly number[]) {
    return [...list].sort();
}

console.log(sort2(numbers2));
console.log(numbers2); 