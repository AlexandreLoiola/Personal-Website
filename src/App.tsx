import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n/i18n";
import GlobalStyle from "./Styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Styles/Themes/darkTheme";
import { lightTheme } from "./Styles/Themes/lightTheme";
import ChangeThemeToggler from "./Components/ChangeThemeToggler/ChangeThemeToggler";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outlet />
        <ChangeThemeToggler themeToggler={themeToggler} />
      </ThemeProvider>
    </div>
  );
};

export default App;
