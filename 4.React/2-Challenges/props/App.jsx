import React, { Component } from "react";

class App extends Component {
    render() {
        const { titulo, edad } = this.props;

        return(
            <div>
                {titulo}
                <h1>Hello Class component{edad}</h1>
            </div>
        );
    }
}

function App2(props) {
    const { titulo, edad } = props;

    return (
        <div>
            {titulo}
            <h1>Hello Functional Component { edad }</h1>
        </div>
    );
}

export default App2;