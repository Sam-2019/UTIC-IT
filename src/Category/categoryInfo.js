import React, { useState } from "react";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { Location as locationData } from "../Location/model";
import LocationItem from "../Location/locationItem";
import ModalItem from "../Modal/Modal";
import Form from "./Form";

const CategoryInfo = (props) => {
  let { id } = useParams();

  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div className="page_header">
        <p>{id}</p>

        <div className="page_header_action">
          <Button color="secondary" onClick={toggle}>
            Edit
          </Button>{" "}
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

      <ModalItem toggle={toggle} currentState={modal} className={className}>
        <Form />
      </ModalItem>
    </>
  );
};

export default CategoryInfo;
