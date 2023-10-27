import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export enum ThemeMode {
  Light = "light-theme",
  Dark = "dark-theme",
}

interface IThemeContext {
  theme: ThemeMode;
  themeToggler: () => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Dark);

  // Load theme from cookies on initial render
  useEffect(() => {
    const savedTheme = Cookies.get("oni_theme") as ThemeMode;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Set theme class on document root element
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme(ThemeMode.Dark);
      Cookies.set("oni_theme", "dark-theme");
    } else {
      setTheme(ThemeMode.Light);
      Cookies.set("oni_theme", "light-theme");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider