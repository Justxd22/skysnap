import { Card } from "@/components/ui/card"
import { liveD } from "@/lib/types"
import Clock from "../ui/clock"
import IconComponent from "../ui/icon-component"

interface CurrentWeatherProps {
  data: liveD
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const initial = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
  const today = formatter.format(initial);

  return (
    <Card className="relative flex h-fit w-full shrink-0 flex-col justify-between overflow-hidden md:h-[25rem]">
      <div className="absolute " />
      <div>
        <div className="flex justify-between text-lg font-semibold">
          <span>{today}</span>
          <Clock initial={initial} timezone={7200} />
        </div>
        <div className="text-md mt-2 flex font-bold">
          <span>Mansoura</span>
          <i>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-0.5 h-4 w-4 fill-none stroke-black dark:stroke-white"
            >
              <path
                d="M7.39993 6.32003L15.8899 3.49003C19.6999 2.22003 21.7699 4.30003 20.5099 8.11003L17.6799 16.6C15.7799 22.31 12.6599 22.31 10.7599 16.6L9.91993 14.08L7.39993 13.24C1.68993 11.34 1.68993 8.23003 7.39993 6.32003Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1101 13.6501L13.6901 10.0601"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
      <div className="flex justify-center py-7 text-8xl font-bold md:py-10">
        {parseFloat((data.temp.now).toFixed(3))}&deg;
      </div>
      <div>
        <IconComponent
          weatherCode={"sunrise"}
        />
        {/* <div className="font-semibold">{data.weather[0].main}</div> */}
        <div className="flex gap-2 dark:text-neutral-500">
          <span>H: {parseFloat((data.temp.max).toFixed(3))}&deg;</span>
          <span>L: {parseFloat((data.temp.min).toFixed(3))}&deg;</span>
        </div>
      </div>
    </Card>
  )
}
