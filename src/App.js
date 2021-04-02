import React, { useState } from "react";
import "./App.css";
import CountriesAll from "./Data/CountriesAll.json";
import Country from "./Components/Country.js";
import SearchField from "./Components/SearchField";

const App = () => {
  const [countrySearched, setCountrySearched] = useState(CountriesAll);
  const searchCountry = (elem) => {
    if (elem.target.value) {
      const result = CountriesAll.filter(
        (data) => (
          data.name.toLowerCase().includes(elem.target.value.toLowerCase()) ||
          data.capital.toLowerCase().includes(elem.target.value.toLowerCase())
        )
      );

      setCountrySearched(result);
    } else {
      setCountrySearched(CountriesAll);
    }
  };

  return (
    <div>
      <h1>Where in the World?</h1>
      <SearchField searchCountry={searchCountry} />
      <div className="countryContainer">
        {countrySearched.map((country, index) => {
          return <Country country={country} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
