import React  from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Anger from "./module/anger/Anger";
import Auth from "./module/auth/Auth";
import Header from "./shared/Header";

const App = () => (
  <MuiThemeProvider>
      <Auth>
        <Header />
        <Anger />
      </Auth>
  </MuiThemeProvider>
);

export default App;
