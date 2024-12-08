type Coordinates = {
  lon: string
  lat: string
}
export type Location = {
  city: string
  coord: Coordinates
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}


export type Temperature = {
  now: number
  min: number
  max: number
}


export type ForecastData = {
  dt: number
  sunrise: number
  sunset: number
  temp: Temperature
  humidity: number
  code: string
}

export type sixhour = {
  dt: number
  avgtemp: number
  code: string
}

export type TenDayForecastData = {
  list: ForecastData[]
  hours: sixhour[]
}

export type liveD = {
  dt: number

  temp: Temperature
  humidity: number
  speed: number
  sun: number

  deg: number
  code: string
}

