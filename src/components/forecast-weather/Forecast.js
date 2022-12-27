import React from "react";
import "./Forecast.css";

function Forecast({ forecastWeatherReport }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let c = 0;
  let obj = forecastWeatherReport.list.filter((item, index) => {
    let [date, time] = item.dt_txt.split(" ");
    let a = new Date().getDay();
    let b = new Date(date).getDay();

    if (c != b) {
      if (a != b) {
        c = b;
        console.log(a);
        console.log(b);
        return item;
      }
    }
  });
  console.log(obj);

  return (
    <div className="upper-div">
      {obj.map((item, index) => {
        let [date, time] = item.dt_txt.split(" ");
        return (
          <div class="card">
            <div card-top>
              <img
                className="card-icon"
                src={`icons/${item.weather[0].icon}.png`}
                class="card-img-top"
                alt="icon"
              ></img>
              <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
            </div>
            <div class="card-body">
              <h5 class="card-title">{weekday[new Date(date).getDay()]}</h5>
              <p class="card-text">{item.weather[0].description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Humidity {item.main.humidity} %</li>
              <li class="list-group-item">Pressure {item.main.pressure} pa</li>
              {/* <li class="list-group-item">A third item</li> */}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
