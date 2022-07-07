const students = [
    { email: '@gmail.com' },
    { email: '@gmail.com' },
    { email: '@gmail.com' },
    { email: '@gmail.com' },
    { email: '@gmail.com' },
    { email: '@gmail.com' },
];
// normalize function

// const serializeStudents = students.map(function (student) {
//     student.email = student.email = student.email.toLocaleLowerCase();
//     return student;
// });

const serializeStudents = student => {
    student.email = student.email = student.email.toLocaleLowerCase();
    return student;
};

const serializedStudents = students.map(serializeStudents);

console.log(serializedStudents)