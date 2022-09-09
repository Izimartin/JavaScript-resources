// The filrer() method created a new array with aray elements that passes a test.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: ["exuberant", "destruction", "present"]
