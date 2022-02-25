import React, { useState, useEffect } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import PantryHero from "../assets/pantry_hero_full1.png";
import { Link } from "react-router-dom";

function Header(props) {
  const {
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  } = props;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/">
          <img src={PantryHero} alt="Pantry Hero Logo" width="150px" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <Link to="/" onClick={closeMenu} className="nav-link" key={1}>
              <NavItem>
                  Home
              </NavItem>
            </Link>
            <Link to="/RecipeIndex" className="nav-link" onClick={closeMenu} key={2}>
              <NavItem>
                  View Recipes
              </NavItem>
            </Link>
            <Link to="/Pantry" className="nav-link" onClick={closeMenu} key={3}>
              <NavItem>
                  View Pantry
              </NavItem>
            </Link>
            <Link to="/AboutUs" className="nav-link" onClick={closeMenu} key={4}>
              <NavItem>
                  About Us
              </NavItem>
            </Link>
            {logged_in &&
              <NavItem className="nav-link"> <a href={sign_out_route}>Sign Out</a></NavItem>}
            {!logged_in &&
              <NavItem className="nav-link"><a href={sign_in_route}>Sign In</a></NavItem>}
            {!logged_in &&
              <NavItem className="nav-link"><a href={new_user_route}>Sign Up</a></NavItem>}
          </Nav>
        </Collapse>
      </Navbar>
      </div>
  );
}
export default Header;
