import React, { Component } from "react";
import { pantryIngredients, japaneseFriedRice, results } from "../mockPantry";

export default class Pantry extends Component {
  render() {
    return (
      <>
        <h2>Pantry</h2>
        <ul>
          {pantryIngredients.map((ingredient) => {
            return <li>{ingredient.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
