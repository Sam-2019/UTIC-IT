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
      category,
    };
    dispatch(edit(data));
  };

  return (
    <form>
      <Input
        class_name="w-100 mb-3"
        placeholder="name"
        type="text"
        action={(e) => setName(e.target.value)}
        value={name}
      />

      <Input
        class_name="w-100 mb-3"
        placeholder="address"
        type="text"
        action={(e) => setAddress(e.target.value)}
        value={address}
      />

      <Input
        class_name="w-100 mb-3"
        placeholder="coordinate"
        type="text"
        action={(e) => setCoordinate(e.target.value)}
        value={coordinate}
      />

      <select
        className="w-100  mb-2"
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

      <button onClick={updateLocation()}>Submit</button>
      <button onClick={close}>Cancel</button>
    </form>
  );
}

export default LocationEditForm;
