import React, { useState } from "react";
import { Button } from "reactstrap";
import CategoryItem from "./categoryItem";
import PopUp from "../Modal/Modal";
import Form from "./Form";

import { useSelector } from "react-redux";
import { categoryData } from "../redux_utils/categorySlice";

const Category = () => {
  const [modal, setModal] = useState(false);

  const CategoryList = useSelector(categoryData);

  let viewData;

  if (CategoryList.length === 0) {
    viewData = <> No data yet</>;
  }

  if (CategoryList.length > 0) {
    viewData = (
      <>
        {CategoryList.map((item, index) => (
          <CategoryItem key={index} {...item} />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="page_header">
        <h2>Categories</h2>

        <Button color="success" onClick={() => setModal(true)}>
          Add
        </Button>
      </div>

      {viewData}
      
      {modal ? (
        <PopUp>
          <Form
            close={() => {
              setModal(false);
            }}
          />
        </PopUp>
      ) : null}
    </>
  );
};

export default Category;
