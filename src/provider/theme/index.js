import React, { useState } from "react";
const lightTheme = {
  primary: "#00bcd4",
  secondary: "#ff4081",
  background: "#fafafa",
  text: "#212121",
  disabled: "#bdbdbd",
  divider: "#bdbdbd", // for divider
  white: "#ffffff",
  black: "#000000",
};
const darkTheme = {
  primary: "#00bcd4",
  secondary: "#ff4081",
  background: "#212121",
  text: "#ffffff",
  disabled: "#bdbdbd",
  divider: "#bdbdbd",
  white: "#ffffff",
  black: "#000000",
};
export const ThemeContext = React.createContext(lightTheme);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
