console.log('Synchronous 1');
setTimeout(_ => console.log('TimeOut 2'), 0);
Promise.resolve().then(_ => console.log('Promise 3'));
console.log('Synchronous 4');
