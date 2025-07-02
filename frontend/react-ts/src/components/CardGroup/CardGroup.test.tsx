import { render, screen } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import CardGroup from "./CardGroup";
import {
  currentDayFixure,
  forecastDayFixure2,
  forecastFixure,
} from "../../tests/fixures";
import { createQueryClient } from "../../tests/helpers";
import * as weatherCore from "../../core/weather";

jest.mock("../../core/weather");
jest.mock("../../env.ts");

const currentDayReturnMock = new Promise((resolve) => {
  resolve(currentDayFixure);
});

const forecastReturnMock = new Promise((resolve) => {
  resolve(forecastFixure);
});

test("Weather in main card changes on forecast card click", async () => {
  //arrange
  const user = userEvent.setup();
  const queryClient = createQueryClient();

  (weatherCore.getCurrentWeather as any).mockResolvedValue(
    currentDayReturnMock
  );

  (weatherCore.getForecastWeather as any).mockImplementation(() => {
    return forecastReturnMock;
  });

  render(
    <QueryClientProvider client={queryClient}>
      <CardGroup location="Gliwice" />
    </QueryClientProvider>
  );

  //act
  const dayToClickOn = await screen.findByText("Thursday");
  await user.click(dayToClickOn);

  //assert
  expect(
    await screen.findByText(forecastDayFixure2.day.condition.text)
  ).toBeInTheDocument();
});
