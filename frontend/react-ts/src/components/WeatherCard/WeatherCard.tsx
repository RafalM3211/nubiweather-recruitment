import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import weatherIcon from "../../assets/weatherIcon.svg";

export default function WeatherCard() {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <Typography sx={{ lineHeight: "normal" }} variant="h4">
          Gliwice
        </Typography>
        <Typography variant="body1" color="grey.900">
          Przeważnie słonecznie
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          sx={{ m: "10px", height: 140, width: 140 }}
          image={weatherIcon}
          title="green iguana"
        ></CardMedia>
        <CardContent sx={{ display: "flex", gap: "1em" }}>
          <Typography variant="h3" component="p">
            26{"\u00B0"}C
          </Typography>
          <Box
            sx={{
              pl: "5px",
              borderLeftColor: "primary.main",
              borderLeftWidth: "2px",
              borderLeftStyle: "solid",
            }}
          >
            <Typography variant="body2">Temperatura: 23km/h</Typography>
            <Typography variant="body2">Wiatr: 23km/h</Typography>
            <Typography variant="body2">Wilgotnosc: 40%</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
