import React from 'react'

const hourlyData=[
    {
id:1,
time:"now",
temperature:28,
icon:"☀️",
condition:"Sunny",
    },
    {
    id:2,
time:"10 AM",
temperature:29,
icon:"🌤️",
condition:"Cloudy",
    },
     {
    id:3,
time:"11 AM",
temperature:31,
icon:"☀️",
condition:"Sunny",
    },
     {
    id:4,
time:"12 PM",
temperature:33,
icon:"🌞",
condition:"Clear",
    },
     {
    id:5,
time:"1 PM",
temperature:32,
icon:"⛅",
condition:"Partly Cloudy",
    },
     {
    id: 6,
    time: "2 PM",
    temperature: 30,
    icon: "🌥️",
    condition: "Cloudy",
  },
]

function HourlyForecast() {
  return (
    <section className='mt-8'>
            <h2 className="text-xl font-bold mb-5">
        Hourly Forecast
      </h2>
      <div className='bg-slate-800 border border-slate-700 rounded-2xl p-5'>
       <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
        {hourlyData.map((item)=>(
            <div
              key={item.id}
              className="bg-slate-900 rounded-xl p-4 text-center hover:bg-slate-700 transition duration-300">
              
              <p className='text-slate-400 text-sm'>
                {item.time}
              </p>
              <div className='text-3xl my-4'>
                {item.icon}
              </div>

              <h3 className='text-xl font-bold'>
                {item.temperature}°C
              </h3>
              <p className="text-slate-500 text-xs mt-2">
                {item.condition}
              </p>




                </div>
        ))}
</div>
       </div>
    </section>
  )
}

export default HourlyForecast
