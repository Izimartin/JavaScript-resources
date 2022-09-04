import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edad: props.edad,
      titulo: props.titulo,
      clicks: props.clicks,
    };
  }

  render() {
    const { titulo, edad } = this.props;
    const { clicks } = this.state;
    // incrementClick() {
    // }
    return (
      <Fragment>
        <h1>{titulo}</h1>
        <h1>Hello Class component{edad}</h1>
        <br />
        <span>{clicks}</span>
        <button
          onClick={() => {
            console.log("antes", clicks);
            this.setState({ clicks: clicks + 1 }, () => {
              console.log("despues", clicks);
            });
          }}
        >
          Click me
        </button>
      </Fragment>
    );
  }
}

export default App;
