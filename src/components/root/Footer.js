import React, { Component } from "react";
import {
  Card,
  Button,
  CardText,
  CardGroup,
  CardBody,
} from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <Card>
            <CardBody>
              <Button color="warning">About Us</Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Button color="warning">Contact Us</Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardText>Copyright © 2020 InfoMerge Ltd.</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}
