import React, { Component, useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Restaurant from "./Restaurant";
import { render } from "@testing-library/react";

export default function App() {
  const [category, setCategory] = useState("");
  const [restaurants, setRestaurant] = useState("");

  const getRestaurants = async (categorySearched) => {
    console.log("Get Restaurants is running", category);
    const res = await axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=New_York_City&categories=${categorySearched}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },

          params: {
            categories: { category }, // handleChange  onChange
          },
        }
      )

      .then((res) => {
        console.log(res, "hello");
        setRestaurant(res.data.businesses);
      })

      .catch((err) => {
        console.log("error");
      });
  };

  // useEffect(() => {
  //   getRestaurants();
  // });

  const handleChange = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
    console.log(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRestaurants(category);
  };

  return (
    <div className="App">
      <form className="recipe-search" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          value={category}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {restaurants.map((restaurant) => {
        <Restaurant />;
      })}
    </div>
  );
}
