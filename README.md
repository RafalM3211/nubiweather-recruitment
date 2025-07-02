# NubiWeather

## About

https://rafalm3211.github.io/nubiweather-recruitment/

NubiWeather is a simple app made as a recruitment project for Nubisoft. It shows current weather in Gliwice and Hamburg as well as weather forecast for next five days.
The app shows temperature, wind speed, humidity and weather description for given city.

Among the more technical features, this app includes:

- Loading states
- Error handling
- Integration and unit tests

## Instructions on how to run the application

- Install packages

```bash
npm i
```

- Rename `.env.example` to `env` and insert your [Weatherapi](https://www.weatherapi.com/) API key

```
VITE_API_KEY=your_api_key
```

- Run the application

```bash
npm run dev
```

Tests can be run with `npm run test` command

```bash
npm run test
```
