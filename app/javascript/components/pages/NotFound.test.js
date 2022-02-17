import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("When Not Found Page renders", () => {
  it("displays a Not Found header", () => {
    const renderedNotFound = shallow(<NotFound />);
    const notFoundHeading = renderedNotFound.find("h2");
    expect(notFoundHeading.length).toEqual(1);
  });
});
