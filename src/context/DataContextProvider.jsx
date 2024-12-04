import React, { useEffect, useState } from "react";
import { DataContext } from "./dataContext";

const DataContextProvider = ({ children }) => {
  const [input, setInput] = useState("");

  const [data, setData] = useState("");
  const [city, setCity] = useState("mumbai");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    setCity(input);

    setInput("");
  };

  const ApiKey = "bd4a92928c6f4d33bc3100534240312";
  const totalDays = 5;
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=${totalDays}&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [city]);
  return (
    <DataContext.Provider
      value={{
        data,
        input,
        setInput,
        setData,
        city,
        setCity,
        inputHandler,
        clickHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
