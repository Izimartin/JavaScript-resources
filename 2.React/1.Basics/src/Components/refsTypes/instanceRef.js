import React from 'react';

class ButtonClass extends React.Component {
    componentDidMount() {}

    onHandleClick = () => {}

    render() {
        return <button onClick={this.onHandleClick}>button</button>;
    }
}

const ButtonFunction = (props) => (
    <button>button</button>
);

class App extends React.Component {
    buttonClassRef = React.createRef();
    buttonFunctionRef = React.createRef();

    handleClick = () => {
        console.log(this.buttonClassRef);
    }

    render() {
        return (
            <div>
                <h1>instanceRef</h1>
                <ButtonClass ref={this.buttonClassRef} />
                <br />
                <ButtonFunction ref={this.buttonFunctionRef} />
                <br />

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default App;
