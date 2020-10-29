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
    humidity: undefined,
    error: undefined
}

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    
    

    if (city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
 
      

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        error: undefined
      
      });
    } else {
      this.setState({
   temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    error: "Введите название города"
      
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
          humidity={this.state.humidity}
          error={this.state.error}
        />
    </div>
  );
}
}
export default App;

