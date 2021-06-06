import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

import Edit from "./Edit";
import PopUp from "../Modal/Modal";
import NoData from "../components/NoData";

import { useSelector, useDispatch } from "react-redux";
import { locationData, remove } from "../utils/redux/locationSlice";
import { getCoordinates } from "../utils/getCoordinates";

const LocationInfo = () => {
  let { id } = useParams();

  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);

  const Latitude = getCoordinates(LocationList, id).latitude;
  const Longitude = getCoordinates(LocationList, id).longitude;

  const dispatch = useDispatch();

  let viewData;

  // if (FilteredList.length === 0) {
  //   viewData = <NoData />;
  // }

  // if (FilteredList.length > 0) {
  //   viewData = (
  //     <>
  //       <div key={FilteredList[0].id}>
  //         <p>{FilteredList[0].address}</p>

  //         <div className="page_header">
  //           <p>{FilteredList[0].coordinates} </p>

  //           <a href={` https://maps.google.com/?q=${Latitude}, ${Longitude}  `}>
  //             View on Google Maps{" "}
  //           </a>
  //         </div>

  //         <p>{FilteredList[0].category}</p>
  //       </div>
  //     </>
  //   );
  // }

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
            onClick={() => dispatch(remove(FilteredList[0].id))}
          >
            Remove
          </Button> */}
        </div>
      </div>

      {viewData}

      {modal && (
        <PopUp>
          <Edit
            close={() => {
              setModal(false);
            }}
            // locationID={FilteredList[0].id}
          />
        </PopUp>
      )}
    </>
  );
};

export default LocationInfo;
