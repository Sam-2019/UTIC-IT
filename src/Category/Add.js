import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import CategoryForm from "./newForm";

import { useDispatch } from "react-redux";
import { add } from "../redux_utils/categorySlice";

export default function CategoryInput({ close }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const onSubmit = () => {
    let empty = name;

    if (empty === "") {
      return;
    }

    if (empty !== "") {
      const data = {
        id: uuid(),
        name
      };

      dispatch(add(data));
      close();
    }
  };

  return (
    <CategoryForm
      onChange={(e) => setName(e.target.value)}
      value={name}
      action={onSubmit}
      close={close}
    />
  );
}
