import React from "react";
import "./CurrentWeather.css";

function CurrentWeatherComp({ currentWeatherReport }) {
  console.log(currentWeatherReport);
  let [cityName] = currentWeatherReport.city.split(",");
  let weatherType = currentWeatherReport.weather[0].description;
  let icon = currentWeatherReport.weather[0].icon;
  return (
    <div className="box">
      <div className="city">
        <p className="city-name">{cityName}</p>
        <p className="weather-type">{weatherType}</p>
        <p className="temparature">
          {Math.round(currentWeatherReport.main.temp - 275)}°C
        </p>
      </div>
      <div className="weather-icon">
        <img alt="weather icon" src={`icons/${icon}.png`}></img>
        <div className="details">
          <p>Humidity</p>
          <p>{currentWeatherReport.main.humidity}% </p>
        </div>
        <div className="details">
          <p>Pressure</p>
          <p> {currentWeatherReport.main.pressure} pa</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherComp;
