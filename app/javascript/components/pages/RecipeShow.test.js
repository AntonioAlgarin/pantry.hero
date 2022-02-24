import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeShow from "./RecipeShow";
import { detailRecipe } from "../mockPantry.js"

const mockRecipe = detailRecipe[0]
global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockRecipe) });

Enzyme.configure({ adapter: new Adapter() });

describe("When Recipe Index Page renders", () => {
  it("displays a Recipe Index header", () => {
    const renderedRecipeShow = shallow(<RecipeShow recipeId={1}/>);
    const recipeShowHeading = renderedRecipeShow.find("h2");
    expect(recipeShowHeading.length).toEqual(1);
  });
});
