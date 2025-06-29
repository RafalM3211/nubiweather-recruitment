import { Button } from "@mui/material";
import nubisoftLogo from "./assets/nubisoft.svg";
import AppThemeProvider from "./context/theme/theme";

function App() {
  return (
    <AppThemeProvider>
      <div className="flex justify-center flex-col gap-4 items-center">
        <div>
          <a href="https://nubisoft.io/" target="_blank">
            <img src={nubisoftLogo} className="" alt="Nubisoft logo" />
          </a>
        </div>
        <h1>NubiWeather</h1>
        <section>
          <h2>Here's your starting point.</h2>
          <h3>Good luck! :)</h3>
          <Button>bytton</Button>
        </section>
      </div>
    </AppThemeProvider>
  );
}

export default App;
