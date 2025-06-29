import { Container, Box, Typography } from "@mui/material";
import nubisoftBgLogo from "./assets/nubisoftTransparent.svg";
import nubisoftLogo from "./assets/nubisoft.svg";
import AppThemeProvider from "./context/theme/theme";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <AppThemeProvider>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background: `url(${nubisoftBgLogo}) no-repeat  -10vw 15vh`,
          backgroundSize: "contain",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2em",
            }}
          >
            <a href="https://nubisoft.io/" target="_blank">
              <img src={nubisoftLogo} className="" alt="Nubisoft logo" />
            </a>
            <Typography variant="h2" component="h1">
              NubiWeather
            </Typography>
          </Box>
          <Box sx={{ mt: "3em", display: "flex", gap: "3em" }}>
            <WeatherCard />
            <WeatherCard />
          </Box>
        </Container>
      </Box>
    </AppThemeProvider>
  );
}

export default App;
