import React, { useState } from "react";
import Input from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/locationSlice";
import { categoryData } from "../features/categorySlice";

export default function LocationEditForm({ closeModal }) {
  const CategoryData = useSelector(categoryData);

  console.log(CategoryData);

  const [item, setItem] = useState("");

  return (
    <form>
      <Input
        class_name="input"
        placeholder="Password"
        type="text"
        action={(e) => setItem(e.target.value)}
        value={item}
        autocomplete="Password"
      />
    </form>
  );
}
