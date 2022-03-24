import React from "react";

class Ciclo extends React.Component {
  constructor(props) {
    super(props);
    //Simple State
    this.state = {
      color: "red",
      valor: "1",
    };

    this.onResize = this.onResize.bind(this);
  }

  onResize(e) {
    const width = e.target.innerwidth;
    const { color } = this.state;

    console.log("onResize", width);

    if (width > 500 && color !== "red") {
      this.setState({ color: "red" });
    } else if (width <= 500 && color !== "green") {
      this.setState({ color: "green" });
    }
  }

  //LifeCycle
  componentDidMount() {
    console.log("componentDidMount");
    windows.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    windows.addEventListener("resize", this.onResize);
  }
  componentDidUpdate(oldProps) {
    console.log("componentDidUpdate");

    console.log("oldProps", oldProps);
      console.log("newProps", this.props);
      
      if (oldProps.valor !== this.props.valor) {
        console.log("valor cambio");
      }
  }

  render() {
    console.log("render");

    const { color } = this.state;
    const { valor } = this.props;

    return (
      <div style={{ backGroundColor: color, padding: "1 rem" }}>
        Hi world
        <h3>valor {valor}</h3>
      </div>
    );
  }
}
export default Ciclo;
