import React, { Component } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Pantry from "./pages/Pantry";
import RecipeIndex from "./pages/RecipeIndex";
import RecipeShow from "./pages/RecipeShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantry: [],
      recipes: [],
      detailRecipe: [],
      showRecipeDetails: null,
    };
  }

  readPantry = async(user_id) => {
    await fetch(`http://localhost:3000/ingredients/?user_id=${user_id}`)
      .then((response) => response.json())
      //set the state with the data from the backend into the empty array
      .then((ingredientsArray) => this.setState({ pantry: ingredientsArray }))
      .catch((errors) => console.log("Pantry read errors", errors));
  };

  readRecipeId = (recipeId) => {
    this.setState({ showRecipeDetails: recipeId });
  };
  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route path="/AboutUs" component={AboutUs} />
            {this.props.logged_in &&
            <Route
              path="/Pantry"
              render={(props) => {
                return (
                  <Pantry
                    api_key={this.props.api_key}
                    readPantry={this.readPantry}
                    ingredients={this.state.pantry}
                    {...this.props}
                  />
                );
              }}
            />
            }
            <Route
              path="/RecipeIndex"
              render={(props) => {
                return (
                  <RecipeIndex
                    api_key={this.props.api_key}
                    readRecipeDetails={this.readRecipeId}
                    ingredients={this.state.pantry}
                    readPantry={this.readPantry}
                    {...this.props}
                  />
                );
              }}
            />

            <Route
              path="/RecipeShow/:id"
              render={(props) => {
                return (
                  <RecipeShow
                    api_key={this.props.api_key}
                    recipeId={+props.match.params.id}
                  />
                );
              }}
            />

            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
