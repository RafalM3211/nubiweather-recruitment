import { Paper, CardMedia, Typography } from "@mui/material";
import weatherIcon from "../../assets/weatherIcon.svg";

export default function ForecastCard() {
  return (
    <Paper
      sx={{
        width: "18%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Typography sx={{ py: "5px" }} variant="h6">
        jutro
      </Typography>
      <CardMedia
        sx={{ height: 35, width: 40 }}
        image={weatherIcon}
        title="slonecznie"
      />
      <Typography sx={{ py: "5px" }} variant="body2">
        26{"\u00B0"}C
      </Typography>
    </Paper>
  );
}
