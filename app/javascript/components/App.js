import React, { Component } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Pantry from "./pages/Pantry";
import RecipeIndex from "./pages/RecipeIndex";
import RecipeShow from "./pages/RecipeShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {}
  }
    render() {
    return (
      <>
      <Router>
      <Header/>
      <Switch>
      <Route
        path="/AboutUs"
        component={AboutUs}
      />
      <Route
        path="/Pantry"
        component={Pantry}
      />
      <Route
        path="/RecipeIndex"
        component={RecipeIndex}
      />
      <Route
        path="/RecipeShow"
        component={RecipeShow}
      />
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        path="*"
        component={NotFound}
      />
      </Switch>
      <Footer/>
      </Router>
      </>
    );
  }
}
