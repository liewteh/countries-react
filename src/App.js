import React from "react";
import "./App.css";
import CountriesAll from "./Data/CountriesAll.json";
import Country from "./Components/Country.js";

const App = () => {
  return (
    <div>
      <h1>Where in the World?</h1>
      <div className="countryContainer">
        {CountriesAll.map((country, index) => (
          <Country country={country} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
