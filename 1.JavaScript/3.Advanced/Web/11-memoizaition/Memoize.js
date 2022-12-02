// Memoization is a programming technique that attempts to increase a function's performance by caching its previously 
// computed results if it finds similar function parameters received. This is a very well-known and beneficial approach
//  considered to improve performance. My ask is to write a simple program to mock this memoization behavior. 
//  I could write a simple version of it as follows.

const memoize = (callback) => {
    const cache = {};

    return (...args) => {
        let stringfiedArgs = JSON.stringify(args);
        const result = cache[stringfiedArgs] || callback(...args);

        cache[stringfiedArgs] = result;
        return result;
    };
};

const add = (x, y) => x + y;
const memoizedAdd = memoize(add);

memoizedAdd(3, 4); // 7
memoizedAdd(3, 4); // 7 (Come from cached data

// I avoid asking direct data structure-related questions that could have been memorized and answered.
// Instead, I emphasize understanding the interviewee's expertise to develop a data structure and writing logic for the same.
// That's the reason I keep asking this question in the interview.

