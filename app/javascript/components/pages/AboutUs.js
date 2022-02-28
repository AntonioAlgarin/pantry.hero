import React, { Component } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

export default class AboutUs extends Component {
  render() {

    return (
      <>
      <div className="AboutUs-div">
      <CardGroup>
        <Card className="AboutUs-cards">
          <CardImg
            alt="Salvador Tena - Team Uncapped"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
              Salvador Tena
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Project & Product Manager
            </CardSubtitle>
            <CardText>
              Salvador's Bio
            </CardText>
            <Button>
              Learn More
            </Button>
          </CardBody>
          </Card>

          <Card className="AboutUs-cards">
            <CardImg
              alt="Mikka Jimenez - Team Uncapped"
              src="https://picsum.photos/318/180"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Mikka Jimenez
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Tech Lead
              </CardSubtitle>
              <CardText>
                Mikka's Bio
              </CardText>
              <Button>
                Learn More
              </Button>
            </CardBody>
            </Card>

            <Card className="AboutUs-cards">
              <CardImg
                alt="Antonio Algarin - Team Uncapped"
                src="https://picsum.photos/318/180"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Antonio Algarin
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Design Lead
                </CardSubtitle>
                <CardText>
                  Antonio's Bio
                </CardText>
                <Button>
                  Learn More
                </Button>
              </CardBody>
            </Card>
            </CardGroup>
            </div>
        </>
      )
    }
}
