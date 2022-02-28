import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("When Header renders", () => {
  it("displays a nav header", () => {
    const renderedHeader = shallow(<Header />);
    const navHeader = renderedHeader.find("Navbar");
    expect(navHeader.length).toEqual(1);
  });
});
