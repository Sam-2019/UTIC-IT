import React, { useState } from "react";
import Form from "./Form";

import { useDispatch } from "react-redux";
import { edit } from "../utils/redux/categorySlice";

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
    <Form
      onChange={(e) => setName(e.target.value)}
      value={name}
      action={updateCategory}
      close={close}
    />
  );
}

export default CategoryEditForm;
