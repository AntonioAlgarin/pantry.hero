import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("When Home renders", () => {
  it("displayes a home header", () => {
    const renderedHome = shallow(<Home />);
    const homeHeading = renderedHome.find("h2");
    expect(homeHeading.length).toEqual(1);
  });
});
