import React, { useState } from "react";
import { Input } from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { locationData, edit } from "../redux_utils/locationSlice";
import { categoryData } from "../redux_utils/categorySlice";

function LocationEditForm({ close, locationID }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [category, setCategory] = useState("");

  const CategoryData = useSelector(categoryData);
  const LocationList = useSelector(locationData);
  console.log(LocationList);
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
    <form>
      <Input
        class_name="w-100 mb-3 input"
        placeholder="name"
        type="text"
        action={(e) => setName(e.target.value)}
        value={name}
      />

      <Input
        class_name="w-100 mb-3 input"
        placeholder="address"
        type="text"
        action={(e) => setAddress(e.target.value)}
        value={address}
      />

      <Input
        class_name="w-100 mb-3 input"
        placeholder="coordinate"
        type="text"
        action={(e) => setCoordinate(e.target.value)}
        value={coordinate}
      />

      <select
        className="w-100  mb-2 input"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {CategoryData.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button onClick={updateLocation()} className="btn btn-primary me-2">
        Submit
      </button>
      <button onClick={close} className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
}

export default LocationEditForm;
