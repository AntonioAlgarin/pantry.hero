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

  options = async() => {
    let { search } = this.state;
    await fetch(
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
      .then(this.deleteTemp(ingredient.id))
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
    this.props.current_user &&
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
        <div className="d-flex justify-content-center p-5">
          <Dropdown
            direction="end"
            toggle={function noRefCheck() {}}
          ></Dropdown>
          <CardGroup>
            <CardBody>
              <Form>
                <div className="search-ingredient-text">
                  <Input
                    placeholder="Type ingredient here"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <Button onClick={this.options}>search</Button>
                </div>
              </Form>
            </CardBody>
            <CardBody>
              <Dropdown
                isOpen={this.state.dropDownOpen}
                toggle={this.toggle}
                direction="end"
              >
                <DropdownToggle caret>
                  Choose Ingredient Variation
                </DropdownToggle>
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
            </CardBody>
          </CardGroup>
        </div>

        <CardGroup>
          <Card>
            <CardTitle>Temporary List</CardTitle>
            <div className="temp-list">
              {this.state.tempList.map((ingredient) => {
                return (
                  <>
                    <CardGroup>
                      <Card>
                        <CardTitle>{ingredient.name}</CardTitle>
                        <img
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        />
                        <Button
                          onClick={() => {
                            this.addPantry(
                              ingredient,
                              this.props.current_user.id
                            );
                          }}
                        >
                          Add Ingredient
                        </Button>
                        <Button
                          onClick={() => {
                            this.deleteTemp(ingredient.id);
                          }}
                        >
                          Delete
                        </Button>
                      </Card>
                    </CardGroup>
                  </>
                );
              })}
            </div>
          </Card>

          <Card>
            <h3>Pantry List</h3>
            <div className="pantry-list">
              <>
                {this.props.ingredients &&
                  this.props.ingredients.map((ingredient) => {
                    return (
                      <>
                        <CardGroup>
                          <Card>
                            <CardTitle>{ingredient.name}</CardTitle>
                            <img
                              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                            />
                            <Button
                              onClick={() => {
                                this.deleteIngredient(
                                  this.props.current_user.id,
                                  ingredient.id
                                );
                              }}
                            >
                              Delete
                            </Button>
                          </Card>
                        </CardGroup>
                      </>
                    );
                  })}
              </>
            </div>
          </Card>
        </CardGroup>
      </>
    );
  }
}
