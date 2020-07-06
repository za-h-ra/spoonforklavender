import React, { useState } from "react";
import "../App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPhone } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function RestaurantList(props) {
  let { restaurants } = props;
  return (
    <div className="restaurant-list">
      {restaurants &&
        restaurants.businesses.map((restaurant) => (
          <>
            <div className="restaurant-card">
              <div className="restaurant-top">
                <a className="restaurant-url" href={restaurant.url}>
                  <h1 className="r-name">{restaurant.name}</h1>
                </a>
                <img
                  src={restaurant.image_url}
                  alt=""
                  className="restaurant-image"
                />
                <p>{restaurant.categories[0].title} <br /> {restaurant.price}</p>
              </div>
              <div className="restaurant-details">
                <h2 className="r-title">Address</h2>
               
                <p>
                  {restaurant.location.address1}
                  <br /> {restaurant.location.city}, {restaurant.location.state}{" "}
                  {restaurant.location.zip_code}
                </p>
                <h2 className="r-title">
                  Phone Number
                </h2>
                <p>{restaurant.display_phone}</p>
                <h2 className="r-title">
                  Rating
                </h2>
                <p>
                  {restaurant.rating} based on {restaurant.review_count} reviews
                </p>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

library.add(fab, faSearch, faPhone);
