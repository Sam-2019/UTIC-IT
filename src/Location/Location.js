import React, { useState } from "react";
import { Button } from "reactstrap";
import LocationItem from "./locationItem";
import PopUp from "../Modal/Modal";
import Form from "./Form";

import { useSelector } from "react-redux";
import { locationData } from "../features/locationSlice";

const Location = (props) => {
  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);

  return (
    <>
      <div className="page_header">
        <h2>Locations</h2>
        <Button color="success" onClick={() => setModal(true)}>
          Add
        </Button>
      </div>

      {LocationList.map((item, index) => (
        <LocationItem key={index} {...item} />
      ))}

      {modal ? (
        <PopUp>
          <Form
            close={() => {
              setModal(false);
            }}
          />
          ]
        </PopUp>
      ) : null}
    </>
  );
};

export default Location;
