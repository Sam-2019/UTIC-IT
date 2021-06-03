import React, { useState } from "react";
import { Button } from "reactstrap";
import LocationItem from "./locationItem";
import PopUp from "../Modal/Modal";
import Form from "./Form";

import { useSelector } from "react-redux";
import { locationData } from "../redux_utils/locationSlice";

const Location = (props) => {
  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);

  let viewData;

  if (LocationList.length === 0) {
    viewData = <> No data yet</>;
  }

  if (LocationList.length > 0) {
    viewData = (
      <>
        {LocationList.map((item, index) => (
          <LocationItem key={index} {...item} />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="page_header">
        <h2>Locations</h2>

        <Button color="success" onClick={() => setModal(true)}>
          Add
        </Button>
      </div>

      {viewData}

      {modal ? (
        <PopUp>
          <Form
            close={() => {
              setModal(false);
            }}
          />
        </PopUp>
      ) : null}
    </>
  );
};

export default Location;
