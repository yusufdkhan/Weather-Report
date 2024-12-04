import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Moredays = () => {
  const location = useLocation();
  const data = location.state?.data;

  // console.log(data?.location?.name, "datas");

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="text-center mt-5">
        <p className="text-4xl font-bold">{data?.location?.name}</p>
      </div>
      <div className="flex justify-between w-full max-w-4xl">
        {data?.forecast?.forecastday?.map((item, index) => (
          <div>
            <p>{item?.date}</p>
            <img className="w-20" src={item?.day?.condition?.icon} />
            <p className="text-3xl font-medium">
              {Math.ceil(item?.day?.avgtemp_c)}&deg;
            </p>
            <p>{item?.day?.condition?.text}</p>
            <p>humididty Index : {item?.day?.avghumidity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moredays;
