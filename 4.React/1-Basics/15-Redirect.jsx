import React from "react";
import { withRouter } from "react-router-dom";

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
