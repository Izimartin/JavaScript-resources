// Decorating an async  API call function:
// Time data requests during development 

let requestData = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(error);
    }
}

const dataResponseTime = (fn) => {
    return async(url) => {
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

const myTestFunction = async() => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('htpps://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

myTestFunction();