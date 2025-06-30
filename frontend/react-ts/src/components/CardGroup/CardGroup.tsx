import { Box } from "@mui/material";
import ForecastCard from "../ForecastCard/ForecastCard";
import WeatherCard from "../WeatherCard/WeatherCard";

export default function CardGroup() {
  return (
    <Box>
      <WeatherCard />
      <Box
        sx={{ mt: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </Box>
    </Box>
  );
}
