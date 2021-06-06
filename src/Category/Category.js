import React, { useState } from "react";
import { Button } from "reactstrap";
import ItemList from "../components/Item_List";
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
        {CategoryList.map((data, index) => (
          <ItemList key={index} data={data} path="category" />
        ))}
      </>
    );
  }

  return (
    <>
      <div className="page_header">
        <h1>Categories</h1>

        <Button color="success" onClick={() => setModal(true)}>
          Add
        </Button>
      </div>

      {viewData}

      {modal && (
        <PopUp>
          <h5>Add Category</h5>
          <Form
            close={() => {
              setModal(false);
            }}
          />
        </PopUp>
      )}
    </>
  );
};

export default Category;
