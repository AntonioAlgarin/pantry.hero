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
import "./Header.css";

// export default class Header extends Component {
// render() {
// const {
//   logged_in,
//   current_user,
//   new_user_route,
//   sign_in_route,
//   sign_out_route,
// } = this.props;

// //     return (
// //       <nav>
// //         <ul>
// //           <li>
// //             <NavLink to="/">Home</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/AboutUs">AboutUs</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/RecipeIndex">View Recipes</NavLink>
// //           </li>
// //           <li>
// //             <NavLink to="/Pantry">View Pantry</NavLink>
// //           </li>
// //           <li>
// {logged_in && <a href={sign_out_route}>Sign Out</a>}
// {!logged_in && <a href={sign_in_route}>Sign In</a>}
// {!logged_in && <a href={new_user_route}>Sign Up</a>}
// //           </li>
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }
// // function MenuBar() {
// //   const [click, setClick] = useState(false);
// //   const [button, setButton] = useState(true);
// //   const handleClick = () => setClick(!click);
// //   const closeMenu = () => setClick(false);
// //   const showButton = () => {
// //     if (window.innerWidth <= 960) {
// //       setButton(false);
// //     } else {
// //       setButton(true);
// //     }
// //   };
// //   useEffect(() => {
// //     showButton();
// //   }, []);
// //   window.addEventListener("resize", showButton);
//
// return (
//     <div>
//       <Navbar color="dark" dark expand="md" light>
//         <NavbarBrand href="/">
//           <img src={PantryHero} alt="Pantry Here Logo" width="100px" />
//         </NavbarBrand>
//         <NavbarToggler onClick={function noRefCheck() {}} />
//         <Collapse navbar>
//           <Nav className="me-auto" navbar>
//             // <Link to="/">
//               <NavItem>
//                 <NavLink className="nav-link" onClick={closeMenu}>
//                   <p>Home</p>
//                 </NavLink>
//               </NavItem>
//             // </Link>
//             // <Link to="/shlfindex">
//               <NavItem>
//                 <NavLink className="nav-link" onClick={closeMenu}>
//                   Shlf
//                 </NavLink>
//               </NavItem>
//             // </Link>
//             // <Link to="/blogindex">
//               <NavItem>
//                 <NavLink
//                   to="/blogindex"
//                   className="nav-link"
//                   onClick={closeMenu}
//                 >
//                   Blog
//                 </NavLink>
//               </NavItem>
//             // </Link>
//             // <Link to="/about">
//               <NavItem>
//                 <NavLink to="/about" className="nav-link" onClick={closeMenu}>
//                   About
//                 </NavLink>
//               </NavItem>
//             // </Link>
//             // <Link to="/about">
//             <NavItem>
//               <NavLink to="/about" className="nav-link" onClick={closeMenu}>
//                 Login
//               </NavLink>
//             </NavItem>
//             // </Link>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }
// }

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
            <Link to="/">
              <NavItem>
                <NavLink className="nav-link" onClick={closeMenu}>
                  <p>Home</p>
                </NavLink>
              </NavItem>
            </Link>
            <Link to="/RecipeIndex">
              <NavItem>
                <NavLink className="nav-link">View Recipes</NavLink>
              </NavItem>
            </Link>
            <Link to="/Pantry">
              <NavItem>
                <NavLink to="/Pantry" className="nav-link" onClick={closeMenu}>
                  View Pantry
                </NavLink>
              </NavItem>
            </Link>
            <Link to="/AboutUs">
              <NavItem>
                <NavLink to="/AboutUs" className="nav-link" onClick={closeMenu}>
                  About Us
                </NavLink>
              </NavItem>
            </Link>
            <Link>
              <NavItem>
                {/* <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem> */}
                {logged_in && <NavLink href={sign_out_route}>Sign Out</NavLink>}
                <NavLink>
                  {!logged_in && <a href={sign_in_route}>Sign In</a>}
                </NavLink>
                <NavLink>
                  {!logged_in && <a href={new_user_route}>Sign Up</a>}
                </NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
      <div id="footer-bg"></div>
    </div>
  );
}

export default Header;
