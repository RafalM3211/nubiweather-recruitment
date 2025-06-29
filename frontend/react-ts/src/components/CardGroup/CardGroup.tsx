import { Box } from "@mui/material";
import ForecastCard from "../ForecastCard/ForecastCard";
import WeatherCard from "../WeatherCard/WeatherCard";

export default function CardGroup() {
  return (
    <Box>
      <WeatherCard />
      <Box>
        <ForecastCard />
      </Box>
    </Box>
  );
}
