// 8.Executing multiple promises sequentially
// A profound understanding of synchronous and asynchronous programming is essential.
// Based on the seniority of the interviewee, I used to start with a few simple questions as follows:

// What is callback hell?
// How does Promise help to resolve callback help?
// What are the differences between async-await and promise?
// What is observable and how it differs from the promise-based model?
// As per the given answer, I end my discussion on this topic by asking to write a program executing promises synchronously. 
// I used to write down a sample promise function as follows.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Printing sequence; ${num}`);
        }, 1000);
    });
}

// The question is, writing a code that iterates the arr array in such a way that it should print each number one after another with at least a 1000ms time gap. 
// E.g., in the beginning, it should show 1 after 1000ms, followed by another 1000ms, it should show 2, and so on. So, the minimum 1000ms time gap must be there in between two displays. 
// The expected code is as follows.

arr.reduce((acc, currentVal) => {
    return new Promise((resolve) => {
        resolve(acc.then(() => myPromise(currentVal)));
    });
}, Promise.resolve());

// I know it's a bit tricky to use both reduce Array function and Promise together to execute the asynchronous function synchronously.
//  Though you could write the same using the generator function as well.