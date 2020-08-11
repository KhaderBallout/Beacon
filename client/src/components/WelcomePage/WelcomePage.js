import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './WelcomePage.css';

const WelcomePage = () => {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");


    return (
        <div className="card">
            <div className="card-top"><img src={require('./Beacon.png')} height="200px" width="400px"></img></div>
            <div className="inputGroup">
                <label className="labels"> Name: </label> &nbsp;&nbsp;&nbsp;
                <input className="inputFeilds"
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={name}
                    onChange={e => {
                        setName(e.target.value);
                    }}
                ></input><br></br>
                <label className="labels"> Country: </label>
                <input className="inputFeilds"
                    type="text"
                    country="country"
                    placeholder="Country"
                    value={country}
                    onChange={e => {
                        setCountry(e.target.value);
                    }}
                ></input>
            </div>
            <div className="btnDiv"> <button className="button" type="submit">Enter Global Chat </button></div>
        </div>
    );
};

export default WelcomePage;