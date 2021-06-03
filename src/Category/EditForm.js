import React, { useState } from "react";
import { Input } from "../components/input";

function CategoryEditForm({ closeModal }) {
  const [name, setName] = useState("");

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

      <button>Submit</button>
      <button onClick={closeModal}>Cancel</button>
    </form>
  );
}

export default CategoryEditForm;
