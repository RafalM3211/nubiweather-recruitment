import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import weatherIcon from "../../assets/weatherIcon.svg";
import { getCurrentWeather } from "../../core/weather";

interface Props {
  date: string;
  location: string;
}

export default function WeatherCard(props: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["current", props.location],
    queryFn: getCurrentWeather,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <Card sx={{ minWidth: "fit-content", fontSize: "1em" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              gap: "1em",
            }}
          >
            <Typography sx={{ lineHeight: "normal" }} variant="h4">
              {data.location.name}
            </Typography>
            <Typography variant="body1" color="grey.900">
              {data.current.condition.text}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              sx={{
                m: "10px",
                height: "min(140px, 23vw)",
                width: "min(140px, 23vw)",
              }}
              image={weatherIcon}
              title="green iguana"
            />
            <CardContent sx={{ display: "flex", gap: "1em" }}>
              <Typography variant="h3" component="p">
                {Math.round(data.current.temp_c)}
                {"\u00B0"}C
              </Typography>
              <Box
                sx={{
                  pl: "5px",
                  borderLeftColor: "primary.main",
                  borderLeftWidth: "2px",
                  borderLeftStyle: "solid",
                }}
              >
                <Typography variant="body2">
                  Wind: {data.current.wind_kph}km/h
                </Typography>
                <Typography variant="body2">
                  Humidity: {data.current.humidity}%
                </Typography>
                <Typography variant="body2">
                  Pressure: {data.current.pressure_mb}hPa
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
}
