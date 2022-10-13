// The primary intention to ask this question is to understand how much clarity
// the interviewee has on object prototyping and its best practices. 
// A sample array filter function polyfill is given below.

Array.prototype.myFilter = function (callback, context) {
    if (typeof callback !== 'function') {
        throw new Error('callback must be a function');
    }
    const arr = [];
    for (let i = 0, len = this.length; i < len; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
};

const result = [10, 20, 30, 0, 40].myFilter(function (val) {
    return val >= 30;
});

console.log(result);
// Sometimes, alongside this question, I used to ask the difference between the prototype
// and __proto__ and drag the conversation in detail.