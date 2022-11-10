import { React, Fragment } from "react";

function Controlled(props) {
  const { size, type, onChangeSize, onChangeType, onClickAccept, } = props;

  return (
    <Fragment>
      <h1>Hamburguer</h1>
      <h3>Size:</h3>
      <ul>
        <li>
          <input
            onChange={e => onChangeSize(e.target.value)}
            checked={size === "small"}
            value="small"
            type="radio"
          />
          Small
        </li>
        <li>
          <input
            onChange={e => onChangeSize(e.target.value)}
            checked={size === "medium"}
             value="medium"
            type="radio"
          />
          Medium
        </li>
        <li>
          <input
            onChange={e => onChangeSize(e.target.value)}
            checked={size === "big"}
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
            onChange={e => onChangeType(e.target.value)}
            checked={type === "chicken"}
             value="chicken"
            type="radio"
          />
          Chicken
        </li>
        <li>
          <input
            onChange={e => onChangeType(e.target.value)}
            checked={type === "cow"}
             value="cow"
            type="radio"
          />
          Cow
        </li>
        <li>
          <input
            onChange={e => onChangeType(e.target.value)}
            checked={type === "pork"}
             value="pork"
            type="radio"
          />
          Pork
        </li>
      </ul>
      <button onClick={onClickAccept}>Accept</button>
    </Fragment>
  );
}

export default Controlled;
