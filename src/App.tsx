import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n/i18n";
import GlobalStyle from "./Styles/GlobalStyles";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./Styles/Themes/darkTheme";
import { lightTheme } from "./Styles/Themes/lightTheme";
import ChangeThemeToggler from "./Components/ThemeSwitcher/ThemeSwitcher";
import Header from "./Components/Header/Header";
import { DeviceTypeProvider } from "./Styles/DeviceType/DeviceProvider";

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  
  return (
    <div className="App">
      <DeviceTypeProvider>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Header />
          <Outlet />
          <ChangeThemeToggler themeToggler={themeToggler} />
        </ThemeProvider>
      </DeviceTypeProvider>
    </div>
  );
};

export default App;
