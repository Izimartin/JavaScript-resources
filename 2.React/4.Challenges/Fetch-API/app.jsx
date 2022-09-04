import React, { useState, useEffect } from 'react';
import User from "./components/User";

const handleSelectUser = (userId) => {
    console.log("User selected: ", userId)
}

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {

        async function getUsers() {
            const result = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await result.json();
            setUsers(response);
        }

        getUsers()

    }, []);
console.log(users)
// Key is necessary because SERVER will return a unique ID for each user in the response.
return (
    <div>
        {users && users.lenght > 0 ? users.map((user) => <User key={user.id} {...user} onClick={handleSelectUser} />) : <h1>Loading...</h1>}
    </div>
    );
}

export default App;