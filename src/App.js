import React, { useEffect, useState, Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RestaurantList from "./Components/RestaurantList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import FavRestaurants from "./Components/FavRestaurants";
import Pasta from "./assets/pasta.jpg";

function App(props) {
  const [category, setCategory] = useState("");
  const [restaurants, setRestaurant] = useState("");

  const getRestaurants = async (categorySearched) => {
    const res = await axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=New_York_City&categories=${categorySearched}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },

          params: {
            categories: { category },
          },
        }
      )

      .then((res) => {
        setRestaurant(res.data);
        console.log(res.data);
      })

      .catch((err) => {
        console.log("Error");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRestaurants(category);
    props.history.push("/restaurants");
    setCategory("");
  };

  return (
    <>
      <Header />
      <Route path="/" exact>
        <img className="main-image" src={Pasta}></img>
        <h1 className="main-title">
          Discover your favorite cuisine <br /> in New York City
        </h1>
        <div className="search-container">
          <form className="restaurant-search" onSubmit={handleSubmit}>
            <input
              className="search-bar"
              type="text"
              placeholder="Search"
              value={category}
              onChange={handleChange}
            />
            <button className="search-button" type="submit">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </button>
          </form>
        </div>
      </Route>
      <div>
        <Route path="/restaurants">
          <RestaurantList restaurants={restaurants} />
        </Route>
        <Route path="/FavRestaurants">
          <FavRestaurants />
        </Route>
        <Footer />
      </div>
    </>
  );
}

library.add(faSearch);

export default withRouter(App);
