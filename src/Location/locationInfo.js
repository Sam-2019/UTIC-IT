import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";
import ModalItem from "../Modal/Modal";
import Form from "./Form";
import { Location as locationData } from "./model";

const LocationInfo = (props) => {
  let { id } = useParams();
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="page_header">
        <p>{id}</p>

        <div className="page_header_action">
          <Button color="secondary" onClick={toggle}>
            Edit
          </Button>{" "}
          <Button color="danger">Remove</Button>
        </div>
      </div>

      {locationData.filter((result) => console.log(result))}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form />
      </ModalItem>
    </>
  );
};

export default LocationInfo;
