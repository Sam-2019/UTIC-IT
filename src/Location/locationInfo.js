import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

import Edit from "./Edit";
import PopUp from "../Modal/Modal";
import NoData from "../components/NoData";

import { useSelector, useDispatch } from "react-redux";
import { locationData, remove } from "../utils/redux/locationSlice";
import { GetCoordinates } from "../utils/getCoordinates";

const LocationInfo = () => {
  let { id } = useParams();
  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);

  const data = GetCoordinates(id);

  console.log(data);

  const FilteredList = data.filter;
  const Latitude = data.latitude;
  const Longitude = data.longitude;

  console.log(FilteredList);

  const dispatch = useDispatch();

  let viewData;

  // if (FilteredList) {
  //    viewData = <NoData />;
  //  }

  if (locationData) {
    viewData = (
      <>
        <div key={FilteredList.id}>
          <p>{FilteredList.address}</p>
          <div className="page_header">
            <p>{FilteredList.coordinates} </p>
            <a href={` https://maps.google.com/?q=${Latitude}, ${Longitude}  `}>
              View on Google Maps{" "}
            </a>
          </div>
          <p>{FilteredList.category}</p>
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
          {/* <Button
            color="danger"
            onClick={() => dispatch(remove(FilteredList.id))}
          >
            Remove
          </Button> */}
        </div>
      </div>

      {viewData}

      {modal && (
        <PopUp>
          {/* <Edit
            close={() => {
              setModal(false);
            }}
            locationID={FilteredList.id}
          /> */}
        </PopUp>
      )}
    </>
  );
};

export default LocationInfo;
