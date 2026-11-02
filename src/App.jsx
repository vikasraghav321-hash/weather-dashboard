
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";

import {
  searchCity,
  getWeather,
} from "./services/weatherApi";

// Convert weather codes into descriptions
function getWeatherDescription(code) {
  if (code === 0) return "Clear Sky";
  if (code <= 3) return "Partly Cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 82) return "Rain Showers";
  if (code <= 86) return "Snow Showers";
  if (code <= 99) return "Thunderstorm";

  return "Unknown";
}

function App() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("Mathura");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(city) {
    try {
      setLoading(true);
      setError("");

      // Get city coordinates
      const location = await searchCity(city);

      // Get weather information
      const weatherData = await getWeather(
        location.latitude,
        location.longitude
      );

      setWeather(weatherData);
      setCityName(
        `${location.name}, ${location.country}`
      );

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Load default city weather
  useEffect(() => {
    handleSearch("Mathura");
  }, []);

  const current = weather?.current;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <Navbar />

      <main className="max-w-7xl mx-auto mt-8">

        <SearchBar
          onSearch={handleSearch}
          loading={loading}
        />

        {error && (
          <p className="text-red-400 mt-4">
            {error}
          </p>
        )}

        {loading && !weather && (
          <p className="text-cyan-400 mt-6">
            Fetching weather data...
          </p>
        )}

        {current && (
          <>
            <CurrentWeather
              city={cityName}
              temperature={Math.round(
                current.temperature_2m
              )}
              condition={getWeatherDescription(
                current.weather_code
              )}
              feelsLike={Math.round(
                current.apparent_temperature
              )}
              high={Math.round(
                weather.daily.temperature_2m_max[0]
              )}
              low={Math.round(
                weather.daily.temperature_2m_min[0]
              )}
            />

            <WeatherDetails />

            <HourlyForecast />

            <WeeklyForecast />
          </>
        )}

      </main>

    </div>
  );
}

export default App;
