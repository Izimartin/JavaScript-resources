import React from 'react';

const Button = React.forwardRef((props, ref) => (
    <div ref={ref.div} className="button">
        <button ref={ref.button}><span>Button</span></button>
        <br />
    </div>
));

class App extends React.Component {
    buttonFunctionRef = React.createRef();
    divFunctionRef = React.createRef();

    handleClick = () => {
        console.log(this.buttonFunctionRef);
        console.log(this.divFunctionRef);
    }

    render() {
        return (
            <div>
                <h1>functional</h1>
                <Button
                    ref={{
                        button: this.buttonFunctionRef,
                        div: this.divFunctionRef
                    }}
                />
                <br />

                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}

export default App;
