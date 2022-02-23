import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      pantry: [],
    };
  }

  getRecipes = () => {
    fetch(
      `http://localhost:3000/ingredients/?user_id=${this.props.current_user.id}`
    )
      .then((response) => response.json())
      //set the state with the data from the backend into the empty array
      .then((pantry) => {
        let ingredientsAfterFirst = pantry.slice(1, pantry.length);
        let ingWord = ingredientsAfterFirst.map((word) => {
          return `+${word.name},`;
        });
        let text = `${pantry[0].name},${ingWord.join("")}${
          pantry[pantry.length - 1].name
        }`;
        fetch(
          `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${text}&number=10&apiKey=${this.props.api_key}`
        )
          .then((response) => response.json())
          .then((recipesArray) =>
            this.setState({ searchResults: recipesArray })
          )
          .catch((errors) => console.log("Get Recipes read errors", errors));
      })
      .catch((errors) => console.log("Pantry read errors", errors));
  };

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    return (
      <>
        <h2>Recipe Index</h2>;
        <ul>
          {this.state.searchResults &&
            this.state.searchResults.map((recipes) => {
              return (
                <>
                  <li>
                    <Link
                      to={`/RecipeShow/${recipes.id}`}
                      onClick={() => this.props.readRecipeDetails(recipes.id)}
                    >
                      {recipes.title}
                    </Link>
                  </li>
                  <li>
                    <img src={recipes.image} />
                  </li>
                </>
              );
            })}
        </ul>
      </>
    );
  }
}
