import React from "react";
import { Input } from "../components/input";

function CategoryForm({ onChange, value, action, close }) {
  return (
    <form>
      <Input
        class_name="w-100 mb-3 input"
        placeholder="name"
        type="text"
        action={onChange}
        value={value}
      />

      <button onClick={action} className="btn btn-primary me-2">
        Submit
      </button>
      <button onClick={close} className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
}

export default CategoryForm;
