import React, { useState } from "react";
import { Button } from "reactstrap";
import ItemList from "../components/Item_List";
import PopUp from "../Modal/Modal";
import Form from "./Form";
import Edit from "./Edit";

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

      {modal ? (
        <PopUp>
          <h5>Add Location</h5>
          <Edit
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
