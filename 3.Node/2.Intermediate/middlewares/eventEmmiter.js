const EventEmitter = require('events');
const { logEvents } = require('./logger-middleware');

class MyEmitter extends EventEmitter {};

const myEmitter = new EventEmitter();

// add listener to log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted');
}, 2000);