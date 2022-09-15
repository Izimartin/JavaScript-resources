export default function () {
    // let person = null;
    let person = { name: 'Brealy', age: '26'};

// instead of
    // if (person) {
    //     console.log(person.age);
    // }
// Use 
    console.log(person?.age);
    
    return(
        <div>
            <h1>ifVs?</h1>
        </div>
    );
}

