import React, { useState } from "react";
import { Input } from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { categoryData, edit } from "../redux_utils/categorySlice";

function CategoryEditForm({ close }) {
  const [name, setName] = useState("");

  const CategoryList = useSelector(categoryData);
  const dispatch = useDispatch();

  const updateCategory = () => {
    const data = {
      name,
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

      <button onClick={updateCategory()}>Submit</button>
      <button onClick={close}> Cancel</button>
    </form>
  );
}

export default CategoryEditForm;
