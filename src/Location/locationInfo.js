import React from "react";
import { useParams } from "react-router-dom";

const LocationInfo = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default LocationInfo;
