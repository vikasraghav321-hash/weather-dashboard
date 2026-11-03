
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

function HourlyForecast({ hourly, currentTime }) {
  if (!hourly || !hourly.time) {
    return null;
  }

  let startIndex = hourly.time.findIndex(
    (time) => time >= currentTime
  );

  if (startIndex === -1) {
    startIndex = 0;
  }

  const next24Hours = hourly.time
    .slice(startIndex, startIndex + 24)
    .map((time, index) => ({
      time,
      temperature: hourly.temperature_2m[startIndex + index],
      weatherCode: hourly.weather_code[startIndex + index],
    }));

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-5">
        Hourly Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {next24Hours.map((item, index) => (
          <div
            key={item.time}
            className="min-w-[120px] shrink-0 bg-slate-800 border border-slate-700 rounded-2xl p-4 text-center hover:border-cyan-400 transition"
          >
            <p className="text-slate-400 text-sm">
              {index === 0
                ? "Now"
                : new Date(item.time).toLocaleTimeString(
                    [],
                    { hour: "numeric", hour12: true }
                  )}
            </p>

            <div className="text-3xl my-4">
              {getWeatherIcon(item.weatherCode)}
            </div>

            <p className="text-xl font-bold">
              {Math.round(item.temperature)}°C
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HourlyForecast;
