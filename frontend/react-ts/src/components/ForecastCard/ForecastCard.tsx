import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import weatherIcon from "../../assets/weatherIcon.svg";

export default function ForecastCard() {
  return (
    <Paper
      sx={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ py: "5px" }}>
        <Typography variant="h6">jutro</Typography>
      </Box>
      <CardMedia
        sx={{ height: 40, width: 40 }}
        image={weatherIcon}
        title="slonecznie"
      />
      <Box sx={{ py: "5px" }}>
        <Typography variant="body2">26{"\u00B0"}C</Typography>
      </Box>
    </Paper>
  );
}
