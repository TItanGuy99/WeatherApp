import React, { Component } from "react";
import axios from "axios";

class WeatherContainer extends Component {
  APIKey = "12c24883b5024ead901bbd5a7e674b4b";
  constructor(props) {
    super(props);
    this.state = {
      lat: props.lat,
      lng: props.lng,
      weather: "",
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&appid=${this.APIKey}`
      )
      .then((res) => {
        console.log(res.data.weather[0].description);
        this.setState({ weather: res.data.weather[0].description });
      });
  }

  render() {
    return (
      <div>
        <p>Weather: {this.state.weather}</p>
      </div>
    );
  }
}

export default WeatherContainer;
