// This is another pet question to assess the interviewee's ability to solve a real-world problem.
// The theory of debouncing says it is a practice for improving browser performance by skipping a few repetitive executions of a piece of code during a given timeframe.
// In this regard, I ask you to write code to mimic this debounce functionality.
// My expected version of this program is as follows.

const debounce = (callback, delay) => {
    let timeout;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), delay);
    };
};

// It's all about passing the caller function's arguments with the proper context and leveraging the well-known timeout function to mimic this.

