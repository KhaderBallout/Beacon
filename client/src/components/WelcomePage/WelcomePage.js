import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css';
const WelcomePage = () =>{
    const[name, setName] = useState('');
    const [country,setCountry]= useState('');

    return (
        <div className="OuterContainer">
            <div className ="InnerContainer">
               <div className="Logo" ><img src = {require('./Beacon.png')} height="135px" width="300px"></img></div>
               <div className="input">
                   Name:&nbsp;&nbsp;&nbsp;<input  placeholder="Full name" type="text" onChange={(event) => setName(event.target.value)} />
                   Country:<input placeholder="Country name" type="text" onChange={(event) => setCountry(event.target.value)} />
                </div>
               <Link onClick={event => (!name || !country) ? event.preventDefault(): null} to={`/chat?name${name}&country${country}`}>
               <div className ="button"> <button id="button" type="submit">Enter Global Chat </button></div>
               </Link>
            </div>
        </div>
    )

}

export default WelcomePage;