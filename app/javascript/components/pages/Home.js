import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  UncontrolledAccordion,
  Button,
} from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="HomeBackgroundImage">
      <h2>Feeling like you can't figure out what to make for dinner? Let us help.</h2>
      <div>
  <Button
    color="primary"
  >
    Get Started
  </Button>
    </div>
      <p>Longer description of why you should check out our app</p>
      </div>
      </>
    )
  }
}
