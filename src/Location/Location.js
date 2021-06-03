import React, { useState } from "react";
import { Button } from "reactstrap";
import { Location as LocationList } from "./model";
import LocationItem from "./locationItem";
import ModalItem from "../Modal/Modal";
import Form from "./Form";

const Location = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const sortedLocationList = LocationList.sort((a, d) => d.name - a.name);
  console.log(sortedLocationList);

  return (
    <>
      <div className="page_header">
        <h2>Locations</h2>
        <Button color="success" onClick={toggle}>
          Add
        </Button>
      </div>

      {LocationList.sort().map((item, index) => (
        <LocationItem key={index} {...item} />
      ))}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form />
      </ModalItem>
    </>
  );
};

export default Location;
