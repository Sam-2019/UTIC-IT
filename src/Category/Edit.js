import React, { useState } from "react";
import CategoryForm from "./Form";

import { useDispatch } from "react-redux";
import { edit } from "../redux_utils/categorySlice";

function CategoryEditForm({ close }) {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const updateCategory = () => {
    const data = {
      name
    };

    dispatch(edit(data));
  };

  return (
    <CategoryForm
      onChange={(e) => setName(e.target.value)}
      value={name}
      action={updateCategory()}
      close={close}
    />
  );
}

export default CategoryEditForm;
