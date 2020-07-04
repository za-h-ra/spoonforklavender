import React from "react";

export default function Date() {

  const dateList = (d) => {

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days(d.getDay());
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day}, ${month} ${date}, ${year}`;

  }
  
// new Date
  return (<>
    <div className="location-box">
      <div className="location">New York, NY, US</div>
      <div className="header-date">{dateList(new Date())}</div>
    </div>
    </>
  ) 
}
