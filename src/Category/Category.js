import React, { useState } from "react";
import { Button } from "reactstrap";
import CategoryItem from "./categoryItem";
import ModalItem from "../Modal/Modal";
import Form from "./Form";

import { useSelector } from "react-redux";
import { categoryData } from "../features/categorySlice";

const Category = ({ className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const CategoryList = useSelector(categoryData);

  return (
    <>
      <div className="page_header">
        <h2>Categories</h2>

        <Button color="success" onClick={toggle}>
          Add
        </Button>
      </div>

      {CategoryList.map((item, index) => (
        <CategoryItem key={index} {...item} />
      ))}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form closeModal={toggle} />
      </ModalItem>
    </>
  );
};

export default Category;
