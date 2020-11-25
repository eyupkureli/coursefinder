import React, { Component } from "react";
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';
  import udemylogo from '../logos/udemy.jpg'
  import pluralsightlogo from '../logos/plural.png'
  import courseralogo from '../logos/coursera.jpg'
  import datacamplogo from '../logos/datacamp.png'

export default class CoursePlatforms extends Component {
  render() {
    return (
      <div>
        <CardGroup>
          <Card>
            <CardImg
              top
              width="100%"
              src={udemylogo}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src={pluralsightlogo}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src={courseralogo}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        
          <Card>
            <CardImg
              top
              width="100%"
              src={datacamplogo}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>

        </CardGroup>
      </div>
    );
  }
}
