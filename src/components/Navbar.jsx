import React from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar(){
    return(
        <div class="navbarContainer">
            <Link exact to="/">Home Page</Link>
            <Link exact to="/favorites">Favorite Jobs</Link>
            <Link exact to="/log-in">Log In</Link>
        </div>
    )
}