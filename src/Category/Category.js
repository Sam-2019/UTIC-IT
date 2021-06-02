import React, { useState } from "react";
import { Button } from "reactstrap";
import { Category as CategoryList } from "./model";
import CategoryItem from "./categoryItem";
import ModalItem from "../Modal/Modal";

const Category = ({ className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      {CategoryList.map((item, index) => (
        <CategoryItem key={index} {...item} />
      ))}

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <>Hello</>
      </ModalItem>

      <Button color="success" onClick={toggle}>
        Add
      </Button>
    </>
  );
};

export default Category;
