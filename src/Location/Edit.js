import React, { useState } from "react";
import Form from "./Form";

import { useSelector, useDispatch } from "react-redux";
import { edit } from "../redux_utils/locationSlice";
import { categoryData } from "../redux_utils/categorySlice";

function LocationEditForm({ close, locationID }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [category, setCategory] = useState("");

  const CategoryData = useSelector(categoryData);
  const dispatch = useDispatch();

  const updateLocation = () => {
    const data = {
      id: locationID,
      name,
      address,
      coordinate,
      category
    };
    dispatch(edit(data));
  };

  return (
    <Form
      name={name}
      nameOnChange={(e) => setName(e.target.value)}
      address={address}
      addressOnChange={(e) => setAddress(e.target.value)}
      coordinates={coordinate}
      coordinatenChange={(e) => setCoordinate(e.target.value)}
      category={category}
      categoryOnChange={(e) => setCategory(e.target.value)}
      submit={updateLocation}
      close={close}
      categoryData={CategoryData}
    />
  );
}

export default LocationEditForm;
