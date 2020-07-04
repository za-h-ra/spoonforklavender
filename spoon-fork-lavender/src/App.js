import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RestaurantList from "./Components/RestaurantList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
  render() {
    return (<>
      <Route path="/" exact>

      </Route>
      <div>
        <Header
          title="SPOONFORKLAVENDER"
        />
        <RestaurantList />
        <Footer />
      </div>
      </>
    );
  }
}
