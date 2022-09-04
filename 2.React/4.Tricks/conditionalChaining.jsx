export default function App() {
const personA = {
    name: 'Sharon',
    age: '15',
 };

const personB = {
    name: 'Brealy',
    age: '26',
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