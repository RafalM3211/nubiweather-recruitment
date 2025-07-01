import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import ForecastCard from "../ForecastCard/ForecastCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { getForecastWeather } from "../../core/weather";

interface Props {
  location: string;
}

export default function CardGroup(props: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getForecastWeather,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Box>
          <WeatherCard date={"2025-07-01"} location={props.location} />
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
          </Box>
        </Box>
      )}
    </>
  );
}
