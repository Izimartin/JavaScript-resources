import { useEffect, useState } from "react";

// Prefer it 'cause are more reusable
export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('name must be 2 or more characters')
        } else {
            setNameInputError('');
        }
        
    }, [name, age, hairColor]);

    const handleSubmit = () => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            {nameInputError && <p>{nameInputError}</p>}
            <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" name="age" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
            <input type="text" name="hariColor" placeholder="Age" value={hairColor} onChange={e => setHairColor(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}