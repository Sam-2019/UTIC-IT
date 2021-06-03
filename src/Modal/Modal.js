import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalItem = ({ className, currentState, toggle, children }) => {
  return (
    <>
      <Modal isOpen={currentState} toggle={toggle} className={className}>
        {children}
      </Modal>
    </>
  );
};

export default ModalItem;
