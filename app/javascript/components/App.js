import React, { Component } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Pantry from "./pages/Pantry";
import RecipeIndex from "./pages/RecipeIndex";
import RecipeShow from "./pages/RecipeShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { pantryIngredients, japaneseFriedRice, results } from "./mockPantry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantry: [],
      recipes: results,
    };
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Pantry" component={Pantry} />
            <Route path="/RecipeIndex" component={RecipeIndex} />

            <Route
              path="/RecipeShow/:id"
              render={(props) => {
                let recipeId = +props.match.params.id;
                let recipe = this.state.recipes.find(
                  (recipe) => recipe.id === recipeId
                );
                return <RecipeShow recipe={recipe} />;
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
