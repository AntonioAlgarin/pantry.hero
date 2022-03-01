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
import { Link } from "react-router-dom";

export default class AboutUs extends Component {
  render() {

    return (
      <>
      <div className="AboutUs-div">
      <CardGroup>
        <Card className="AboutUs-cards">
          <CardImg
            alt="Salvador Tena - Team Uncapped"
            src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646075411/Pantry%20Hero/salvador_sm_bqd81b.png"
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
              Salvador is the product and project manager for the uncapped stoners team. His interests in software development is to create full-stack applications for client needs. Enjoys playing soccer and learning new tech stacks when not busy with work.
            </CardText>
            <div class="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/salvadortena/" target="_blank">
            <Button className="btn btn-light mx-auto">
            <img
              src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646083686/Pantry%20Hero/linkedin-svgrepo-com_u8uinc.svg"
              width="30px"
            />
            </Button>
            </a>

            <a href="https://github.com/Chava888" target="_blank">
            <Button className="btn btn-light mx-auto">
            <img
              src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646084023/Pantry%20Hero/github-code-source-svgrepo-com_qhb56f.svg"
              width="30px"
              />
            </Button>
            </a>
            </div>
          </CardBody>
          </Card>
          <Card className="AboutUs-cards">
            <CardImg
              alt="Mikka Jimenez - Team Uncapped"
              src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646075475/Pantry%20Hero/mikka_sm_o47ora.png"
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
                Aircraft mechanic turned software engineer. When outside the VS Code "office," she enjoys playing videogames and finding her next favorite food spot. She takes on the role as Tech Lead, the guardian of the code base, and version control.
              </CardText>
              <div class="d-flex justify-content-center">
              <a href="https://www.linkedin.com/in/mikka-jimenez/" target="_blank">
              <Button className="btn btn-light">
              <img
                src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646083686/Pantry%20Hero/linkedin-svgrepo-com_u8uinc.svg"
                width="30px"
              />
              </Button>
              </a>
              <a href="https://github.com/mikkajimenez" target="_blank">
              <Button className="btn btn-light">
              <img
                src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646084023/Pantry%20Hero/github-code-source-svgrepo-com_qhb56f.svg"
                width="30px"
                />
              </Button>
              </a>
              </div>
            </CardBody>
            </Card>
            <Card className="AboutUs-cards">
              <CardImg
                alt="Antonio Algarin - Team Uncapped"
                src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646075400/Pantry%20Hero/antonio_sm_exgu16.png"
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
                  Antonio is focused on creating meaningful experiences through design. He is innately curious and enjoys seeing things from a fresh perspective. His hobbies include yoga, hiking, and the beach. You can normally find him drinking a cup of tea.
                </CardText>
                <div className="d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/antonioalgarin/" target="_blank">
                <Button className="btn btn-light">
                <img
                  src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646083686/Pantry%20Hero/linkedin-svgrepo-com_u8uinc.svg"
                  width="30px"
                />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/antonioalgarin/" target="_blank">
                <Button className="btn btn-light">
                <img
                  src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646084023/Pantry%20Hero/github-code-source-svgrepo-com_qhb56f.svg"
                  width="30px"
                  />
                </Button>
              </a>
              </div>
              </CardBody>
            </Card>
            </CardGroup>
            </div>
        </>
      )
    }
}
