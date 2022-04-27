import React from "react";
import Heading from "./components/heading";
import WeatherInput from "./components/input";
import Weather from "./components/weatherDisplay";
import './App.css'

const api_key = "555793d0321137e04d53bf6a56265f38"

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      temperature:"",
      city:"",
      country:"",
      humidity:"",
      pressure:"",
      icon:"",
      description:"",
      error:""
    }
  }

  getWeather = async(event) => {
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    event.preventDefault();
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`)

    const response = await api_call.json();
    
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon, 
        description: response.weather[0].description,
        error: ""
      })
    } else{
      this.setState({
        error: "Please fill out input fields..."
      })
    }
  }

  render(){
    const {temperature,city,country,humidity,pressure,icon,description,error} = this.state
    return(
      <>
      <div className="container">
        <Heading />
        <div className="weather-input">
        <WeatherInput loadWeather={this.getWeather} />
        </div>
        <div className="weather">
        <Weather
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          pressure={pressure}
          icon={icon}
          description={description}
          error={error} />
          </div>
        </div>
      </>
    )
  }
}

export default App