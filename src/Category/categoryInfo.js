import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

import ModalItem from "../Modal/Modal";
import EditForm from "./EditForm";
import LocationItem from "../Location/locationItem";

import { ModalHeader, ModalBody } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { locationData, remove } from "../features/locationSlice";

const CategoryInfo = (props) => {
  let { id } = useParams();

  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const LocationList = useSelector(locationData);
  const FilteredList = LocationList.filter((result) => result.category === id);
  const dispatch = useDispatch();

  let viewData;

  if (FilteredList.length === 0) {
    viewData = <> No data yet</>;
  }

  if (FilteredList.length > 0) {
    viewData = (
      <>
        {FilteredList.map((data, index) => (
          <div key={index}>
            <LocationItem {...data} />
          </div>
        ))}
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
        <ModalHeader>Edit Category</ModalHeader>
        <ModalBody>
          <EditForm closeModal={toggle} />
        </ModalBody>
      </ModalItem>
    </>
  );
};

export default CategoryInfo;
