// Before (with regex)
const message = 'hello+this+is+a+message';
const messageWithSpace = message.replace(/\+/g, ' ');

// hello this is a message
// After (with new method replaceAll)
const message = 'hello+this+is+a+message';
const messageWithSpace = message.replaceAll('+', ' ')

// hello this is a message