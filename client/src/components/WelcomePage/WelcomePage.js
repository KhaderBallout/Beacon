import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


const WelcomePage = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    return (
        <div className="OuterContainer">
            <div className="InnerContainer">
                <div className="Logo" ><img src={require('./Beacon.png')} height="200px" width="400px"></img></div>

                <div className="inputGroup">
                    <label className="label" >Name:</label>
                    <input className="inputFeilds" placeholder="Full name" type="text"
                        onChange={(event) => setName(event.target.value)} />
                    <label className="label" >Country:</label>

                    <CountryDropdown
                        className="country"
                        value={country}
                        labelType="short"
                        valueType="short"
                        onChange={(e) => setCountry(e)} />
                    <label >City:</label>

                    <RegionDropdown
                        className="country"
                        country={country}
                        value={city}
                        countryValueType="short"
                        placeholder="Select Country"
                        onChange={(e) => setCity(e)} />
                </div>
                <Link onClick={event => (!name || !(country && city)) ? event.preventDefault() : null} to={`/chat?name=${name}&country=${country}&city=${city}`}>
                    <div className="button"> <button id="button" type="submit">Enter Global Chat </button></div>
                </Link>
            </div>
        </div>
    )

}

export default WelcomePage;