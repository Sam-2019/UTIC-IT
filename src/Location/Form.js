import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input {...register("address", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input {...register("coordinated", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input {...register("category", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
