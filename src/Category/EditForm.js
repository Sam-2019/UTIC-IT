import React, { useState } from "react";
import Input from "../components/input";

function CategoryEditForm({ closeModal }) {
  const [item, setItem] = useState("");

  console.log(item);

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

export default CategoryEditForm;
