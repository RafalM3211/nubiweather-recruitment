export interface DayWeatherData {
    avghumidity: number;
    maxtemp_c: number;
    maxwind_kph: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
  }