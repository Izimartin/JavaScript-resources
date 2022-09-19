import React from 'react';

class App extends React.Component {
    emailRef = React.createRef();
    passwordRef = React.createRef();

    state = {
        show: true
    }

    handleClick = () => {
        this.setState({ show: false });
        console.log(this.passwordRef.current);
        if (this.passwordRef.current) {
            this.passwordRef.current.focus();
        }
    }

    render() {
        return (
            <div>
                <h1>createRef</h1>
                <input
                    type="email"
                    placeholder="email"
                    ref={this.emailRef}
                />
                <br />
                {this.state.show && <input
                    type="password"
                    placeholder="password"
                    ref={this.passwordRef}
                />}
                <br />

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default App;
