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

          </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Pantry Hero
              </CardTitle>
            </CardBody>
          <CardFooter className="d-flex justify-content-center text-muted">
            © 2022 Uncapped Stoners
          </CardFooter>
        </Card>
      </div>
    )
  }
}
