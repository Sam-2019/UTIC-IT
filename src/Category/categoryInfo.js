import React from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { Location as locationData } from "../Location/model";
import LocationItem from "../Location/locationItem";

const CategoryInfo = () => {
  let { id } = useParams();
  return (
    <>
      <div className="page_header">
        <p>{id}</p>

        <div className="page_header_action">
          <Button color="secondary">Edit</Button>{" "}
          <Button color="danger">Remove</Button>
        </div>
      </div>

      {locationData
        .filter((result) => result.category === id)
        .map((data, index) => (
          <div key={index}>
            <LocationItem {...data} />
          </div>
        ))}
    </>
  );
};

export default CategoryInfo;
