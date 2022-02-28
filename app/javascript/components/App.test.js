import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Home from "./pages/Home";
import Pantry from "./pages/Pantry";
import AboutUs from "./pages/AboutUs";
import { pantryIngredients } from "./mockPantry";

const mockIngredients = { results: pantryIngredients };
global.fetch = () =>
  Promise.resolve({ json: () => Promise.resolve(mockIngredients) });
Enzyme.configure({ adapter: new Adapter() });

describe("When App renders", () => {
  it("displays a header and a footer", () => {
    //Arrange
    const renderedApp = shallow(<App />);
    //variable that calls on shallow which is passed an argument of a component call
    //Act
    const renderedHeader = renderedApp.find("Header");
    const renderedFooter = renderedApp.find("Footer");
    //Assert
    expect(renderedHeader.length).toEqual(1);
    expect(renderedFooter.length).toEqual(1);
  });
  it("displays Switch", () => {
    //Arrange
    const renderedApp = shallow(<App />);
    //variable that calls on shallow which is passed an argument of a component call
    //Act
    const renderedSwitch = renderedApp.find("Switch");
    //Assert
    expect(renderedSwitch.length).toEqual(1);
  });
  it("displays a BrowserRouter", () => {
    //Arrange
    const renderedApp = shallow(<App />);
    //variable that calls on shallow which is passed an argument of a component call
    //Act
    const renderedRouter = renderedApp.find("BrowserRouter");
    //Assert
    expect(renderedRouter.length).toEqual(1);
  });
  it("displays a Route", () => {
    //Arrange
    const renderedApp = shallow(<App logged_in={5}/>);
    //variable that calls on shallow which is passed an argument of a component call
    //Act
    const renderedRoute = renderedApp.find("Route");
    //Assert
    expect(renderedRoute.length).toEqual(6);
  });
  it("provides a route ' / ' to the home component", () => {
    const renderedApp = shallow(<App />);
    const renderedHomeRoute = renderedApp.find('[path="/"]');
    expect(renderedHomeRoute.length).toEqual(1);
    expect(renderedHomeRoute.props().component).toEqual(Home);
  });
  it("provides a route ' /pantry ' to the pantry component", () => {
    const renderedApp = shallow(<App logged_in={5}/>);
    const renderedPantryRoute = renderedApp.find('[path="/Pantry"]');
    expect(renderedPantryRoute.length).toEqual(1);
  });
  it("provides a route ' /AboutUs ' to the AboutUs component", () => {
    const renderedApp = shallow(<App />);
    const renderedAboutUsRoute = renderedApp.find('[path="/AboutUs"]');
    expect(renderedAboutUsRoute.length).toEqual(1);
    expect(renderedAboutUsRoute.props().component).toEqual(AboutUs);
  });
  it("provides a route ' /RecipeIndex ' to the RecipeIndex component", () => {
    const renderedApp = shallow(<App />);
    const renderedRecipeIndexRoute = renderedApp.find('[path="/RecipeIndex"]');
    expect(renderedRecipeIndexRoute.length).toEqual(1);
  });
  it("provides a route ' /RecipeShow/:id ' to the RecipeShow component", () => {
    const renderedApp = shallow(<App />);
    const renderedRecipeShowRoute = renderedApp.find(
      '[path="/RecipeShow/:id"]'
    );
    expect(renderedRecipeShowRoute.length).toEqual(1);
  });
  it("should change the state: pantry", async () => {
    const renderedApp = shallow(<App />);
    const instance = renderedApp.instance();
    await instance.readPantry();
    expect(instance.state.pantry.results).toEqual(pantryIngredients);
  });
});
