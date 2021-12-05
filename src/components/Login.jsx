import axios from 'axios';
import React, {useState} from 'react';

export default function Login(){
    const [userData, setUserData] = useState({
        password: '',
        username: '',
    })

    return(
        <div>
            <h3>Sign up or login!</h3>
            <h5>Username:</h5>
            <input value={userData.username} onChange={(e) => {
                const username = e.target.value;
                setUserData({
                    ...userData,
                    username: username
                })
            }}/>
            <h5>Password:</h5>
            <input value={userData.password} onChange={(e) => {
                const password = e.target.value;
                setUserData({
                    ...userData,
                    password: password
                })
            }} type='password' />
            <button
                onClick={() => {
                    console.log(userData)
                    axios.post('http://localhost:8000/api/user/authenticate', userData)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));
                }}
            >Login</button>
            <button
                onClick={() => {
                    console.log(userData)
                    axios.post('http://localhost:8000/api/user/createUser', userData)
                        .then(response => console.log(response))
                        .catch(error => console.log(error));
                }}
            >Register</button>
        </div>
    );
}