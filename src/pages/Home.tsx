import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Home= () => {
  const [country, setCountry] = useState("");
  const [load, setLoad] = useState(false);
  // const [error, setError] = useState("");
  let navigate = useNavigate();

  const InputHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
    console.log(event.target.value);
  };

  const fetchData = async () => {
    setLoad(true);
    try {
      const res = await fetch(
        `https://restcountries.com/v2/name/${country}?fullText=true`
      );
      if (!res.ok) {
        throw new Error("Please Enter Correct Country Name!!!");
      }
      const data = await res.json();
      navigate("/country", { state: data[0] });
      console.log(data);
      setLoad(false);
    } catch (error) {
      alert("Please Enter Correct Country Name!!!");
      setLoad(false);
    }
    
  };

  const formSubmit = (event:React.FormEvent) => {
    event.preventDefault();
  };
  
  return (
    <form onSubmit={formSubmit}>
      <div >
        <h2>
          <label htmlFor="country">ENTER COUNTRY NAME</label>
        </h2>
        <input
          type="text"
          id="country"
          placeholder="Enter Country Name!!"
          onChange={InputHandler}
        />
        {load && <h1>Loading...</h1>}
      </div>
      <div className="form-actions">
        <button 
        onClick={fetchData}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Home;
