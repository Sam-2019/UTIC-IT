import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

import EditForm from "./EditForm";

import PopUp from "../Modal/Modal";

import { useSelector, useDispatch } from "react-redux";
import { locationData, remove } from "../redux_utils/locationSlice";

const LocationInfo = () => {
  let { id } = useParams();

  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);
  const FilteredList = LocationList.filter((result) => result.name === id);

  var splitCoordinates = FilteredList[0].coordinates;
  var newCoordinates = splitCoordinates.split(",");

  const Latitude = Number(newCoordinates[0]);
  const Longitude = Number(newCoordinates[1]);

  const dispatch = useDispatch();

  let viewData;

  if (FilteredList.length === 0) {
    viewData = <> No data yet</>;
  }

  if (FilteredList.length > 0) {
    viewData = (
      <>
        <div key={FilteredList[0].id}>
          <p>{FilteredList[0].address}</p>

          <div className="page_header">
            <p>{FilteredList[0].coordinates} </p>

            <a href={` https://maps.google.com/?q=${Latitude}, ${Longitude}  `}>
              View on Google Maps{" "}
            </a>
          </div>

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
          <Button color="secondary" onClick={() => setModal(true)}>
            Edit
          </Button>{" "}
          <Button
            color="danger"
            onClick={() => dispatch(remove(FilteredList[0].id))}
          >
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
            locationID={FilteredList[0].id}
          />
        </PopUp>
      ) : null}
    </>
  );
};

export default LocationInfo;
