import React from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Anger from "./module/anger/Anger";

const App = () => (
  <MuiThemeProvider>
    <div className="app">
      <header>
        <div className="wrapper">
          <h1>Personality Details</h1>
        </div>
      </header>
      <div className="container">
        <Anger />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
