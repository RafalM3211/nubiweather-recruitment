import { Paper, CardMedia, Typography } from "@mui/material";
import { convertDateToWeekDay } from "../../helpers/helpers";

interface Props {
  date: string;
  temp_c: number;
  icon: string;
}

export default function ForecastCard(props: Props) {
  return (
    <Paper
      sx={{
        minWidth: "18%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Typography sx={{ p: "5px" }} variant="subtitle2" component="h6">
        {convertDateToWeekDay(props.date)}
      </Typography>
      <CardMedia
        sx={{ height: 35, width: 40 }}
        image={props.icon}
        title="slonecznie"
      />
      <Typography sx={{ py: "5px" }} variant="body2">
        {Math.round(props.temp_c)}
        {"\u00B0"}C
      </Typography>
    </Paper>
  );
}
