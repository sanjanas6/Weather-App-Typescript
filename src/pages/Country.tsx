import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../index.css";

type CountryD = {
  name: string;
  capital: string;
  population: number;
  latlng: [number,number];
  flag: string;
  region: string;
  nativeName: string;
 };

  const Country= () => {

  const[load,setLoad] = useState(false)
  let location = useLocation();  //return location object used by react-router
  const data = location.state as CountryD;
  // console.log(data);
  let navigator = useNavigate();

  const weather = async () => {
    setLoad(true)
    try{
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=96b9d65269204ec38a1145038222307&q=${data.capital}&aqi=no`
    );
    const weather = await res.json();
    console.log(weather);
    setLoad(false);
    navigator("/capital", { state: weather });
    }catch(e){
      console.log(e);
      setLoad(false);
    }
  };
 

  return (
    <div data-testid={"country-data"} >
      <h2 text-align="center"> Capital : {data?.capital}</h2>
      <h2 text-align="center"> Population : {data?.population}</h2>
      <h2 text-align="center">
        Latitude : {data?.latlng[0]} , Longitude : {data?.latlng[1]}
      </h2>
      <h2 text-align="center">Region : {data?.region}</h2>
      <h2 text-align="center">Native Name : {data?.nativeName} </h2>
      <div>
        <img
          style={{ width: "20rem", height: "10rem", objectFit: "cover" }}
          src={data?.flag} alt=""
        ></img>
      </div>
      {load && <h1>Loading...</h1>}  
      <div className="form-actions">
        <button onClick={weather}>GET CAPITAL WEATHER</button>
      </div>
    </div>
  );
};

export default Country;
