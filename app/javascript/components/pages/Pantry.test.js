import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pantry from "./Pantry";
import { pantryIngredients } from "../mockPantry";

const mockIngredients = { results: pantryIngredients };
global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockIngredients) });
Enzyme.configure({ adapter: new Adapter() });

describe("When Pantry Page renders", () => {
  it("displays a Pantry header", () => {
    const renderedPantry = shallow(<Pantry />);
    const pantryHeading = renderedPantry.find("h2");
    expect(pantryHeading.length).toEqual(1);
  });
  it("displays a Form", () => {
    const renderedPantry = shallow(<Pantry />);
    const renderForm = renderedPantry.find("Form");
    expect(renderForm.length).toEqual(1);
  });
  it("displays props for current user id", () => {
    const renderedPantry = shallow(
      <Pantry current_user={{ id: 2 }} readPantry={() => {}} />
    );
    const componentInstance = renderedPantry.instance();
    componentInstance.componentDidMount();
    expect(componentInstance.props.current_user.id).toEqual(2);
  });
  it("should add ingredient to the temporary list: tempList", () => {
    const renderedPantry = shallow(<Pantry />);
    let ingredient = "apple";
    const instance = renderedPantry.instance();
    instance.addIngredient(ingredient);
    expect(instance.state.tempList).toEqual(["apple"]);
  });
  it("should delete item in temporary list: tempList", () => {
    const renderedPantry = shallow(<Pantry />);
    let id = 1;
    const instance = renderedPantry.instance();
    let ingredient = { name: "apple", id: 1 };
    instance.addIngredient(ingredient);
    instance.deleteTemp(id);
    expect(instance.state.tempList).toEqual([]);
  });
  it("should change the state: search", () => {
    const renderedPantry = shallow(<Pantry />);
    let e = { target: { value: "eggs" } };
    const instance = renderedPantry.instance();
    instance.handleChange(e);
    expect(instance.state.search).toEqual("eggs");
  });
  it("should change the state: dropDownOpen", () => {
    const renderedPantry = shallow(<Pantry />);
    const instance = renderedPantry.instance();
    instance.toggle();
    expect(instance.state.dropDownOpen).toEqual(true);
  });
  it("should change the state: searchResults", async () => {
    const renderedPantry = shallow(<Pantry />);
    const instance = renderedPantry.instance();
    await instance.options();
    expect(instance.state.searchResults).toEqual(pantryIngredients);
  });
});
