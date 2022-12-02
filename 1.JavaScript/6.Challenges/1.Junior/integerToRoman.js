function IntergersToRomans(n) {
    const integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let res = "";

    integers.forEach((integer, i) => {
        while (n >= integer) {
            res = res + romans[i];
            n = n - integer;
        }
    });

    return res;
}
console.log(IntergersToRomans(1000));
console.log(IntergersToRomans(3999));