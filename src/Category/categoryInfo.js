import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

import ItemList from "../components/Item_List";
import NoData from "../components/NoData";

import PopUp from "../Modal/Modal";
import Edit from "./Edit";

import { useSelector, useDispatch } from "react-redux";
import { locationData } from "../utils/redux/locationSlice";
import { remove } from "../utils/redux/categorySlice";

const CategoryInfo = () => {
  let { id } = useParams();

  const [modal, setModal] = useState(false);

  const LocationList = useSelector(locationData);
  const FilteredList = LocationList.filter((result) => result.category === id);
  const dispatch = useDispatch();

  let viewData;

  if (FilteredList.length === 0) {
    viewData = <NoData />;
  }

  if (FilteredList.length > 0) {
    viewData = (
      <>
        {FilteredList.map((data, index) => (
          <div key={index}>
            <ItemList key={index} data={data} path="location" />
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

      {modal && (
        <PopUp>
          <Edit
            close={() => {
              setModal(false);
            }}
            categoryID={id}
          />
        </PopUp>
      )}
    </>
  );
};

export default CategoryInfo;
