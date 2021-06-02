import React from "react";
import { useParams } from "react-router-dom";

const CategoryInfo = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

export default CategoryInfo;
