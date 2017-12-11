import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import WeatherView from './WeatherView';

class Weather extends Component {
    constructor() {
      super();
      this.state = {
        city: " Austin",
        temperature: "37 F",
        stats: [
          {weather: "Sunny"},
          {min: 75},
          {max: 86}]
      }
    };

    componentDidMount() {
      const url = "http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=49a125a24252135bdae4287d39136e17";
      fetch(url)
      .then((res) => res.json()) // Transform the data into json
      .then((data) => {
        this.setState({
            city: data.name,
            temperature: ((data.main.temp * (9/5)) - 459.67).toFixed(0),
            stats: [{
              weather: data.weather[0].main},
              {min: ((data.main.temp_min * (9/5)) - 459.67).toFixed(0)},
              {max: ((data.main.temp_max * (9/5)) - 459.67).toFixed(0)}
            ]
          })
        })
  
      .catch(function(e) {
        console.error(e);
      });
    }

    render() {
      return (
        <WeatherView city = {this.state.city} temp = {this.state.temperature} stats = {this.state.stats}/>
      );
    }
  }
  
  export default Weather;
