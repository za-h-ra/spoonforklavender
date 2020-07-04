import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import '../App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function RestaurantList() {
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
        console.log(res.data)
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
  };

  return (
    <div className="restaurant-list">
      <form className="restaurant-search" onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={category}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
           <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </button>
      </form>
      {restaurants &&
        restaurants.businesses.map((restaurant) => (
          <>
            <div className="Restaurant-Card">
              <a href={restaurant.url}><h1>{restaurant.name}</h1></a>
              <img
                src={restaurant.image_url}
                alt=""
                className="Restaurant-Image"
              />
              <p>
                {restaurant.location.address1}
                <br /> {restaurant.location.city}, {restaurant.location.state}{" "}
                {restaurant.location.zip_code}
              </p>
              <p>{restaurant.display_phone}</p>
              <p>{restaurant.price}</p>
              <p>Currently available for {restaurant.transactions[0]} & {restaurant.transactions[1]}!</p>
              <p>Rating: {restaurant.rating} based on {restaurant.review_count} reviews</p>
            </div>
          </>
        ))}
    </div>
  );
}

library.add(faSearch)