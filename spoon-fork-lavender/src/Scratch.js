// import React, { Component, useEffect, useState } from "react";
// import { Route, Link } from "react-router-dom";
// import axios from "axios";
// import "./App.css";
// import Restaurant from "./Components/RestaurantList";
// import { render } from "@testing-library/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// export default function App() {
//   const [category, setCategory] = useState("");
//   const [restaurants, setRestaurant] = useState("");

//   const getRestaurants = async (categorySearched) => {
//     console.log("Get Restaurants is running", category);
//     const res = await axios
//       .get(
//         `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=New_York_City&categories=${categorySearched}`,
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
//           },

//           params: {
//             categories: { category }, 
//           },
//         }
//       )

//       .then((res) => {
//         console.log(res, "hello");
//         setRestaurant(res.data);
//       })

//       .catch((err) => {
//         console.log("error");
//       });
//   };

//   // useEffect(() => {
//   //   getRestaurants();
//   // });

//   const handleChange = (e) => {
//     e.preventDefault();
//     setCategory(e.target.value);
//     console.log(category);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getRestaurants(category);
//   };

//   return (
//     <div className="App">
//       <form className="recipe-search" onSubmit={handleSubmit}>
//         <input
//           className="search-bar"
//           type="text"
//           value={category}
//           onChange={handleChange}
//         />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//       {/* <h2>{restaurants}</h2> */}
//       {restaurants &&
//         restaurants.businesses.map((restaurant) => (
//           <>
//             <div className="Restaurant-Card">
//               <h1>{restaurant.name}</h1>
//               <img
//                 src={restaurant.image_url}
//                 alt=""
//                 className="Restaurant-Image"
//               />
//               <p>
//                 {restaurant.location.address1}
//                 <br /> {restaurant.location.city}, {restaurant.location.state}{" "}
//                 {restaurant.location.zip_code}
//               </p>
//               <p>{restaurant.display_phone}</p>
//               <p>{restaurant.price}</p>
//             </div>
//           </>
//         ))}
//     </div>
//   );
// }



// DATE 

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

return (
  <>
  <div className="header-date">{dateList(new Date())}</div>
  </>
) 
}