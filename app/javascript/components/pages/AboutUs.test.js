import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AboutUs from "./AboutUs";

Enzyme.configure({ adapter: new Adapter() });

describe("When About Us Page renders", () => {
  it("displays an About Us header", () => {
    const renderedAboutUs = shallow(<AboutUs />);
    const aboutUsHeading = renderedAboutUs.find("CardGroup");
    expect(aboutUsHeading.length).toEqual(1);
  });
});
