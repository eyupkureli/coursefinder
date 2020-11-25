import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Courses from "../courses/Courses"

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12">
            <Courses></Courses>
          </Col>
        </Row>
      </div>
    );
  }
}
