import React, { useState } from "react";
import { Input } from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { locationData, edit } from "../features/locationSlice";

function LocationEditForm({ closeModal }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinate, setCoordinate] = useState("");
  const [category, setCategory] = useState("");

  const LocationList = useSelector(locationData);
  console.log(LocationList);
  const dispatch = useDispatch();

  const updateLocation = () => {
    dispatch(edit(name, address, coordinate, category));
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

      <Input
        class_name="w-100 mb-3"
        placeholder="category"
        type="text"
        action={(e) => setCategory(e.target.value)}
        value={category}
      />

      <button onClick={() => updateLocation()}>Submit</button>
      <button onClick={closeModal}>Cancel</button>
    </form>
  );
}

export default LocationEditForm;
