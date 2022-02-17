import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeIndex from "./RecipeIndex";

Enzyme.configure({ adapter: new Adapter() });

describe("When Recipe Index Page renders", () => {
  it("displays a Recipe Index header", () => {
    const renderedRecipeIndex = shallow(<RecipeIndex />);
    const recipeIndexHeading = renderedRecipeIndex.find("h2");
    expect(recipeIndexHeading.length).toEqual(1);
  });
});
