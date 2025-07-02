import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import WeatherCard from "./WeatherCard";
import { currentDayFixure, forecastDayFixure } from "../../tests/fixures";
import { createQueryClient } from "../../tests/helpers";
import * as weatherCore from "../../core/weather";

jest.mock("../../core/weather");
jest.mock("../../env.ts");

const currentDayReturnMock = new Promise((resolve) => {
  resolve(currentDayFixure);
});

test("Renders with correct values", async () => {
  //arrange
  const queryClient = createQueryClient();

  (weatherCore.getCurrentWeather as any).mockResolvedValue(
    currentDayReturnMock
  );

  //act
  render(
    <QueryClientProvider client={queryClient}>
      <WeatherCard
        date={forecastDayFixure.date}
        day={forecastDayFixure.day}
        location="Gliwice"
      />
    </QueryClientProvider>
  );

  //assert
  expect(
    await screen.findByRole("heading", { name: "Gliwice" })
  ).toBeInTheDocument();
  expect(
    await screen.findByText(`${forecastDayFixure.day.maxtemp_c}\u00B0C`)
  ).toBeInTheDocument();
  expect(
    await screen.findByText(`Wind: ${forecastDayFixure.day.maxwind_kph}km/h`)
  ).toBeInTheDocument();
  expect(
    await screen.findByText(`Humidity: ${forecastDayFixure.day.avghumidity}%`)
  ).toBeInTheDocument();
});
