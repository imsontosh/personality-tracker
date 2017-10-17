import React  from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import Anger from "./module/anger/Anger";
import Auth from "./module/auth/Auth";
import Header from "./shared/Header";
import health from "./module/health/health";

const App = () => (
  <MuiThemeProvider>
      <Auth>
        <Header />
        <health />
      </Auth>
  </MuiThemeProvider>
);

export default App;
