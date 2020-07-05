import React from "react";

export default function FavRestaurants(props) {
  return (
    <div className="favorite-restaurants">
      <div className="res-grid">
        <h1 className="res-title">{props.title}</h1>
        <img className="res-image" src={props.image}></img>
        <p>{props.category}</p>
        <h2>Address</h2>
        <p>{props.address}</p>
      </div>
    </div>
  );
}
