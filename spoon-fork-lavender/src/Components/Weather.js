import React, { useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon, faFontAwesome } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";

export default function Weather() {


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
    );
    setWeather(apiCall.data);
    console.log(apiCall);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      {weather && (
        <div className="weather-data">
          <main className="weather-card">
            <div className="weather-box">
                <p className="weather-temp">{Math.floor(weather.main.temp)} <FontAwesomeIcon icon={faTemperatureHigh} /></p>
                <p className="weather-city">{weather.name}, {weather.sys.country}</p>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

