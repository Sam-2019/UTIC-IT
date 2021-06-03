import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { Input } from "../components/input";

import { useDispatch } from "react-redux";
import { add } from "../redux_utils/categorySlice";

export default function CategoryForm({ close }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
    <form>
      <Input
        class_name="w-100 mb-3 input"
        placeholder="name"
        type="text"
        action={(e) => setName(e.target.value)}
        value={name}
      />

      {message}

      <button onClick={onSubmit} className="btn btn-primary me-2">
        Submit
      </button>
      <button onClick={close} className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
}
