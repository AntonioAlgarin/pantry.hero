import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("When App renders", () => {
  it("displays a header and a footer", () => {
    //Arrange
    const renderedApp = shallow(<App />);
    //variable that calls on shallow which is passed an argument of a component call
    //Act
    const renderedHeader = renderedApp.find("Header");
    const renderedFooter = renderedApp.find("Footer");
    //Assert
    expect(renderedHeader.length).toEqual(1);
    expect(renderedFooter.length).toEqual(1);
  });
});
