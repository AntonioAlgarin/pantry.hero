import React, { useState, useEffect } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Button,
  NavbarText,
} from "reactstrap";
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
          <img src={props.logo} alt="Pantry Hero Logo" width="100px"/>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav navbar>
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
            {logged_in &&
            <Link to="/Pantry" className="nav-link" onClick={closeMenu} key={3}>
              <NavItem>
                  View Pantry
              </NavItem>
            </Link>
          }
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
              {logged_in &&
              <Link to="/Pantry" className="nav-link" onClick={closeMenu} key={8}>
              <Button color="success">
                  Get Started
              </Button>
              </Link>}
          </Nav>
        </Collapse>
      </Navbar>
      </div>

  );
}
export default Header;
