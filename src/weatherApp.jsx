import SearchBox from "./search-box";
import DisplayInfo from "./displayInfo";
import { useState } from "react";

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  let handleInfo = (info) => {
    setWeatherData(info);
  };
  return (
    <div className="weather-app">
      <h1 style={{ color: "black" }}>Weather App</h1>
      <SearchBox handleInfo={handleInfo}></SearchBox>
      <br />
      <DisplayInfo info={weatherData}></DisplayInfo>
    </div>
  );
}

export default WeatherApp;
