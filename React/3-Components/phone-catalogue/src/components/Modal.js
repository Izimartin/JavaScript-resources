import React from "react";
import { Modal, ModalHeader, ModalBody, Table } from "reactstrap";
import PropTypes from "prop-types";
import "./Modal.css";

const ModalComponent = (props) => {
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
    isVisible,
    setVisible,
  } = props;
  const toggle = () => setVisible();

  return (
    <Modal
      isOpen={isVisible}
      toggle={toggle}
      size="lg"
      data-test="modalComponent"
    >
      <ModalHeader toggle={toggle} />
      <ModalBody>
        <div className="modal-body">
          <div className="modal-img" data-set="modal-img">
            <img
              src={process.env.PUBLIC_URL + `images/${imageFileName}`}
              data-test="modalImage"
              alt="img"
            />
          </div>
          <div className="modal-description" data-test="modalDescription">
            <h5 datat-test="modalName">{name}</h5>
            <p>{manufacturer}</p>
            <p>{description}</p>
            <p className="modal-price">{price} €</p>

            <Table bordered>
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{color}</td>
                </tr>
                <tr>
                  <td>screen</td>
                  <td>{screen}</td>
                </tr>
                <tr>
                  <td>processor</td>
                  <td>{processor}</td>
                </tr>
                <tr>
                  <td>ram</td>
                  <td>{ram}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

ModalComponent.propTypes = {
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
  isVisible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default ModalComponent;
