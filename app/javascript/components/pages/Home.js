import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  UncontrolledAccordion,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="HomeBackgroundImage">
      <img className="build-pantry-img"src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646109271/Pantry%20Hero/catchphrase.png_qxgmrb.png" width="850px">
      </img>
      </div>
      </>
    )
  }
}
