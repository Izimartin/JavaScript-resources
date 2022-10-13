const array = [1,2,3,4,5,6];

// const duplicado = array.map((valor, indice, array, referenciaArray) => {
//     referenciaArray
// })
 
const duplicado = array.map((valor) => {
    return valor * 2
});

const students = [
  { name: "Brealy", email: "BrealY@gmail.com" },
  { name: "Fabian", email: "faBian@gmail.com" },
  { name: "Sarah", email: "saRaH@gmail.com" },
];
 
const SerializeStudent = student => {
    student.email = student.email.toLocaleLowerCase();
    return student;
}
const serializedStudents = students.map(SerializeStudent)

console.log(array)
console.log(duplicado);
console.log(serializedStudents);
