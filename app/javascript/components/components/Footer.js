import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
} from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader tag="h3">
            What do I want to add here?
          </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Pantry Hero
              </CardTitle>
          <Button>
            Learn More
          </Button>
            </CardBody>
          <CardFooter className="text-muted">
            Team Uncapped
          </CardFooter>
        </Card>
      </div>
    )
  }
}
