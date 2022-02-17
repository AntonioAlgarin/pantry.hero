import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pantry from "./Pantry";

Enzyme.configure({ adapter: new Adapter() });

describe("When Pantry Page renders", () => {
  it("displays a Pantry header", () => {
    const renderedPantry = shallow(<Pantry />);
    const pantryHeading = renderedPantry.find("h2");
    expect(pantryHeading.length).toEqual(1);
  });
});
