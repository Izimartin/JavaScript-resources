import fecth from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(data => console.log(user.title))

console.log('Synchronous 1');
 