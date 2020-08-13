import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
let countries = require('../../countries')
const Map = ({ country }) => {
  const [coords, setCoords] = useState("");
  const [totalMessages, setTotalMessages] = useState("20000");
  const [totalUsers, setTotalUsers] = useState("15000");
  const [totalCountries, setTotalCountries] = useState("50");
  console.log("Be ", country);
  const position = [countries['PS'].lat,countries['PS'].lon];
  console.log("Ae ", country);
  var info = countries[country];
  console.log("llllllllllll ", countries[country])
  
  useEffect(() => {

    var map = L.map("map", {
      center: [50, -2],
      zoom: 1,
      zoomControl: false,
      maxZoom: 17,
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
    L.circle(position).setRadius(600).addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  }, []);
 
    
  return(
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
