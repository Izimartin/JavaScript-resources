import React, { Fragment } from "react";

class UnControlled extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "",
      type: "",
    };
  }

  render() {
    const { onClickAccept } = this.props;

    const { size, type } = this.state;

    return (
      <Fragment>
        <h1>Hamburguer</h1>
        <h3>Size:</h3>
        <ul>
          <li>
            <input
              onChange={(e) => this.setState({ size: e.target.value })}
              checked={size === "small"}
              name="size"
              value="small"
              type="radio"
            />
            Small
          </li>
          <li>
            <input
              onChange={(e) => this.setState({ size: e.target.value })}
              checked={size === "medium"}
              name="size"
              value="medium"
              type="radio"
            />
            Medium
          </li>
          <li>
            <input
              onChange={(e) => this.setState({ size: e.target.value })}
              checked={size === "big"}
              name="size"
              value="big"
              type="radio"
            />
            Big
          </li>
        </ul>

        <h3>Meat:</h3>
        <ul>
          <li>
            <input
              onChange={(e) => this.setState({ type: e.target.value })}
              checked={type === "chicken"}
              name="type"
              value="chicken"
              type="radio"
            />
            Chicken
          </li>
          <li>
            <input
              onChange={(e) => this.setState({ type: e.target.value })}
              checked={type === "cow"}
              name="type"
              value="cow"
              type="radio"
            />
            Cow
          </li>
          <li>
            <input
              onChange={(e) => this.setState({ type: e.target.value })}
              checked={type === "pork"}
              name="type"
              value="pork"
              type="radio"
            />
            Pork
          </li>
        </ul>
        <button onClick={() => onClickAccept(this.state)}>Accept</button>
      </Fragment>
    );
  }
}

export default UnControlled;
