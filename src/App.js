import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/Search";
import CurrentWeatherComp from "./components/current-weather/CurrentWeatherComp";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import { useState } from "react";
import Forecast from "./components/forecast-weather/Forecast";

function App() {
  let [currentWeatherReport, setCurrentWeatherReport] = useState();
  let [forecastWeatherReport, setForecastWeatherReport] = useState();

  let handleOnSearchChange = (searchData) => {
    console.log(searchData);
    let [lat, lon] = searchData.value.split(" ");
    fetch(
      ` ${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        let finalWeatherRes = { ...res, city: searchData.label };
        setCurrentWeatherReport(finalWeatherRes);
        console.log(finalWeatherRes);
      });
    fetch(
      ` ${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => {
        let finalForecastRes = { ...res, city: searchData.label };
        setForecastWeatherReport(finalForecastRes);
        console.log(finalForecastRes);
      });
  };

  return (
    <div className="root">
      <h1 className="title">Weather Forecast</h1>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}></Search>
        {currentWeatherReport && (
          <CurrentWeatherComp
            currentWeatherReport={currentWeatherReport}
          ></CurrentWeatherComp>
        )}
      </div>
      <div className="forecast">
        {forecastWeatherReport && (
          <Forecast forecastWeatherReport={forecastWeatherReport}></Forecast>
        )}
      </div>
    </div>
  );
}

export default App;
