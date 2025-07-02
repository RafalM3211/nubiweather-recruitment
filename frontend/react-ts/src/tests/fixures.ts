import { CurrentDay, ForecastDay } from "../types/weather";

export const currentDayFixure = {
    current: {
      condition: { icon: "/weather/128x128/day/200.png", text: "Sunny" },
      humidity: 40,
      temp_c: 24,
      wind_kph: 50,
    },
  } satisfies CurrentDay;

export const forecastDayFixure = {
    date: "2025-07-01",
    day: {
      condition: {
        code: 200,
        icon: "/weather/128x128/day/200.png",
        text: "Sunny",
      },
      avghumidity: 40,
      maxtemp_c: 26,
      maxwind_kph: 30,
    },
  } satisfies ForecastDay;