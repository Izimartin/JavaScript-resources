// L1
console.log('🥪 Synchronous 1');

// L2
setTimeout(_ => console.log(`🍅 Timeout 2`), 2000);

// L3
Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// L4
console.log('🥪 Synchronous 4');
