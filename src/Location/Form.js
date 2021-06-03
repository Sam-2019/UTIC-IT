import React, { useState } from "react";
import { v1 as uuid } from 'uuid';
import { Input } from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux_utils/locationSlice";
import { categoryData } from "../redux_utils/categorySlice";

export default function LocationForm({ close }) {
  const CategoryData = useSelector(categoryData);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinate] = useState("");
  const [category, setCategory] = useState(CategoryData[0].name);

  const onSubmit = () => {
    const data = {
      id: uuid(),
      name,
      address,
      coordinates,
      category,
    };

    dispatch(add(data));
    close();
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
        placeholder="coordinates"
        type="text"
        action={(e) => setCoordinate(e.target.value)}
        value={coordinates}
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

      <button onClick={onSubmit}>Submit</button>
      <button onClick={close}>Cancel</button>
    </form>
  );
}
