import React, { useState } from "react";
import { themeContext } from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);

  const handleTheme = () => {
    setMode((prev) => !prev);
  };
  return (
    <themeContext.Provider value={{ mode, handleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
