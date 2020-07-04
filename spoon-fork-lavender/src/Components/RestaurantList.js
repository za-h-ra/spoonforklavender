import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function RestaurantList(props) {

  let { restaurants } = props
  return (
    <div className="restaurant-list">
      {restaurants &&
        restaurants.businesses.map((restaurant) => (
          <>
            <div className="restaurant-card">
              <div className="restaurant-top">
                <a className="restaurant-url" href={restaurant.url}>
                  <h1 className="restaurant-name">{restaurant.name}</h1>
                </a>
                
                <img
                  src={restaurant.image_url}
                  alt=""
                  className="restaurant-image"
                />
              </div>
              <div className="restaurant-details">
                <h2>Address</h2>
                <div className="address-border"></div>
                <p>
                  {restaurant.location.address1}
                  <br /> {restaurant.location.city}, {restaurant.location.state}{" "}
                  {restaurant.location.zip_code}
                </p>
                <h2>Phone Number
                <div className="number-border"></div>
                </h2>
                <p>{restaurant.display_phone}</p>
                <h2>Rating
                <div className="rating-border"></div>
                </h2>
                <p>
                  {restaurant.rating} based on {restaurant.review_count}{" "}
                  reviews
                </p>
                <button>More Information</button>
              </div>
            </div>
          </>
        ))}
    </div>
  );

}

library.add(fab, faSearch, faPhone);
