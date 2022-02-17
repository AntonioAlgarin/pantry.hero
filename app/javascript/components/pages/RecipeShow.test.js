import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeShow from "./RecipeShow";

Enzyme.configure({ adapter: new Adapter() });

describe("When Recipe Index Page renders", () => {
  it("displays a Recipe Index header", () => {
    const renderedRecipeShow = shallow(<RecipeShow />);
    const recipeShowHeading = renderedRecipeShow.find("h2");
    expect(recipeShowHeading.length).toEqual(1);
  });
});
