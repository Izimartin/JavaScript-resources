import React from 'react';

class App extends React.Component {
    handleClick = () => {
        this.refs.password.focus();
        console.log(this.refs.password.value);
    }

    render() {
        return (
            <div>
                <h1>stringRef</h1>
                <input
                    type="email"
                    placeholder="email"
                    ref="email"
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    ref="password"
                />
                <br />

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default App;
