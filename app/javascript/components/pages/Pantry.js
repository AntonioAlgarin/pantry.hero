import React, { Component } from "react";
import { pantryIngredients } from "../mockPantry";
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
      pantryIngredients: pantryIngredients,
      search: null,
      dropDownOpen: false,
    };
  }

  options = () => {
    let { search } = this.state;
    this.setState({ searchResults: pantryIngredients });
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

  addIngredient = (ingredient) => {
    let { pantryIngredients } = this.state;
    pantryIngredients.push(ingredient);
    this.setState({ pantryIngredients: pantryIngredients });
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

        <button onClick={() => this.props.createIngredient()}>
          Add Ingredient
        </button>
        <ul>
          {pantryIngredients.map((ingredient) => {
            return <li>{ingredient.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
