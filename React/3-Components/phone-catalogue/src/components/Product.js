import React, { useState } from "react";
import Modal from "./Modal";
import PropTypes from "prop-types";
import "./Product.css";

const Product = (props) => {
  const {
    id,
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = props;

  const [visible, setVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const toggleModal = (e) => {
    if (e.target.className !== "avoid-modal") setVisible(true);
  };

  return (
    <div
      className="product-container"
      data-test="productComponent"
      onClick={(e) => toggleModal(e)}
    >
      {imageLoading ? (
        <div
          className="product-div-loading"
          data-test="product-div-loading"
          style={{
            background: "rgb(250, 250, 250)",
            height: "200px",
            width: "90%",
            margin: "auto",
            marginTop: "10px",
          }}
        />
      ) : null}
      <img
        style={imageLoading ? { display: "none" } : {}}
        data-test="product-image"
        className="product-image"
        src={process.env.PUBLIC_URL + `images/${imageFileName}`}
        alt="img"
        onLoad={() => setImageLoading(false)}
      />
      <p data-test="product-name">{name}</p>
      <p data-test="product-price">{price} €</p>
      <Modal
        key={id}
        id={id}
        name={name}
        manufacturer={manufacturer}
        description={description}
        color={color}
        price={price}
        imageFileName={imageFileName}
        screen={screen}
        processor={processor}
        ram={ram}
        isVisible={visible}
        setVisible={() => setVisible(!visible)}
      />
    </div>
  );
};

Product.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageFileName: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
};

export default Product;
