import React, { useEffect, useState } from 'react';
/** 
  Challenge: Given the url above, make this app fetch the data and display them in the browser
  Add a button to clean the data.
**/
export default function Api() {
    const [user, setUser] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users/1';

    useEffect(() => {
        //Fetch API to be able retrieve REST API data in Json format, then print in the UI
        fetch(url)
            .then((response) => response.json())
            .then((user) => console.log(user))
            .then(setUser(user));
    });

    return ( <
        div className = "Api" >
        <
        h2 > User Data < /h2> <
        div >
        <
        p >
        <
        strong > Name: {} < /strong> <
        /p> <
        p >
        <
        strong > Website: {} < /strong> <
        /p> <
        p >
        <
        strong > Email: {} < /strong> <
        /p> <
        p >
        <
        strong > Phone: {} < /strong> <
        /p> <
        /div> { /* <button onClick={SetUsers(users = [])}>Clear User Data</button> */ } <
        /div>
    );
}
1