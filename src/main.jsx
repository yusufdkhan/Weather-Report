import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import DataContextProvider from "./context/dataContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </DataContextProvider>
);
