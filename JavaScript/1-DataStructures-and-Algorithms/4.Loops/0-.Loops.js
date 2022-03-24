const orders = [500, 30, 99, 15, 223];
// Bad code

const total = 0
const withTax = [];
const highValue = [];

for (i = 0; i < orders.length; i++) {
    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.1);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i]);
    }
}

//Good Code

// Reduce
const total = orders.reduce((acc, curr) => acc + curr)

// Map
const withTax = orders.map(v => v * 1.1)

// Filter
const highValue = orders.filter(v => v > 100);
