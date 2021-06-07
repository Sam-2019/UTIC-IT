import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";

import Edit from "./Edit";
import PopUp from "../Modal/Modal";
import NoData from "../components/NoData";

import { useSelector, useDispatch } from "react-redux";
import { locationData, remove } from "../utils/redux/locationSlice";

const LocationInfo = () => {
  let { id } = useParams();
  let history = useHistory();
  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({});
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const LocationList = useSelector(locationData);
  //console.log(LocationList)

  useEffect(() => {
    async function LoadData() {
      if (LocationList) {
        const FilterData = await LocationList.filter(
          (result) => result.name === id
        );
        const convertArraytoObject = await Object.assign({}, FilterData[0]);
        console.log(convertArraytoObject);
        const coordinate = await convertArraytoObject.coordinates.split(",");

        setFilter(convertArraytoObject);
        setLatitude(Number(coordinate[0]));
        setLongitude(Number(coordinate[1]));
      }
    }
    LoadData();
  }, [LocationList, id]);

  const dispatch = useDispatch();

  function removeItem() {
    dispatch(remove(filter.id));
    history.push("/location");
  }

  let viewData;

  if (filter === null) {
    viewData = <NoData />;
  }

  if (filter) {
    viewData = (
      <>
        <div key={filter.id}>
          <p>{filter.address}</p>
          <div className="page_header">
            <p>{filter.coordinates} </p>
            <a href={`https://maps.google.com/?q=${latitude}, ${longitude}`}>
              View on Google Maps{" "}
            </a>
          </div>
          <p>{filter.category[0].name}</p>
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
          <Button color="danger" onClick={removeItem}>
            Remove
          </Button>
        </div>
      </div>

      {viewData}

      {modal && (
        <PopUp>
          <Edit
            close={() => {
              setModal(false);
            }}
            locationID={filter.id}
          />
        </PopUp>
      )}
    </>
  );
};

export default LocationInfo;
