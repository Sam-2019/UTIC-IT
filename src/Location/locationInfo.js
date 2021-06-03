import React from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";

const LocationInfo = () => {
  let { id } = useParams();

  return (
    <div className="page_header">
      <p>{id}</p>

      <div className="page_header_action">
        <Button color="secondary">Edit</Button>{" "}
        <Button color="danger">Remove</Button>
      </div>
    </div>
  );
};

export default LocationInfo;
