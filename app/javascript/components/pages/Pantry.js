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
      // pantryIngredients: this.props.ingredients,
      pantryIngredients: [],
      search: null,
      dropDownOpen: false,
      tempList: []
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

  readPantry = (user_id) => {
      fetch(`http://localhost:3000/ingredients/?user_id=${user_id}`)
        .then((response) => response.json())
        //set the state with the data from the backend into the empty array
        .then((ingredientsArray) => this.setState({ pantryIngredients: ingredientsArray }))
        .catch((errors) => console.log("Pantry read errors", errors));
    };

  componentDidMount(){
    this.readPantry(this.props.current_user.id);
  }

  addIngredient = (ingredient) => {
    let { tempList } = this.state;
    tempList.push(ingredient);
    this.setState({ tempList: tempList });
  };

  render() {
    this.readPantry(this.props.current_user.id);
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
               <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}/>
            <li>{ingredient.name}</li>
            </>
          )
          })}
        </ul>
        <button onClick={() => this.props.createIngredient()}>
          Add Ingredient
        </button>
        <h3>Pantry List</h3>
        <ul>
          {this.state.pantryIngredients.map((ingredient) => {
            return <li>{ingredient.name}</li>;
          })}
        </ul>
      </>
    );
  }
}
