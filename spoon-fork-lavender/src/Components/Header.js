import React from "react";
import Date from "./Date";
import Weather from "./Weather";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="title">
            <h1 className="header-title">{props.title}</h1>
            {/* <Date /> */}
          </div>
          <div className="weather">
            <h1>WEATHER GOES HERE</h1>
            {/* <Weather /> */}
          </div>
        </nav>
      </header>
    </>
  );
}
