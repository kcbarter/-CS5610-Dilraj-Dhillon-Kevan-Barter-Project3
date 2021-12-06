import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import axios from 'axios';

export default function Navbar() {
    const [userName, setUserName] = useState();

    function whoIsLoggedIn() {
        axios.get('/api/user/whoIsLoggedIn')
            .then(response => {
                setUserName(response.data);
            })
            .catch(error => console.error(error));
    }
    useEffect(whoIsLoggedIn, []);

    if (userName) {
        return (
            <div class="navbarContainer">
                <Link exact to="/">Home Page</Link>
                <Link exact to={"/favorites/" + userName}>Favorite Jobs</Link>
                <Link exact to="/login">{userName}</Link>
                <div>hi there</div>
            </div>
        )
    }
    else {
        return (
            <div class="navbarContainer">
                <Link exact to="/">Home Page</Link>
                <Link exact to="/login">Log In</Link>
            </div>
        )
    }
}