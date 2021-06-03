import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { Input } from "../components/input";

import { useDispatch } from "react-redux";
import { add } from "../redux_utils/categorySlice";

export default function CategoryForm({ close }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const onSubmit = () => {
    const data = {
      id: uuid(),
      name,
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
      <button onClick={onSubmit}>Submit</button>
      <button onClick={close}>Cancel</button>
    </form>
  );
}
