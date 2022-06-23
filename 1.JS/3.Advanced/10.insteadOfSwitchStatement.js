const extension = '/';

const entensionObj = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'text/json',
    '.jpg': 'text/jpeg',
    '.png': 'text/ong',
    '.txt': 'text/plain',
    s
}

const myMap = new Map();

myMap.set('.css', 'text/css')
myMap.set('.json', 'application/json')

console.log(myMap.get(extension) || 'text/html')