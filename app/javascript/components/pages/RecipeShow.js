import React, { Component } from "react";
import { pantryIngredients, japaneseFriedRice, results } from "../mockPantry";

export default class RecipeShow extends Component {
  render() {
    return (
      <>
        <h2>{this.props.recipe.title}</h2>
      </>
    );
  }
}
