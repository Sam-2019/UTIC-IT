import React, { useState } from "react";

import ItemList from "../components/Item_List";
import PopUp from "../Modal/Modal";
import Add from "./Add";
import NoData from "../components/NoData";

import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import { categoryData } from "../utils/redux/categorySlice";

const Category = () => {
  const [modal, setModal] = useState(false);

  const CategoryList = useSelector(categoryData);

  let viewData;

  if (CategoryList.length === 0) {
    viewData = <NoData />;
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
          <Add
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
