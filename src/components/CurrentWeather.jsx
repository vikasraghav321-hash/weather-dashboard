
function CurrentWeather({ city, temperature, condition, feelsLike, high, low }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 mt-8">

      {/* Location */}
      <div>
        <p className="text-slate-400 text-sm">
          Current Weather
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {city}
        </h2>
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-between mt-8">

        <div>
          <h1 className="text-6xl font-bold">
            {temperature}°C
          </h1>

          <p className="text-cyan-400 mt-3 text-lg">
            {condition}
          </p>
        </div>

        <div className="text-7xl">
          ☀️
        </div>

      </div>

      {/* Weather Information */}
      <div className="grid grid-cols-3 gap-4 mt-8 border-t border-slate-700 pt-6">

        <div>
          <p className="text-slate-400 text-sm">
            Feels Like
          </p>
          <h3 className="text-xl font-semibold mt-2">
            {feelsLike}°C
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            High
          </p>
          <h3 className="text-xl font-semibold mt-2">
            {high}°C
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Low
          </p>
          <h3 className="text-xl font-semibold mt-2">
            {low}°C
          </h3>
        </div>

      </div>

    </div>
  );
}

export default CurrentWeather;
