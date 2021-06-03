import React, { useState } from "react";
import { Button } from "reactstrap";
import CategoryItem from "./categoryItem";
import PopUp from "../Modal/Modal";
import Form from "./Form";

import { useSelector } from "react-redux";
import { categoryData } from "../features/categorySlice";

const Category = () => {
  const [modal, setModal] = useState(false);

  const CategoryList = useSelector(categoryData);

  return (
    <>
      <div className="page_header">
        <h2>Categories</h2>

        <Button color="success" onClick={setModal(true)}>
          Add
        </Button>
      </div>

      {CategoryList.map((item, index) => (
        <CategoryItem key={index} {...item} />
      ))}

      {modal ? (
        <PopUp>
          <Form close={setModal(false)} />]
        </PopUp>
      ) : null}
    </>
  );
};

export default Category;
