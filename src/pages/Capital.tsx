import React from "react";
import { useLocation } from "react-router-dom";

type CapitalD = {
  location: {
  name: string,
  },
  current: {
  condition: {text:string},
  feelslike_c: number,
  feelslike_f: number,
  pressure_in: number  
  }
};

const Capital:React.FC<{ state: any }> = () => {
  let locator = useLocation();
  const Data = locator.state as CapitalD;

  const res = Data?.current;
  // console.log(res);

  return (
    <>
      <div data-testid ={"capital-data"}>
        <h1> {Data?.location.name} Weather </h1>
        <h2> Climate : {res?.condition.text}</h2>
        <h2> Temperature : {res?.feelslike_c} °C</h2>
        <h2> Temperature(In F) : {res?.feelslike_f} °F</h2>
        <h2> Atmospheric Pressure : {res?.pressure_in} inches </h2>
      </div>
    </>
  );
};

export default Capital;
