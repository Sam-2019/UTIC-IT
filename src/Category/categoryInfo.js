import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

import EditForm from "./EditForm";
import LocationItem from "../Location/locationItem";

import PopUp from "../Modal/Modal";

import { useSelector, useDispatch } from "react-redux";
import { locationData } from "../redux_utils/locationSlice";
import {  remove } from "../redux_utils/categorySlice";

const CategoryInfo = () => {
  let { id } = useParams();

  const [modal, setModal] = useState(false);

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
          <Button color="secondary" onClick={() => setModal(true)}>
            Edit
          </Button>{" "}
          <Button color="danger" onClick={() => dispatch(remove(id))}>
            Remove
          </Button>
        </div>
      </div>

      {viewData}

      {modal ? (
        <PopUp>
          <EditForm
            close={() => {
              setModal(false);
            }}
          />
        </PopUp>
      ) : null}
    </>
  );
};

export default CategoryInfo;
