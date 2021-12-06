import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import axios from 'axios';

export default function Navbar(){
    let [ userName, setUserName ] = useState();
    axios.get('http://localhost:8000/api/user/whoIsLoggedIn')
        .then(response => {
            setUserName(JSON.stringify(response));
        })
        .catch(error => console.error(error));

    console.log(typeof(userName) + " " + userName);

    

    if(userName){
        return(
            <div class="navbarContainer">
                <Link exact to="/">Home Page</Link>
                <Link exact to={"/favorites" + userName}>Favorite Jobs</Link>
                <Link exact to="/login">{userName}</Link>
            </div>
        )
    }
    else{
        return(
              <div class="navbarContainer">
                <Link exact to="/">Home Page</Link>
                <Link exact to="/login">Log In</Link>
            </div>
        )
    }

    // return(
    //     <div class="navbarContainer">
    //         <Link exact to="/">Home Page</Link>
    //         <Link to={{pathname: '/favorites/bob'}}>Favorite Jobs</Link>
    //         <Link exact to="/login">Log In</Link>
    //     </div>
    // )
}