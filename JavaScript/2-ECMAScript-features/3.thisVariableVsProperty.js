const object = {
  message: "Hello, World!",
  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
};
console.log(object.getMessage());

// 'Hello, World!' is logged to console.
// object.getMessage() is a method invocation, that's why this inside the method equals object.
// There's also a variable declaration const message = 'Hello, Earth!' inside the method. The variable doesn't influence anyhow the value of this.message.

