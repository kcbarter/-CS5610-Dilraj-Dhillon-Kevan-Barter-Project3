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
                <div>{userName}</div>
                <button id="logout"
                    onClick={() => {
                        axios.delete('/api/user/logOut')
                            .then(response => {
                                console.log(response);
                            })
                            .catch(error => console.log(error));
                        setUserName('');
                        window.location.replace("/");
                    }}
                >Logout</button>
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