import CurrentWeather from "@/components/widgets/CurrentWeather"
import HourlyForecast from "@/components/widgets/HourlyForecast"
import TenDayForecast from "@/components/widgets/TenDayForecast"
import WeatherWidgets from "@/components/widgets/WeatherWidgets"
import { DEFAULT_LOCATION } from "@/lib/config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${DEFAULT_LOCATION.city} - Weather Forecast`,
  description: `${DEFAULT_LOCATION.city} weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.`,
}

export default async function Home() {
  const tend = [
    {
      dt: 1681234567,
      sunrise: 1681200000,
      sunset: 1681243200,
      temp: {
        now: 25,
        min: 18,
        max: 27,
      },
      humidity: 60,
      speed: 5,
      deg: 90, 
      code: "sunrise",
  }, 
  {
    dt: 1681234567,
    sunrise: 1681200000,
    sunset: 1681243200,
    temp: {
      now: 21,
      min: 13,
      max: 24,
    },
    humidity: 60,
    speed: 5,
    deg: 90, 
    code: "sunrise",
},  
{
  dt: 1681234567,
  sunrise: 1681200000,
  sunset: 1681243200,
  temp: {
    now: 21,
    min: 13,
    max: 24,
  },
  humidity: 60,
  speed: 5,
  deg: 90, 
  code: "sunrise",
},  
{
  dt: 1681234567,
  sunrise: 1681200000,
  sunset: 1681243200,
  temp: {
    now: 21,
    min: 13,
    max: 24,
  },
  humidity: 60,
  speed: 5,
  deg: 90, 
  code: "sunrise",
},  
{
  dt: 1681234567,
  sunrise: 1681200000,
  sunset: 1681243200,
  temp: {
    now: 21,
    min: 13,
    max: 24,
  },
  humidity: 60,
  speed: 5,
  deg: 90, 
  code: "sunrise",
},  

  ];
  const live =   {
    dt: 1681234567,
    temp: {
      now: 21,
      min: 13,
      max: 24,
    },
    humidity: 60,
    speed: 5,
    sun: 15,

    deg: 60, 
    code: "sunrise",
}
  const hours = [
    { dt: 1681233600, avgtemp: 22, code: "sunrise" },
    { dt: 1681255200, avgtemp: 24, code: "sunrise" },
    { dt: 1681276800, avgtemp: 21, code: "sunrise" },
    { dt: 1681298400, avgtemp: 20, code: "sunrise" },
    { dt: 1681320000, avgtemp: 18, code: "sunrise" },
    { dt: 1681341600, avgtemp: 19, code: "sunrise" },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
          <CurrentWeather data={live} />
          <TenDayForecast data={{list: tend, hours: hours}} />
        </div>
        <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <WeatherWidgets
            data={live}
            tenD={{list: tend, hours: hours}}
          />
          <HourlyForecast data={{list: tend, hours: hours}} />

        </section>
      </div>
    </>
  )
}
