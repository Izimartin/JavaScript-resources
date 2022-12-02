export default function ConditionalChain() {
const personA = {
    name: 'Brealy',
    age: '26',
 };

const personB = {
    name: 'Fabian',
    age: '27',
    drinkBeer: () => {
        console.log('drinking beer is nice!');
    }
 };
// create array of objects
 const people = [personA, personB];

 // iterate each object item in people variable

people.forEach(
    (person) => {
        console.log(person.name);
        console.log(person.age);
        person?.drinkBeer?.();
    }  
);

return <div></div>
}