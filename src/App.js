import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#EA5D29"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      main: "#EF8E23",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#282827"
    }
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
