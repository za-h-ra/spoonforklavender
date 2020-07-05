import React from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import Logo from "../assets/Logo-Black.png";
import FavRestaurants from "./FavRestaurants";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="weather-container">
            <Weather />
          </div>
          <div className="inner-width">
            <Link to="/">
              <img src={Logo} className="header-logo"></img>
            </Link>
          </div>
          <div className="navbar-menu">
            <Link to="/">Home</Link>
            <Link to="./FavRestaurants">Restaurants</Link>
            <a href="https://www.opentable.com/">Reserve</a>
          </div>
        </nav>
      </header>
    </>
  );
}
