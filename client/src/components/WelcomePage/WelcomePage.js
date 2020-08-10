import React from 'react';
import {Link} from 'react-router-dom';

const WelcomePage = () =>{
    const[name, setName] = useState('');
    const [country,setCountry]= useState('');

    return (
        <div className="OuterContainer">
            <div className ="InnerContainer">
               <img className="Logo"></img>
               <div><input className="input" placeholder="Full name" type="text" onChange={} /></div>
               <div><input className="input" placeholder="Country name" type="text" onChange={} /></div>
               <Link>
               <button className ="button" type="submit">Enter Global Chat </button>
               </Link>
            </div>
        </div>
    )

}

export default WelcomePage;