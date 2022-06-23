import React, { useRef } from 'react';

const App = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleClick = () => {
        passwordRef.current.focus();
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <h1>useRef</h1>
            <input
                type="email"
                placeholder="email"
                ref={emailRef}
            />
            <br />
            <input
                type="password"
                placeholder="password"
                ref={passwordRef}
            />
            <br />

            <button onClick={handleClick}>click me</button>
        </div>
    );
};

export default App;
