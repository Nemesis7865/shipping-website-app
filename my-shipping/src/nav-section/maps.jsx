import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

class MapContainer extends Component {
  render() {
    console.log("Rendering MapContainer");

    const containerStyle = {
      width: "100%",
      height: "400px",
    };

    const center = {
      lat: 37.090240, // Replace with your latitude
      lng: -95.712891, // Replace with your longitude
    };

    return (
      <LoadScript googleMapsApiKey="AIzaSyAmrd9B0X9o2c-SMqREBFjnuSVzAzriu-M">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Add markers or other map features here */}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MapContainer;
