import React, { Component } from "react";

export default class RecipeShow extends Component {
  render() {
    //Deconstruct props to get recipe
    let { recipe } = this.props;

    // Get Ingredients and image for Recipe
    let requiredIngredients = []; //Create an empty array to store ingredients information.
    let ingredientTracker = {}; //Create an empty object to track ingredient.
    //ForEach step process of a recipe, store ingredients used in that step.
    recipe.analyzedInstructions[0].steps.forEach((recipeStep) => {
      //ForEach ingredient used in a step, store the ingredient name and image.
      recipeStep.ingredients.forEach((ingredient) => {
        if (!ingredientTracker[ingredient.name]) {
          let information = [
            ingredient.name,
            `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`,
          ];
          requiredIngredients.push(information); //Push the ingredient name and image to required ingredient variable
          ingredientTracker[ingredient.name] = 1;
        }
      });
    });

    return (
      <>
        <h2>{recipe.title}</h2>
        <p>Meal prep time: {recipe.readyInMinutes} minutes</p>
        <p>Number of Servings: {recipe.servings}</p>
        <img src={`${recipe.image}`} alt="recipe photo" />

        <h2>Instructions</h2>
        {recipe.analyzedInstructions[0].steps.map((step, index) => {
          return <li>{`${index + 1}. ${step.step}`}</li>;
        })}

        <h2>Ingredients</h2>
        {requiredIngredients.map((ingredient) => {
          return (
            <>
              <li>{ingredient[0]}</li>
              <img src={ingredient[1]} alt="ingredient image" />
            </>
          );
        })}

        <h2>Nutrients</h2>
        {recipe.nutrition.nutrients.map((nutrientInfo) => {
          return (
            <div>
              <h5>{nutrientInfo.name}</h5>
              <li>{`${nutrientInfo.amount}${nutrientInfo.unit}`}</li>
              <li>{`${nutrientInfo.percentOfDailyNeeds}% Daily Value`}</li>
            </div>
          );
        })}
      </>
    );
  }
}
