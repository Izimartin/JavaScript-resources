// const employee = {
//     hasOwnProperty:()=> {
//       return false
//     }
//   }
//   obj.hasOwnProperty('prop'); // false

const employee = {
    name: 'Grace',
    age: 18
}
Object.hasOwn(employee, 'name'); // true
Object.hasOwn(employee, 'position'); // false