const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function searchOn(arr: Array<number>, value: Number) {
    let time = 0
    for (let i = 0; i < arr.length; i++) {
        time++
        if (arr[i] === value) {
            return time;
        }
    }
}

const timeOn1 = searchOn(arr, 10);
console.log(timeOn1)

const timeOn2 = searchOn(arr2, 20);
console.log(timeOn2)

function searchinLogN(arr: Array<number>, value: Number): any {
    let time = 0
    const middle = Math.floor(arr.length / 2);
    time++;

    if (arr[middle] == value) {
        return time;
    } else if (value < arr[middle]) {
        return searchinLogN(arr.slice(0, middle), value);
    } else {
        return searchinLogN(arr.slice(middle), value);
    }
}

const timeLogN1 = searchinLogN(arr, 10);
console.log(timeLogN1)

const timeLogN2 = searchinLogN(arr2, 20);
console.log(timeLogN2)