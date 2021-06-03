import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";
import ModalItem from "../Modal/Modal";
import Form from "./Form";

import { useSelector, useDispatch } from "react-redux";
import { locationData, remove } from "../features/locationSlice";

const LocationInfo = (props) => {
  let { id } = useParams();
  const { className } = props;

  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);
  const FilteredList = LocationList.filter((result) => result.name === id);
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  let viewData;

  if (FilteredList.length === 0) {
    viewData = <> No data yet</>;
  }

  if (FilteredList.length > 0) {
    viewData = (
      <>
        <div key={FilteredList[0].id}>
          <p>{FilteredList[0].address}</p>
          <p>{FilteredList[0].coordinates}</p>
          <p>{FilteredList[0].category}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="page_header">
        <p>{id}</p>

        <div className="page_header_action">
          <Button color="secondary" onClick={toggle}>
            Edit
          </Button>{" "}
          <Button color="danger" onClick={() => dispatch(remove(id))}>
            Remove
          </Button>
        </div>
      </div>

      {viewData}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form closeModal={toggle} />
      </ModalItem>
    </>
  );
};

export default LocationInfo;
