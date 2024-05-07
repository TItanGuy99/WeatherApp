import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import WeatherContainer from "../WeatherContainer/WeatherContainer";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 11,
    };
  }

  getMyLocation = (e) => {
    let location = null;
    let latitude = null;
    let longitude = null;
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation;
    }
    if (location) {
      location.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
      });
    }

    this.setState({
      center: {
        lat: latitude,
        lng: longitude,
      },
    });
  };

  componentDidMount() {
    this.setState({
      center: {
        lat: 41.15015,
        lng: -8.61032,
      },
    });
  }

  render() {
    return (
      <div>
        <WeatherContainer
          lat={this.state.center.lat}
          lng={this.state.center.lng}
        />
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB6hDwSPS_aqlHkYN2EL205BLl-QhkmI40",
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapContainer;
