
import CurrentWeather from "./components/CurrentWeather";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      <Navbar />

      <main className="max-w-7xl mx-auto mt-8">

        <SearchBar />

        <h1 className="text-3xl font-bold mt-8">
          Weather Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Check your city's weather conditions.
        </p>


        <CurrentWeather
        city="Mathura india"
        temperature="28"
        condition="sunny"
        feelsLike={30}
        high={32}
        low={24}
        
        />
   <WeatherDetails/>
      </main>

    </div>
  );
}

export default App;
