import React from "react";
import Input from "../components/input";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/locationSlice";
import { categoryData } from "../features/categorySlice";

export default function LocationEditForm({ closeModal }) {
  const CategoryData = useSelector(categoryData);

  console.log(CategoryData);

  return <form></form>;
}
