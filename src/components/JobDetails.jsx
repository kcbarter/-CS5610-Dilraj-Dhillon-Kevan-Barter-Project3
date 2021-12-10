import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "../styles/JobDetails.css";

export default function JobDetails () {
    let { jobId } = useParams();

    const [selectedJob, setJob] = useState([]);
    const [userName, setUserName] = useState();
    const [favorite, setFavoriteJob] = useState('unfavorited');
    const[created, setCreateJob] = useState(false);


    function findJob() {
        axios.get('http://localhost:8000/api/job/findJobById/' + jobId)
            .then(response => {
                setJob(response.data)
            })
            .catch(error => console.error(error));
    }

    useEffect(findJob, []);

    function whoIsLoggedIn() {
        axios.get('/api/user/whoIsLoggedIn')
            .then(response => {
                setUserName(response.data);
            })
            .catch(error => console.error(error));
    }
    useEffect(whoIsLoggedIn, []);

    

    if(userName){
        axios.get('/api/user/findAllFavoriteJobsByUsername/' + userName)
            .then(response => {
                let favoriteJobs = response.data.favorites;

                if(favoriteJobs.includes(jobId)){
                    setFavoriteJob('favorite');
                }
            })
            .catch(error => console.error(error));
        
        axios.get('/api/user/findAllCreatedJobsByUsername/' + userName)
            .then(response => {
                let createdJobs = response.data.created;

                if(createdJobs.includes(jobId)){
                    setCreateJob(true);
                }
            })
            .catch(error => console.error(error));
    }

    function favoriteUnfavoriteJob(){
        if(favorite === "unfavorited"){
            axios.post('/api/user/createFavoriteJobOfUser/' + userName + '/' + jobId)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.error(error));
            setFavoriteJob('favorite');
        }
        else{
            axios.delete('/api/user/deleteFavoriteJobOfUser/' + userName + '/' + jobId)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.error(error));
            setFavoriteJob('unfavorited');
        }
    }

    return (
        <div class="detailsOfJob">
            <h1>{selectedJob.title} <button id={favorite} onClick={() =>{
                if(!userName){
                    window.location.replace("/login");
                }
                else{
                    favoriteUnfavoriteJob()
                }
            }}>&#9734;</button></h1>
            <p>Location: {selectedJob.location}</p>
            <p>Company: {selectedJob.company}</p>
            <p>Description: {selectedJob.description}</p>
            <a href={`mailto:${selectedJob.email}`}>
                <p>Email: {selectedJob.email}</p>
            </a>
            <p>Website: {selectedJob.website}</p>
            <p>Date Posted: {selectedJob.date}</p>
            {userName && created &&
                <div class="loggedInEditAndDelete">
                    <button onClick={() => {

                    }}>Edit</button>
                    <button onClick={() => {
                        axios.delete('/api/job/deleteJobById/' + jobId)
                            .then(response => {
                                console.log(response);
                                window.location.replace("/");
                            })
                            .catch(error => console.error(error));
                    }}>Delete</button>
                </div>
            }
        </div>
    )
}