import React, { Component } from "react";

export default class RecipeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      requiredIngredients: [],
    };
  }

  recipeDetails = () => {
    fetch(
      `https://api.spoonacular.com/recipes/${this.props.recipeId}/information?includeNutrition=true&apiKey=${this.props.api_key}`
    )
      .then((response) => response.json())
      .then((recipeDetails) => this.setState({ recipe: recipeDetails }))
      .then(() => {
        let { recipe } = this.state;
        // // Get Ingredients and image for Recipe
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

              requiredIngredients.push(information);
              //Push the ingredient name and image to required ingredient variable
              ingredientTracker[ingredient.name] = 1;
            }
          });
        });
        this.setState({ requiredIngredients: requiredIngredients });
      })
      .catch((errors) => console.log("Get Recipes read errors", errors));
  };

  componentDidMount() {
    this.props.recipeId && this.recipeDetails();
  }

  render() {
    let { recipe, requiredIngredients } = this.state;
    return (
      <div>
        {recipe === null ?
          <h2>Pending Recipe</h2>
         :
          <div key={1}>
            <h2>{recipe.title}</h2>
            <p>Meal prep time: {recipe.readyInMinutes} minutes</p>
            <p>Number of Servings: {recipe.servings}</p>
            <img src={`${recipe.image}`} alt="recipe photo" />
            <h2>Instructions</h2>
            {recipe.analyzedInstructions[0].steps.map((step, index) => {
              return <li key={index}>{`${index + 1}. ${step.step}`}</li>;
            })}
            <h2>Ingredients</h2>
            {requiredIngredients.map((ingredient, index) => {
              return (
                <div key={index}>
                  <li>{ingredient[0]}</li>
                  <img src={ingredient[1]} alt="ingredient image" />
                </div>
              );
            })}
            <h2>Nutrients</h2>
            {recipe.nutrition.nutrients.map((nutrientInfo, index) => {
              return (
                <div key={index}>
                  <h5>{nutrientInfo.name}</h5>
                  <li>{`${nutrientInfo.amount}${nutrientInfo.unit}`}</li>
                  <li>{`${nutrientInfo.percentOfDailyNeeds}% Daily Value`}</li>
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}
