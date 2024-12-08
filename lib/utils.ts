import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateFeelsLike(tempC: number, humidity: number, windSpeedKph: number): number {
  const tempF = tempC * 1.8 + 32; // Convert to Fahrenheit
  const windSpeedMph = windSpeedKph * 0.621371; // Convert to MPH

  let feelsLikeF: number;

  if (tempF > 80 && humidity > 40) {
    // Heat Index calculation (simplified for demonstration)
    feelsLikeF =
      -42.379 +
      2.04901523 * tempF +
      10.14333127 * humidity -
      0.22475541 * tempF * humidity -
      6.83783e-3 * tempF ** 2 -
      5.481717e-2 * humidity ** 2 +
      1.22874e-3 * tempF ** 2 * humidity +
      8.5282e-4 * tempF * humidity ** 2 -
      1.99e-6 * tempF ** 2 * humidity ** 2;
  } else if (tempF < 50 && windSpeedMph > 3) {
    // Wind Chill calculation
    feelsLikeF =
      35.74 +
      0.6215 * tempF -
      35.75 * windSpeedMph ** 0.16 +
      0.4275 * tempF * windSpeedMph ** 0.16;
  } else {
    // No significant adjustment needed
    feelsLikeF = tempF;
  }

  // Convert back to Celsius
  return (feelsLikeF - 32) / 1.8;
}
