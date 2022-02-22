import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
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
          <li>
            {logged_in && <a href={sign_out_route}>Sign Out</a>}
            {!logged_in && <a href={sign_in_route}>Sign In</a>}
            {!logged_in && <a href={new_user_route}>Sign Up</a>}
          </li>
        </ul>
      </nav>
    );
  }
}
