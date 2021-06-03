import React from "react";
import { useForm } from "react-hook-form";
import { Category as CategoryData } from "../Category/model";

export default function App() {
  console.log(CategoryData);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      </div>
    </form>
  );
}
