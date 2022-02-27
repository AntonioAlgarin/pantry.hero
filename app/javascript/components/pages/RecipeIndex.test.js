import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RecipeIndex from "./RecipeIndex";

const mockRecipes = { results: null };
global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockRecipes) });
Enzyme.configure({ adapter: new Adapter() });

describe("When Recipe Index Page renders", () => {
  it("displays a Recipe Index header", () => {
    const renderedRecipeIndex = shallow(
      <RecipeIndex current_user={{ id: 1 }} />
    );
    const recipeIndexHeading = renderedRecipeIndex.find("h2");
    expect(recipeIndexHeading.length).toEqual(1);
  });
});
