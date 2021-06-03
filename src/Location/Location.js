import React, { useState } from "react";
import { Button } from "reactstrap";
import { Location as LocationList } from "./model";
import LocationItem from "./locationItem";
import ModalItem from "../Modal/Modal";
import Form from "./Form";

const Location = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const addLocation = (id, name, address, coordinates, category) => {
    const newLocations = [
      ...data,
      { id, name, address, coordinates, category }
    ];
    setData(newLocations);
  };

  const removeLocation = (index) => {
    const newLocations = [...data];
    newLocations.splice(index, 1);
    setData(newLocations);
  };

  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="page_header">
        <h2>Locations</h2>
        <Button color="success" onClick={toggle}>
          Add
        </Button>
      </div>

      {LocationList.sort().map((item, index) => (
        <LocationItem key={index} {...item} removeLocation={removeLocation} />
      ))}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form addLocation={addLocation} />
      </ModalItem>
    </>
  );
};

export default Location;
