import React, { useState } from "react";

import ItemList from "../components/Item_List";
import PopUp from "../Modal/Modal";
import Add from "./Add";
import NoData from "../components/NoData";

import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { locationData } from "../redux_utils/locationSlice";

const Location = () => {
  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);

  let viewData;

  if (LocationList.length === 0) {
    viewData = <NoData />;
  }

  if (LocationList.length > 0) {
    viewData = (
      <>
        {LocationList.map((data, index) => (
          <ItemList key={index} data={data} path="location" />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="page_header">
        <h1>Locations</h1>

        <Button color="success" onClick={() => setModal(true)}>
          Add
        </Button>
      </div>

      {viewData}

      {modal && (
        <PopUp>
          <h5>Add Location</h5>
          <Add
            close={() => {
              setModal(false);
            }}
          />
        </PopUp>
      )}
    </>
  );
};

export default Location;
