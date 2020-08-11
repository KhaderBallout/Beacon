import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


const WelcomePage = () =>{
    const[name, setName] = useState('');
    const[country,setCountry]= useState('');
    const[key,setKey]= useState('');

    return (
        <div className="OuterContainer">
            <div className ="InnerContainer">
               <div className="Logo" ><img src = {require('./Beacon.png')} height="135px" width="300px"></img></div>
               <div className="input">
                   <label >Name:</label><input  placeholder="Full name" type="text" onChange={(event) => setName(event.target.value)} />
                   <br></br>
                   <label >Country:</label>
                   <CountryDropdown
                   className="country"
                   value={country}
                   labelType="short"
                   valueType="short"
                   onChange={(e) => setCountry(e)} />
                   <br></br>
                   <label >City:</label>
                   <RegionDropdown
                   className="country"
                   country={country}
                   value={key}
                   countryValueType="short"
                   onChange={(e) => setKey(e)} />
                </div>
               <Link onClick={event => (!name || !(country&&key)) ? event.preventDefault(): null} to={`/chat?name=${name}&country=${country}&key=${key}`}>
               <div className ="button"> <button id="button" type="submit">Enter Global Chat </button></div>
               </Link>
            </div>
        </div>
    )

}

export default WelcomePage;