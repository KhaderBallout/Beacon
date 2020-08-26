import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import io from "socket.io-client";
const countries = require('../../countries')
const Map = () => {
  const [totalMessages, setTotalMessages] = useState("");
  const [totalUsers, setTotalUsers] = useState("");
  const [totalCountries, setTotalCountries] = useState("");
  let socket = io("http://localhost:5000");

  useEffect(() => {
    var map = L.map("map", {
      center: [50, -2],
      zoom: 1,
      zoomControl: false,
      maxZoom: 1.5,
      minZoom: 1.5,
      doubleClickZoom: false,
      dragging: false,
    });
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/ramizrizqallah/ckdr6zayy0cow19rgmnopn2rs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFtaXpyaXpxYWxsYWgiLCJhIjoiY2tkcWhzOGdsMTRlcjJ5dGE3NjEzaWdkNyJ9.BdfyIQYNfxRu2Jh-m0fLjw",
      {
        noWrap: true,
      }
    ).addTo(map);
    
    socket.on('countries', ({ countries}) => {
      setTotalCountries(countries.countries.total)
      setTotalMessages(countries.messages)
      setTotalUsers(countries.users)
      
      for (const country in countries.countries) {
        
        if (countries.countries[country].num > 0) {
          
          L.circle([countries.countries[country].lat, countries.countries[country].lon], "radius:500").addTo(map)
          .bindPopup(`Number Of Users: ${countries.countries[country].num}`)
          
        }
      }
    })
  }, []);

  return (
    <div className="map-comp-container">
      <div
        style={{
          justifyContent: "center",
          display: "grid",
          gridTemplateRows: "auto auto auto",
          gridTemplateColumns: "auto auto",
        }}
      >
        <div className="statistics">Total Messages:</div>
        <div className="number">{totalMessages}</div>
        <div className="statistics">Total Users:</div>
        <div className="number">{totalUsers}</div>
        <div className="statistics">Total Countries:</div>
        <div className="number">{totalCountries}</div>
      </div>
      <div id="map" />
    </div>
  )
}
export default Map;
