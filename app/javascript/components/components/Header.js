import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs">AboutUs</NavLink>
          </li>
          <li>
            <NavLink to="/RecipeIndex">View Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/Pantry">View Pantry</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
