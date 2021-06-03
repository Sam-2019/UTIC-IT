import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "reactstrap";

const CategoryItem = ({ id, name }) => {
  let history = useHistory();
  let match = useRouteMatch();
  return (
    <div className="mb-3">
      <div className="list_item">
        <p>{name}</p>

        <Button
          color="primary"
          onClick={() => {
            history.push(`${match.url}/${name}`);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default CategoryItem;
