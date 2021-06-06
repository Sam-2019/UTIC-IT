import React, { useState } from "react";
import { v1 as uuid } from "uuid";

import Form from "./newForm";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux_utils/locationSlice";
import { categoryData } from "../redux_utils/categorySlice";

export default function Add({ close }) {
  const CategoryData = useSelector(categoryData);
  const dispatch = useDispatch();
  console.log(CategoryData);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinate] = useState("");
  const [category, setCategory] = useState(CategoryData[0].name);

  const onSubmit = () => {
    let empty = name && address && coordinates && category;

    if (empty === "") {
      return;
    }

    if (empty !== "") {
      const data = {
        id: uuid(),
        name,
        address,
        coordinates,
        category
      };

      dispatch(add(data));
      close();
    }
  };

  return (
    <Form
      name={name}
      nameOnChange={(e) => setName(e.target.value)}
      address={address}
      addressOnChange={(e) => setAddress(e.target.value)}
      coordinates={coordinates}
      coordinatenChange={(e) => setCoordinate(e.target.value)}
      category={category}
      categoryOnChange={(e) => setCategory(e.target.value)}
      submit={onSubmit}
      close={close}
      categoryData={CategoryData}
    />
  );
}
