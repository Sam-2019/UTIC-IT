import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalItem = ({ className, currentState, toggle, children }) => {
  return (
    <>
      <Modal isOpen={currentState} toggle={toggle} className={className}>
        <ModalHeader>Add Category</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default ModalItem;
