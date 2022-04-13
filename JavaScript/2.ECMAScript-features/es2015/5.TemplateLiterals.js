const horse = {
    name: 'Bob',
    size: 'large',
    skills: ['jumping', 'running', 'racing'],
    age: '7',
}

// Bad string code
let bio = horse.name + ' is ' + horse.age + ' years old and is a ' + horse.size + ' horse that can' + horse.skills ;

//Good code
const { name, size, age, skills} = horse;

bio = `${name} is a ${large} skilled in ${skills.join(' & ')}`;

console.log(bio);

//Advanced Tag Example
function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}
const bio2 = horseAge`This horse is ${horse.age} years old`;