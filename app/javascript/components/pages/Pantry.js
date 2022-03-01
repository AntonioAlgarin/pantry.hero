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

  options = async () => {
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
    const addedNew = { food_id: id, name: name, image: image, quantity: 1 };
    fetch(`/ingredients/?user_id=${user_id}`, {
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

  updateIngredient = (user_id, id, quantity) => {
    fetch(`/ingredients/${id}`, {
      //Convert an object to a string
      body: JSON.stringify({ user_id, id, quantity }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.props.readPantry(user_id))
      .catch((errors) => console.log("update errors:", errors));
  };

  deleteIngredient = async (user_id, id) => {
    await fetch(`/ingredients/${id}`, {
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
        <div className="build-pantry-img">
          <img
            src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646029342/Pantry%20Hero/FullLogo_Transparent_NoBuffer_2_egx107.png"
            width="600px"
          />
        </div>
        <h2> Search for ingredients and add it to your personalized pantry</h2>
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
                  <div className="search-button">
                    <Button onClick={this.options}>Search</Button>
                  </div>
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
            <CardTitle>
              <h3 className="list-title">Temporary List</h3>
            </CardTitle>
            <div className="temp-list">
              {this.state.tempList.map((ingredient) => {
                return (
                  <>
                    <CardGroup className="card-group">
                      <Card>
                        <CardTitle className="pantry-card-text">
                          {ingredient.name}
                        </CardTitle>
                        <img
                          className="ingredient-img"
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        />
                        <div className="ingredient-card">
                          <button
                            onClick={() => {
                              this.addPantry(
                                ingredient,
                                this.props.current_user.id
                              );
                            }}
                          >
                            <img
                              src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646031691/Pantry%20Hero/add-svgrepo-com_1_xdol4e.svg"
                              width="30px"
                            />
                          </button>
                          <button
                            onClick={() => {
                              this.deleteTemp(ingredient.id);
                            }}
                          >
                            <img
                              src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646031720/Pantry%20Hero/trash-svgrepo-com_mm8bgh.svg"
                              width="30px"
                            />
                          </button>
                        </div>
                      </Card>
                    </CardGroup>
                  </>
                );
              })}
            </div>
          </Card>

          <Card>
            <h3 className="list-title">Pantry List</h3>
            <div className="pantry-list">
              <>
                {this.props.ingredients &&
                  this.props.ingredients.map((ingredient) => {
                    return (
                      <>
                        <CardGroup className="card-group">
                          <Card>
                            <CardTitle className="pantry-card-text">
                              {ingredient.name}
                            </CardTitle>
                            <CardTitle>
                              Quantity: {ingredient.quantity}
                            </CardTitle>
                            <img
                              className="ingredient-img"
                              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                            />
                            <div className="ingredient-card">
                              <button
                                onClick={async () => {
                                  await this.deleteIngredient(
                                    this.props.current_user.id,
                                    ingredient.id
                                  );
                                }}
                              >
                                <img
                                  src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646031720/Pantry%20Hero/trash-svgrepo-com_mm8bgh.svg"
                                  width="30px"
                                />
                              </button>
                              <button
                                onClick={() => {
                                  let quantity = ingredient.quantity + 1;
                                  this.updateIngredient(
                                    this.props.current_user.id,
                                    ingredient.id,
                                    quantity
                                  );
                                }}
                              >
                                <img
                                  src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646031691/Pantry%20Hero/add-svgrepo-com_1_xdol4e.svg"
                                  width="30px"
                                />
                              </button>
                              <button
                                onClick={() => {
                                  if (ingredient.quantity <= 1) {
                                    this.deleteIngredient(
                                      this.props.current_user.id,
                                      ingredient.id
                                    );
                                  } else {
                                    let quantity = ingredient.quantity - 1;
                                    this.updateIngredient(
                                      this.props.current_user.id,
                                      ingredient.id,
                                      quantity
                                    );
                                  }
                                }}
                              >
                                <img
                                  src="https://res.cloudinary.com/mikkavjimenez/image/upload/v1646031707/Pantry%20Hero/minus-svgrepo-com_1_a1hoyh.svg"
                                  width="30px"
                                />
                              </button>
                            </div>
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
