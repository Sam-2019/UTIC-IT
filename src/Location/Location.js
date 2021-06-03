import React, { useState } from "react";
import { Button } from "reactstrap";
import LocationItem from "./locationItem";
import ModalItem from "../Modal/Modal";
import Form from "./Form";

import { useSelector } from "react-redux";
import { locationData } from "../features/locationSlice";

const Location = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const LocationList = useSelector(locationData);

  return (
    <>
      <div className="page_header">
        <h2>Locations</h2>
        <Button color="success" onClick={toggle}>
          Add
        </Button>
      </div>

      {LocationList.map((item, index) => (
        <LocationItem key={index} {...item} />
      ))}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form closeModal={toggle} />
      </ModalItem>
    </>
  );
};

export default Location;
