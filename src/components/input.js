import React from "react";

const WeatherInput = (props) => {
  return (
    <>
      <form onSubmit={props.loadWeather}>
        <input
          type="text"
          name="city"
          placeholder="Choose a City"
        />
        <input 
          type="text"
          name="country"
          placeholder="Choose a Country"
        />
        <button>Get Weather</button>
      </form>
    </>
  );
};

export default WeatherInput