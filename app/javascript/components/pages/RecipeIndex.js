import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeIndex extends Component {
  render() {
    let results = this.props.recipe;
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
