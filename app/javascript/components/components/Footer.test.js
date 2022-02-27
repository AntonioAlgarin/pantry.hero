import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";

Enzyme.configure({ adapter: new Adapter() });

describe("When Footer Page renders", () => {
  it("displays a Footer header", () => {
    const renderedFooter = shallow(<Footer />);
    const FooterHeading = renderedFooter.find("Card");
    expect(FooterHeading.length).toEqual(1);
  });
});
