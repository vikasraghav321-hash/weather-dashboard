
const weatherDetails = [
  {
    id: 1,
    title: "Humidity",
    value: "humidity",
    description: "Air moisture",
    icon: "💧",
    unit: "%",
  },
  {
    id: 2,
    title: "Wind Speed",
    value: "windSpeed",
    description: "Wind movement",
    icon: "🌬️",
    unit: "km/h",
  },
  {
    id: 3,
    title: "Pressure",
    value: "pressure",
    description: "Atmospheric pressure",
    icon: "🌡️",
    unit: "hPa",
  },
  {
    id: 4,
    title: "Visibility",
    value: "visibility",
    description: "Viewing distance",
    icon: "👁️",
    unit: "km",
  },
];

function WeatherDetails({
  humidity,
  windSpeed,
  pressure,
  visibility,
}) {
  const values = {
    humidity,
    windSpeed,
    pressure,
    visibility,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

      {weatherDetails.map((item) => (
        <div
          key={item.id}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 transition duration-300"
        >

          <div className="flex justify-between items-center">

            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <span className="text-2xl">
              {item.icon}
            </span>

          </div>

          <h2 className="text-2xl font-bold mt-5">
            {values[item.value] ?? "--"}{" "}
            <span className="text-sm text-slate-400">
              {item.unit}
            </span>
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            {item.description}
          </p>

        </div>
      ))}

    </div>
  );
}

export default WeatherDetails;
