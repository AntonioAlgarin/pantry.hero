import React, { Component } from "react";
import { pantryIngredients, japaneseFriedRice, results } from "../mockPantry";

export default class RecipeShow extends Component {
  render() {
    return (
      <>
        <h2>Recipe Show</h2>
        <ul>
          {japaneseFriedRice.map((recipe) => {
            return (
              <>
                <li>{recipe.title}</li>
                <li>{recipe.image}</li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}
