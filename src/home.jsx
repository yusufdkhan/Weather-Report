import React, { useContext } from "react";
import { themeContext } from "./context/ThemeContext";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { DataContext } from "./context/dataContext";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const { mode, handleTheme } = useContext(themeContext);
  const { data, inputHandler, clickHandler, input } = useContext(DataContext);
  const navigate = useNavigate();

  const id = data?.location?.name;

  const handleMoreData = () => {
    navigate(`/${id}`, { state: { data } });
  };

  return (
    <div
      className="flex flex-col items-center h-screen justify-center gap-4"
      style={{
        backgroundColor: mode === true ? "#000" : "#fff",
      }}
    >
      <div className="border-solid border-2 border-red-50 p-4 rounded-lg">
        <div onClick={handleTheme}>
          {mode === true ? <MdDarkMode className="text-white" /> : <CiDark />}
        </div>

        <div className="flex ">
          <input
            className="p-4 outline-none rounded-tl-2xl rounded-bl-2xl"
            type="text p-4"
            onChange={inputHandler}
            value={input}
          />
          <button
            className="px-4 py-3 bg-green-400 rounded-tr-2xl rounded-br-2xl"
            onClick={clickHandler}
          >
            search
          </button>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p>
            {data?.location?.localtime?.slice(
              0,
              data?.location?.localtime?.indexOf(" ")
            )}
          </p>
          <p className="text-3xl font-medium">{data?.location?.name}</p>
          <img className="w-20" src={data?.current?.condition?.icon} />
          <p className="text-3xl font-medium">
            {Math.ceil(data?.current?.temp_c)}&deg;
          </p>
          <p>{data?.current?.condition?.text}</p>
          <p>humididty Index : {data?.current?.humidity}</p>
          <button
            onClick={handleMoreData}
            className="py-2 px-4 border-2 border-black "
          >
            3 days Forecast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
