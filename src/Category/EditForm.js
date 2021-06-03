import React, { useState } from "react";
import { Input } from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { categoryData, edit } from "../features/categorySlice";

function CategoryEditForm({ closeModal }) {
  const [name, setName] = useState("");

  const CategoryList = useSelector(categoryData);
  const dispatch = useDispatch();

  const updateCategory = () => {
    dispatch(edit(name));
  };

  return (
    <form>
      <Input
        class_name="w-100 mb-3"
        placeholder="Password"
        type="text"
        action={(e) => setName(e.target.value)}
        value={name}
        autocomplete="Password"
      />

      <button onClick={() => updateCategory()}>Submit</button>
      <button onClick={closeModal}>Cancel</button>
    </form>
  );
}

export default CategoryEditForm;
