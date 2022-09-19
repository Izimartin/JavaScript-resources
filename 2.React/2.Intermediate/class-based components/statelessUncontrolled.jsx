import React, { Component, Fragment } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termino: "",
    };
  }

  render() {
    const { termino } = this.state;

    return (
      <Fragment>
        {/* Buscar: <input value="hola" /> controlled component */}
        Buscar:{""}
        <input
          value={termino}
          onChange={(e) => this.setState({ termino: e.target.value })}
        />
        <hr />
        <h3>tu termino de busqueda "{termino}" no tiene resultados</h3>
        <button onClick={() => this.state({ termino: "" })}>Reiniciar</button>
      </Fragment>
    );
  }
}

export default App;
