import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const LocationItem = ({ id, name }) => {
  let history = useHistory();

  return (
    <div className="mb-3">
      <div className="list_item">
        <p>{name}</p>

        <Button
          color="primary"
          onClick={() => {
            history.push(`/location/${name}`);
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default LocationItem;
