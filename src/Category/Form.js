import React from "react";
import { Button } from "reactstrap";
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
      <Button color="primary" onClick={submit}>
        Submit
      </Button>{" "}
      <Button color="danger" onClick={close}>
        Cancel
      </Button>
    </form>
  );
}

export default CategoryForm;
