import React from "react";

export const UncontrolledForm= () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();

    const handleSubmit = () => {
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" ref={nameInput} />
            <input type="number" name="age" placeholder="Age" ref={ageInput} />
            <input type="text" name="hariColor" placeholder="Age" ref={hairColorInput} />
            <input type="submit" value="Submit" placeholder="Hair Color" />
        </form>
    )
}