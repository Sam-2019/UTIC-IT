import React from "react";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { add } from "../features/locationSlice";
import { categoryData } from "../features/categorySlice";

export default function LocationForm({ closeModal }) {
  const CategoryData = useSelector(categoryData);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    dispatch(add(data));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} className="w-100 mb-2" />
      {errors.name && <span>This field is required</span>}

      <input
        {...register("address", { required: true })}
        className="w-100  mb-2"
      />
      {errors.address && <span>This field is required</span>}

      <input
        {...register("coordinates", { required: true })}
        className="w-100  mb-2"
      />
      {errors.coordinates && <span>This field is required</span>}

      <select {...register("category")} className="w-100  mb-2">
        {CategoryData.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {errors.category && <span>This field is required</span>}

      <div>
        <input type="submit" />

        <button onClick={() => closeModal()}> Cancel</button>
      </div>
    </form>
  );
}
