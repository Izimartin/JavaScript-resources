import React, { Component, Fragment } from "react";
import Controlled from "./controlled";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "",
      type: "",
    };
  }

  render() {
    const { size, type } = this.state;

    return (
      <Fragment>
        <Controlled
          size={size}
          type={type}
          onChangesize={(size) => {
            this.setState({ size });
          }}
          onChangeSize={(type) => {
            this.setState({ size });
          }}
          onChangeType={(type) => {
            this.setState({ type });
          }}
          onClickAccept={(type) => {
            console.log('Contolled', this.state);
          }}
        />
        <UnControlled
          onClickAccept={(data) => {
            console.log('UnContolled',(data);
          }}
        />
      </Fragment>
    );
  }
}

export default App;
