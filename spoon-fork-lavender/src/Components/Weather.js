import React, { useState } from "react";
import Axios from "axios";

export default function Weather() {
  // const api = {
  //   key: "5f60be87cb75b72fb2e9e22ea15890bd",
  //   url: "https://api.openweathermap.org/data/2.5/weather"
  // }

  const [weather, setWeather] = useState("");

  const getWeather = async () => {
    const apiCall = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          APPID: "e0efd61dc4f0bfeaa09cb1ce99da618e",
          units: "imperial",
          q: "New York City",
        },
      }
    )

      .then((result) => {
        console.log(result);
        // setWeather(result);
      })

      .catch((err) => {
        console.log("Error!");
      });
  };

  getWeather();

  return (
    <>
      <div className="weather-data">
        <main className="weather-card">
          <div className="weather-box">
            <div className="location">
              <p>{weather.name}</p>
            </div>
            {/* <div className="temperature">{weather}</div> */}
          </div>
        </main>
      </div>
    </>
  );
}
