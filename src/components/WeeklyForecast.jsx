
function getWeatherIcon(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "🌫️";
  if (code <= 57) return "🌦️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "❄️";
  if (code <= 82) return "🌧️";
  if (code <= 86) return "🌨️";
  if (code <= 99) return "⛈️";

  return "🌤️";
}

function getDayName(date, index) {
  if (index === 0) return "Today";

  return new Date(`${date}T12:00:00`).toLocaleDateString(
    "en-US",
    { weekday: "long" }
  );
}

function WeeklyForecast({ daily }) {
  if (!daily || !daily.time) {
    return null;
  }

  return (
    <section className="mt-8 mb-8">
      <h2 className="text-xl font-bold mb-5">
        7-Day Forecast
      </h2>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <div className="space-y-4">
          {daily.time.map((date, index) => (
            <div
              key={date}
              className="grid grid-cols-4 sm:grid-cols-5 items-center gap-3 border-b border-slate-700 pb-4 last:border-none last:pb-0"
            >
              <p className="text-slate-300 text-sm">
                {getDayName(date, index)}
              </p>

              <div className="text-2xl text-center">
                {getWeatherIcon(daily.weather_code[index])}
              </div>

              <p className="text-white font-semibold text-center">
                {Math.round(daily.temperature_2m_max[index])}°
              </p>

              <p className="text-slate-400 text-center">
                {Math.round(daily.temperature_2m_min[index])}°
              </p>

              <p className="hidden sm:block text-slate-400 text-xs text-right">
                {date}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xs text-slate-500 mt-4">
          <span>Day</span>
          <span>Weather</span>
          <span>High</span>
          <span>Low</span>
        </div>
      </div>
    </section>
  );
}

export default WeeklyForecast;
