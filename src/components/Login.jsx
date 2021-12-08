import axios from 'axios';
import React, { useState } from 'react';
import "../styles/Login.css";

export default function Login() {
    const [userData, setUserData] = useState({
        password: '',
        username: '',
    })

    return (
        <div class="loginContainer">
            <h2>Sign up or login!</h2>
            <h3>Username:</h3>
            <input value={userData.username} onChange={(e) => {
                const username = e.target.value;
                setUserData({
                    ...userData,
                    username: username
                })
            }} />
            <h3>Password:</h3>
            <input value={userData.password} onChange={(e) => {
                const password = e.target.value;
                setUserData({
                    ...userData,
                    password: password
                })
            }} type='password' />
            <br />
            <button
                onClick={() => {
                    axios.post('/api/user/authenticate', userData)
                        .then(response => {
                            console.log(response);
                            window.location.replace("/");
                        })
                        .catch(error => {
                            console.log(error);
                            alert("Non existent user or invalid password!");
                        });
                }}
            >Login</button>
            <button
                onClick={() => {
                    axios.post('/api/user/createUser', userData)
                        .then(response => {
                            console.log(response);
                            axios.post('/api/user/authenticate', userData)
                                .then(authResponse => {
                                    console.log(authResponse);
                                    window.location.replace("/");
                                })
                                .catch(authError => console.log(authError));
                        })
                        .catch(error => {
                            console.log(error);
                            alert("Username already exists!");
                        });
                }}
            >Register</button>

            {/* <button
                onClick={() => {
                    axios.get('/api/user/whoIsLoggedIn', userData)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));
                }}
            >Who is logged in</button> */}
        </div>
    );
}