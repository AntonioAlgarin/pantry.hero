import React, { Component } from "react";
import { pantryIngredients, japaneseFriedRice, results } from "../mockPantry";
import { Link } from "react-router-dom";

export default class RecipeIndex extends Component {
  render() {
    return (
      <>
        <h2>Recipe Index</h2>;
        <ul>
          {results.map((recipes) => {
            return (
              <>
                <li>
                  <Link to={`/RecipeShow/${recipes.id}`}>{recipes.title}</Link>
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
