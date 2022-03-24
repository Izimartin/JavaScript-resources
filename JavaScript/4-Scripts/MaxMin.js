// This is a simple but tricky problem to resolve. 
// The difficulty is, Math.max() or Math.min() function accepts n-number of parameters as input, not an array. 
// So you have to find a way to convert an array into n-number of parameters to pass the same to the max or min function. 
// The solution is as follows:

const arr = [10, 50, 30, 100, 40, 60];
Math.max.apply(null, arr);

// Generally, interviewers ask the differences between call, apply, and bind functions. 
// That is a very straightforward and theoretical question that lacks the real-time application of the same. 
// That's why I avoid asking this question and molded the same in such a way that it motivates the interviewee to think differently. 