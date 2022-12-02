import React from "react";

class Route extends Component {
  handleClick = () => {
    this.props.history.push("path/to/push");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick} type="button">
          {" "}
          Next Page
        </button>
      </div>
    );
  }
}

export default Route;
