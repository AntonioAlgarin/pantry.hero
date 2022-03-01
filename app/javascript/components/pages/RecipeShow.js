import React, { Component } from "react";
import {
  Form,
  Label,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

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
      <>
        {recipe === null ? (
          <h2>Pending Recipe</h2>
        ) : (
          <div key={1}>
            <h3 className="list-title">{recipe.title}</h3>

            <CardGroup>
              <Card>
                <img src={`${recipe.image}`} alt="recipe photo" />
              </Card>
              <Card>
                <CardTitle className="pantry-card-text">
                  <h5>Meal prep time: {recipe.readyInMinutes} minutes</h5>
                  <h5> Number of Servings: {recipe.servings}</h5>
                  <Card>
                    <h2 className="list-title">Ingredients</h2>

                    <CardGroup className="card-group">
                      {requiredIngredients.map((ingredient, index) => {
                        return (
                          <div key={index}>
                            <Card className="ingredient-card">
                              <CardTitle>{ingredient[0]}</CardTitle>
                              <img src={ingredient[1]} alt="ingredient image" />
                            </Card>
                          </div>

                        );
                      })}
                    </CardGroup>
                  </Card>
                </CardTitle>
              </Card>
            </CardGroup>

            <Card>
              <h2 className="list-title">Instructions</h2>
              <CardBody>
                {recipe.analyzedInstructions[0].steps.map((step, index) => {
                  return <ol key={index}>{`${index + 1}. ${step.step}`}</ol>;
                })}
              </CardBody>
            </Card>

            <h2 className="list-title">Nutritional Information</h2>

            <CardGroup className="card-group">
              {recipe.nutrition.nutrients.map((nutrientInfo, index) => {
                return (
                  <div key={index}>
                    <Card className="ingredient-card">
                      <h5 className="pantry-card-text">{nutrientInfo.name}</h5>
                      <p>{`${nutrientInfo.amount}${nutrientInfo.unit}`}</p>
                      <p>{`${nutrientInfo.percentOfDailyNeeds}% Daily Value`}</p>
                    </Card>
                  </div>
                );
              })}
            </CardGroup>
          </div>
        )}
      </>
    );
  }
}
