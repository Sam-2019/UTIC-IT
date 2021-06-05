import React from "react";
import { Input } from "../components/input";

export default function Form({
  name,
  nameOnChange,
  address,
  addressOnChange,
  coordinates,
  coordinatenChange,
  category,
  categoryOnChange,
  submit,
  close,
  categoryData
}) {
  return (
    <form>
      <Input
        class_name="w-100 mb-3 input"
        placeholder="name"
        type="text"
        action={nameOnChange}
        value={name}
      />

      <Input
        class_name="w-100 mb-3 input"
        placeholder="address"
        type="text"
        action={addressOnChange}
        value={address}
      />

      <Input
        class_name="w-100 mb-3 input"
        placeholder="coordinates"
        type="text"
        action={coordinatenChange}
        value={coordinates}
      />

      <select
        className="w-100  mb-2 input"
        value={category}
        onChange={categoryOnChange}
      >
        {categoryData.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button onClick={submit} className="btn btn-primary me-2">
        Submit
      </button>
      <button onClick={close} className="btn btn-danger me-2">
        Cancel
      </button>
    </form>
  );
}
