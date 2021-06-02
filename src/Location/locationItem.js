import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";

const LocationItem = ({ id, name }) => {
  let history = useHistory();
  let match = useRouteMatch();
  return (
    <div className="mb-3">
      <div>
        <Row>
          <Col xs="3">
            <Col> {name}</Col>
          </Col>
          <Col xs="auto"></Col>

          <Col xs="4">
            <Button
              color="primary"
              onClick={() => {
                history.push(`${match.url}/${id}`);
              }}
            >
              View
            </Button>{" "}
            <Button color="secondary">Edit</Button>{" "}
            <Button color="danger">Remove</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LocationItem;
