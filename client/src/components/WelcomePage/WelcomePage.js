import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './WelcomePage.css';
const WelcomePage = () =>{
    const[name, setName] = useState('');
    const [country,setCountry]= useState('');

    return (
        <div className="OuterContainer">
            <div className ="InnerContainer">
               <img className="Logo"></img>
               <div><input className="input" placeholder="Full name" type="text" onChange={(event) => setName(event.target.value)} /></div>
               <div><input className="input" placeholder="Country name" type="text" onChange={(event) => setCountry(event.target.value)} /></div>
               <Link onClick={event => (!name || !country) ? event.preventDefault(): null} to={`/chat?name${name}&country${country}`}>
               <button className ="button" type="submit">Enter Global Chat </button>
               </Link>
            </div>
        </div>
    )

}

export default WelcomePage;