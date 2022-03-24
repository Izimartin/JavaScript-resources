import React from "react";
import Ciclo from "./ciclo";

class App extends React.Component {
  constructor(props) {
    super(props);

    tihs.state = {
      montar: true,
      valor: 1,
    };

    setInterval(() => {
      this.setState({ valor: Math.random() > 0.5 ? 1 : 2 });
    }, 2000);
  }

  render() {
    const { montar, valor } = this.state;

    return (
      <React.Fragment>
        {montar && <Ciclo valor={valor} />}
        <button onClick={() => this.setState({ montar: !montar })}>
          toogle montar
        </button>
      </React.Fragment>
    );
  }
}

export default App;
