const randomHex = () => `#${Math.floor(Math.random() * 0Xffffff)
    .toString(16).padEnd(6, "0")}`;

console.log(randomHex());