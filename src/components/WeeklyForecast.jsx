
const weeklyData = [
  {
    id: 1,
    day: "Monday",
    date: "Nov 02",
    icon: "☀️",
    condition: "Sunny",
    maxTemp: 32,
    minTemp: 24,
  },
  {
    id: 2,
    day: "Tuesday",
    date: "Nov 03",
    icon: "🌤️",
    condition: "Partly Cloudy",
    maxTemp: 30,
    minTemp: 23,
  },
  {
    id: 3,
    day: "Wednesday",
    date: "Nov 04",
    icon: "🌧️",
    condition: "Rainy",
    maxTemp: 27,
    minTemp: 21,
  },
  {
    id: 4,
    day: "Thursday",
    date: "Nov 05",
    icon: "⛅",
    condition: "Cloudy",
    maxTemp: 29,
    minTemp: 22,
  },
  {
    id: 5,
    day: "Friday",
    date: "Nov 06",
    icon: "☀️",
    condition: "Sunny",
    maxTemp: 33,
    minTemp: 25,
  },
  {
    id: 6,
    day: "Saturday",
    date: "Nov 07",
    icon: "🌦️",
    condition: "Showers",
    maxTemp: 28,
    minTemp: 22,
  },
  {
    id: 7,
    day: "Sunday",
    date: "Nov 08",
    icon: "🌤️",
    condition: "Partly Cloudy",
    maxTemp: 31,
    minTemp: 24,
  },
];

function WeeklyForecast() {
  return (
    <section className="mt-8">

      <h2 className="text-xl font-bold mb-5">
        7 Days Forecast
      </h2>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">

        <div className="space-y-4">

          {weeklyData.map((item) => (

            <div
              key={item.id}
              className="grid grid-cols-3 sm:grid-cols-5 items-center gap-3 border-b border-slate-700 pb-4 last:border-none last:pb-0 hover:bg-slate-700/30 rounded-lg transition p-2"
            >

              {/* Day */}
              <div>
                <h3 className="font-semibold">
                  {item.day}
                </h3>

                <p className="text-xs text-slate-400">
                  {item.date}
                </p>
              </div>

              {/* Weather Icon */}
              <div className="text-2xl text-center">
                {item.icon}
              </div>

              {/* Condition */}
              <p className="text-sm text-slate-400 hidden sm:block">
                {item.condition}
              </p>

              {/* Temperature */}
              <div className="flex justify-end gap-3 col-span-2 sm:col-span-1">

                <span className="font-semibold">
                  {item.maxTemp}°
                </span>

                <span className="text-slate-400">
                  {item.minTemp}°
                </span>

              </div>

              {/* Mobile Condition */}
              <p className="text-xs text-slate-400 sm:hidden col-span-3">
                {item.condition}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WeeklyForecast;
