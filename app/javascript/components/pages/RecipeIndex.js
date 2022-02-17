import React, { Component } from "react";
import { pantryIngredients, japaneseFriedRice, results } from "../mockPantry";

export default class RecipeIndex extends Component {
  render() {
    return (
      <>
        <h2>RecipeIndex</h2>;
        <ul>
          {results.map((recipes) => {
            return (
              <>
                <li>{recipes.title}</li>
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
