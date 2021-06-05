import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const ItemList = ({ data, path }) => {
  let history = useHistory();

  return (
    <div className="mb-3">
      <div className="list_item">
        <p>{data.name}</p>

        <Button
          color="primary"
          onClick={() => {
            history.push(`/${path}/${data.name}`);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default ItemList;
