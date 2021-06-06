import React from "react";
import { Input } from "../components/input";

function CategoryForm({ nameOnChange, name, close, submit }) {
  return (
    <form>
      <Input
        class_name="w-100 mb-3 input"
        placeholder="name"
        type="text"
        action={nameOnChange}
        value={name}
      />

      <button onClick={submit} className="btn btn-primary me-2">
        Submit
      </button>
      <button onClick={close} className="btn btn-danger">
        Cancel
      </button>
    </form>
  );
}

export default CategoryForm;
