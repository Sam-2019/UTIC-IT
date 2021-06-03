import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const CategoryItem = ({ id, name }) => {
  let history = useHistory();

  return (
    <div className="mb-3">
      <div className="list_item">
        <p>{name}</p>

        <Button
          color="primary"
          onClick={() => {
            history.push(`/category/${name}`);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default CategoryItem;
