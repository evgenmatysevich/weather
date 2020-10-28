import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "911128e937701fa5a782638ef8b411cf";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
}

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    
    

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
 
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunser_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      var sunrise = data.sys.sunrise;
      var date1 = new Date();
      date.setTime(sunrise);
      var sunrise_date = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunset: sunser_date,
        sunrise: sunrise_date,
        error: ""
      
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form weathetMethod={this.gettingWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
    </div>
  );
}
}
export default App;

