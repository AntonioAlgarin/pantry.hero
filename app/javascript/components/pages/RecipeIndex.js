import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

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
      <div className="browse-recipes-img">
        <img
          src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646072386/Pantry%20Hero/Recipes_t9cjjw.png"
          width="600px"
        />
        </div>
        <ul>
        <div className="RecipeIndex-div">
          {this.state.searchResults &&
            this.state.searchResults.map((recipes) => {
              return (
                <div>
                <Link
                    to={`/RecipeShow/${recipes.id}`}
                    onClick={() => this.props.readRecipeDetails(recipes.id)}
                    >
                  <Card className="RecipeIndex-cards" inverse>
                    <CardImg
                      alt="Recipe Index Cards"
                      src={recipes.image}
                      width="100%"
                    />
                    <CardImgOverlay>
                      <CardText className="card-font-color">
                        {recipes.title}
                      </CardText>
                      <CardText className="card-font-color">
                        Number of Ingredients Used: {recipes.usedIngredientCount}
                      </CardText>
                    </CardImgOverlay>
                  </Card>
                </Link>
                </div>
              )
            }
          )
        }
        </div>
        </ul>
      </>
    )
  }
}
