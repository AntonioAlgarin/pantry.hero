import React, { Component } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Pantry from "./pages/Pantry";
import RecipeIndex from "./pages/RecipeIndex";
import RecipeShow from "./pages/RecipeShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { pantryIngredients, results, detailRecipe } from "./mockPantry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantry: [],
      recipes: results,
      detailRecipe: detailRecipe,
    };
  }

  // const {
  //   logged_in,
  //   current_user,
  //   new_user_route,
  //   sign_in_route,
  //   sign_out_route,
  // } = this.props;

  // componentDidMount(){
  //   this.readPantry(this.props.current_user.id);
  // }

  // readPantry = (user_id) => {
  //     fetch(`http://localhost:3000/ingredients/?user_id=${user_id}`)
  //       .then((response) => response.json())
  //       //set the state with the data from the backend into the empty array
  //       .then((ingredientsArray) => this.setState({ pantry: ingredientsArray }))
  //       .catch((errors) => console.log("Pantry read errors", errors));
  //   };
  // createIngredient = (ingName) => {
  //   let pantry = this.state.pantry.push(ingName);
  //   this.setState({ pantry: pantry });
  // };

  readPantry = (user_id) => {
    fetch(`http://localhost:3000/ingredients/?user_id=${user_id}`)
      .then((response) => response.json())
      //set the state with the data from the backend into the empty array
      .then((ingredientsArray) => this.setState({ pantry: ingredientsArray }))
      .catch((errors) => console.log("Pantry read errors", errors));
  };

  componentDidMount() {
    this.readPantry(this.props.current_user.id);
  }

  render() {
    // console.log(logged_in);
    // console.log(current_user);
    // console.log(new_user_route);
    // console.log(sign_in_route);
    // console.log(sign_out_route);
    // console.log(this.props.api_key);

    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route path="/AboutUs" component={AboutUs} />

            <Route
              path="/Pantry"
              render={(props) => {
                let pantryIngredients = this.state.pantry;
                return (
                  <Pantry
                    api_key={this.props.api_key}
                    readPantry={this.readPantry}
                    ingredients={pantryIngredients}
                    // readPantry={this.readPantry}
                    {...this.props}
                    // createIngredient={this.createIngredient}
                  />
                );
              }}
            />

            <Route
              path="/RecipeIndex"
              render={(props) => {
                let resultsRecipes = this.state.recipes;
                return (
                  <RecipeIndex
                    api_key={this.props.api_key}
                    ingredients={pantryIngredients}
                  />
                );
              }}
            />

            <Route
              path="/RecipeShow/:id"
              render={(props) => {
                let recipeId = +props.match.params.id;
                let recipe = this.state.detailRecipe.find(
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
