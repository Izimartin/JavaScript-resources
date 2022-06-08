// iterator
const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
}

//Recursion
const recurToTen = (num = 1) => {
    if (num > 10) return
    console.log(num);
    num++;
    recurToTen(num);
}
recurToTen();