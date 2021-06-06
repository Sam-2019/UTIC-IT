import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import Form from "./Form";

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
    <Form
      nameOnChange={(e) => setName(e.target.value)}
      name={name}
      submit={onSubmit}
      close={close}
    />
  );
}
