import React from "react";
class Render extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0 };
  }
  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
    });
  }
  render() {
    return (
      <div style={{ height: "200vh" }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is ({this.state.x})</p>
      </div>
    );
  }
}

export default Render;
