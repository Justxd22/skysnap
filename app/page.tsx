'use client';
import CurrentWeather from "@/components/widgets/CurrentWeather"
import HourlyForecast from "@/components/widgets/HourlyForecast"
import TenDayForecast from "@/components/widgets/TenDayForecast"
import WeatherWidgets from "@/components/widgets/WeatherWidgets"
import { DEFAULT_LOCATION } from "@/lib/config"
import { Metadata } from "next"
import { tend, hours } from "./const"
import { database } from "../lib/firebase";
import { ref, get, DataSnapshot } from "firebase/database";
import { useEffect, useState } from "react"



export default function Home() {
  const [liveData, setLiveData] = useState<any>(null);

  const dbRef = ref(database, "liveData");

  const fetchLiveWeather = async () => {
    try {
      const snapshot: DataSnapshot = await get(dbRef);
      if (snapshot.exists()) {
        setLiveData(snapshot.val());
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching live weather data:", error);
    }
  };

  useEffect(() => {
    // Fetch hourly and ten-day forecast only once

    // Poll live weather data every second
    const intervalId = setInterval(fetchLiveWeather, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);


  if (!liveData) {
    return <div>Loading...</div>; // Add a loading state
  }
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2">
          <CurrentWeather data={liveData} />
          <TenDayForecast data={{ list: tend, hours: hours }} />
        </div>
        <section className="grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          <WeatherWidgets
            data={liveData}
            tenD={{ list: tend, hours: hours }}
          />
          <HourlyForecast data={{ list: tend, hours: hours }} />

        </section>
      </div>
    </>
  )
}
