import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./search-box.css";
import Button from "@mui/material/Button";

function SearchBox({ handleInfo }) {
  const api_url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "b03251af98ac678d920fb05b04408e30";
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  let getWetherInfo = async () => {
    try {
      const response = await fetch(
        `${api_url}?q=${searchTerm}&appid=${api_key}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      let info = {
        city: data.name,
        weather: data.weather[0].main,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
      };
      return info;
    } catch (err) {
      throw err;
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setError(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSearchTerm("");
      let NewData = await getWetherInfo();
      if (NewData) {
        handleInfo(NewData);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="searchContainer" style={{ marginTop: 30 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="City Name"
          variant="filled"
          aria-label="City Name"
          required
          value={searchTerm}
          onChange={handleSearch}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>City is Not Found</p>}
    </div>
  );
}
export default SearchBox;
