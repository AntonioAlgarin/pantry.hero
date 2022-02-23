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
} from "reactstrap";

export default class Pantry extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      searchResults: [],
      search: null,
      dropDownOpen: false,
      tempList: [],
    };
  }

  options = () => {
    let { search } = this.state;
    fetch(
      `https://api.spoonacular.com/food/ingredients/search?query=${search}&number=20&apiKey=${this.props.api_key}`
    )
      .then((response) => response.json())
      .then((ingredientsArray) =>
        this.setState({ searchResults: ingredientsArray.results })
      )
      .catch((errors) => console.log("Pantry read errors", errors));
  };

  toggle = () => {
    this.setState((prevState) => ({
      dropDownOpen: !prevState.dropDownOpen,
    }));
  };

  handleChange = (e) => {
    let { search } = this.state;
    search = e.target.value;
    this.setState({ search: search });
  };

  addPantry = (ingredient, user_id) => {
    const { id, name, image } = ingredient;
    const addedNew = { food_id: id, name: name, image: image };
    fetch(`http://localhost:3000/ingredients/?user_id=${user_id}`, {
      body: JSON.stringify(addedNew),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.props.readPantry(user_id))
      .catch((errors) => console.log("Cannot Add Ingredient:", errors));
  };

  deleteIngredient = (user_id, id) => {
    fetch(`http://localhost:3000/ingredients/${id}`, {
      //Convert an object to a string
      body: JSON.stringify({ user_id, id }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.props.readPantry(user_id))
      .catch((errors) => console.log("delete errors:", errors));
  };

  deleteTemp = (id) => {
    let { tempList } = this.state;
    let newArr = tempList.filter((ingredient) => {
      return ingredient.id !== id;
    });
    this.setState({ tempList: newArr });
  };

  componentDidMount() {
    this.props.readPantry(this.props.current_user.id);
  }

  addIngredient = (ingredient) => {
    let { tempList } = this.state;
    tempList.push(ingredient);
    this.setState({ tempList: tempList });
  };

  render() {
    return (
      <>
        <h2> My Pantry!</h2>
        <Form>
          <Label>Search Ingredient</Label>
          <Input type="text" onChange={this.handleChange} />
          <Button onClick={this.options}>search</Button>
        </Form>
        <div className="d-flex justify-content-center p-5">
          <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              {this.state.searchResults.map((result) => {
                return (
                  <DropdownItem
                    onClick={() => {
                      this.addIngredient(result);
                    }}
                  >
                    {result.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
        <h3>Temporary List</h3>
        <ul>
          {this.state.tempList.map((ingredient) => {
            return (
              <>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                />
                <li>{ingredient.name}</li>
                <button
                  onClick={() => {
                    this.addPantry(ingredient, this.props.current_user.id);
                  }}
                >
                  Add Ingredient
                </button>
                <button
                  onClick={() => {
                    this.deleteTemp(ingredient.id);
                  }}
                >
                  Delete
                </button>
              </>
            );
          })}
        </ul>
        <h3>Pantry List</h3>
        <ul>
          {this.props.ingredients.map((ingredient) => {
            return (
              <>
                <li>{ingredient.name}</li>
                <button
                  onClick={() => {
                    this.deleteIngredient(
                      this.props.current_user.id,
                      ingredient.id
                    );
                  }}
                >
                  Delete
                </button>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}
