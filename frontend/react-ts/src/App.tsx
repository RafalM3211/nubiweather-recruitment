import { Container, Box, Typography, Link } from "@mui/material";
import nubisoftBgLogo from "./assets/nubisoftTransparent.svg";
import nubisoftLogo from "./assets/nubisoft.svg";
import AppThemeProvider from "./context/theme/theme";
import CardGroup from "./components/CardGroup/CardGroup";

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

          background: `url(${nubisoftBgLogo}) no-repeat`,
          backgroundPosition: { xs: "-50vw 10vh", sm: "-10vw 15vh" },
          backgroundSize: { xs: "cover", sm: "contain" },
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
            <Link
              href="https://nubisoft.io/"
              target="_blank"
              sx={{
                display: "block",
                width: { xs: "17vw", sm: "fit-content" },
              }}
            >
              <img
                style={{ width: "100%" }}
                src={nubisoftLogo}
                className=""
                alt="Nubisoft logo"
              />
            </Link>
            <Typography variant="h2" component="h1">
              NubiWeather
            </Typography>
          </Box>
          <Box
            sx={{
              mt: "3em",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "3em",
            }}
          >
            <CardGroup />
            <CardGroup />
          </Box>
        </Container>
      </Box>
    </AppThemeProvider>
  );
}

export default App;
