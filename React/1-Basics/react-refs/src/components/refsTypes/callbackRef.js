import React from 'react';

class App extends React.Component {
    handleClick = () => {
        this.password.focus();
        console.log(this.password.value);
    }

    handleEmailRef = (el) => {
        this.email = el;
    }

    handlePasswordRef = (el) => {
        this.password = el;
    }

    render() {
        return (
            <div>
                <h1>callbackRef</h1>
                <input
                    type="email"
                    placeholder="email"
                    ref={this.handleEmailRef}
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    ref={this.handlePasswordRef}
                />
                <br />

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default App;
