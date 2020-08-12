import React, { useState, useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

export default function Map() {
    const [coords, setCoords] = useState('');
    const [totalMessages, setTotalMessages] = useState('20000');
    const [totalUsers, setTotalUsers] = useState('15000');
    const [totalCountries, setTotalCountries] = useState('50');


    useEffect(() => {
        var map = L.map('map', {
            center: [50, -2],
            zoom: 1,
            zoomControl: false,
            maxZoom: 1.5,
            minZoom: 1.5,
            doubleClickZoom: false,
            dragging: false,
        })
        L.tileLayer('https://api.mapbox.com/styles/v1/ramizrizqallah/ckdr6zayy0cow19rgmnopn2rs/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFtaXpyaXpxYWxsYWgiLCJhIjoiY2tkcWhzOGdsMTRlcjJ5dGE3NjEzaWdkNyJ9.BdfyIQYNfxRu2Jh-m0fLjw', {
            noWrap: true
        }).addTo(map)

    }, [coords])

    return (
        <div className="map-comp-container">
            <div style={{ justifyContent: "center", display: "grid", gridTemplateRows: "auto auto auto", gridTemplateColumns:"auto auto" }}>
                
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
