import React from 'react';

const User = ({
    name,
    id,
    username,
    onClick
    
}) => {
    return (
        <div onClick={() => onClick(id)}>
            <h1>Name: {name}</h1>
            <h2>Username: {username}</h2>
        </div>
    );
};

export default User