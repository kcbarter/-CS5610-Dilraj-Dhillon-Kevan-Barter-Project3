import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "../styles/CreateJob.css";

export default function EditJob () {
    let { jobId } = useParams();
    const [userName, setUserName] = useState();
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        email: '',
        website: '',
    })

    function getJobInfo(){
        axios.get('/api/job/findJobById/' + jobId)
            .then(response => {
                setJobData({
                    title: response.data.title,
                    company: response.data.company,
                    location: response.data.location,
                    description: response.data.description,
                    email: response.data.email,
                    website: response.data.website,
                })
            })
            .catch(error => console.log(error))
    }

    useEffect(getJobInfo, [])

    function whoIsLoggedIn() {
        axios.get('/api/user/whoIsLoggedIn')
            .then(response => {
                setUserName(response.data);
            })
            .catch(error => console.error(error));
    }
    useEffect(whoIsLoggedIn, []);

    return (
        <div class="editJob">
            <h3>Edit Job:</h3>
            <h3>Job Title *</h3>
            <input value={jobData.title} onChange={(e) => {
                    const title = e.target.value;
                    setJobData({
                        ...jobData,
                        title: title
                    })
                }}/>
            <h3>Job Company *</h3>
            <input value={jobData.company} onChange={(e) => {
                    const company = e.target.value;
                    setJobData({
                        ...jobData,
                        company: company
                    })
                }}/>
            <h3>Job Location *</h3>
            <input value={jobData.location} onChange={(e) => {
                    const location = e.target.value;
                    setJobData({
                        ...jobData,
                        location: location
                    })
                }}/>
            <h3>Job Description *</h3>
            <textarea value={jobData.description} onChange={(e) => {
                    const description = e.target.value;
                    setJobData({
                        ...jobData,
                        description: description
                    })
                }}/>
            <h3>Email *</h3>
            <input type='email' value={jobData.email} onChange={(e) => {
                    const email = e.target.value;
                    setJobData({
                        ...jobData,
                        email: email
                    })
                }}/>
            <h3>Website (Optional)</h3>
            <input value={jobData.website} onChange={(e) => {
                    const website = e.target.value;
                    setJobData({
                        ...jobData,
                        website: website
                    })
                }}/>
            <br />
            <button id="edit_job" onClick={() => {
                axios.put('/api/job/updateJobById/' + jobId, jobData)
                    .then(updatedJobResponse => {
                        console.log(updatedJobResponse);
                        window.location.replace("/jobDetails/" + jobId);
                    })
                    .catch(error => {
                        console.error(error)
                        alert("Missing required information!");
                    });
                
            }}>Edit Job</button>
        </div>
    )
}