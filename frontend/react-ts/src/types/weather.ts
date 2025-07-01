export interface ForecastDay {
    date: string;
    day: ForecastDayWeatherData;
}

export interface ForecastDayWeatherData {
    avghumidity: number;
    maxtemp_c: number;
    maxwind_kph: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
}

