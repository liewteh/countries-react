import React from "react";

const Country = (props) => {
  return (
    <div className='country'>
      <img
        className="flag"
        src={props.country.flag}
        alt={`${props.country.name}'s Flag`}
      ></img>
      <h4>{props.country.name}</h4>
      <p>
        <strong>Population: </strong>
        {props.country.population
          .toString()
          .replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/gm, "$1$2,")}
      </p>
      <p>
        <strong>Region: </strong>
        {props.country.region}
      </p>
      <p>
        <strong>Capital: </strong>
        {props.country.capital}
      </p>
    </div>
  );
};

export default Country;
