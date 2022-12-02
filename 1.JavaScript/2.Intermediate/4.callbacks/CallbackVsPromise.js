// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

function getNumber(cb) {
    console.log("Callback: wait 2 second please...");
  setTimeout(() => {
    cb(10000); // This is a callback passed inside setTimeout function as an
  }, 2000);
}

getNumber(n => {
    console.log("Callback", n);
});
 
// this example can be used in a browser javascript engine instead of node
// function greeting(name) {
//   console("Hello " + name);
// }

// function processUserInput(callback) {
//   var name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

function getNumberPromise() { 
  return new Promise((resolve, reject) => {
    getNumber(resolve);
  });
}

const promise = getNumberPromise();
promise.then((n) => console.log("Promise", n));