import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "../styles/CreateJob.css";

export default function CreateJob () {
    const [userName, setUserName] = useState();
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        email: '',
        website: '',
    })

    function whoIsLoggedIn() {
        axios.get('/api/user/whoIsLoggedIn')
            .then(response => {
                setUserName(response.data);
            })
            .catch(error => console.error(error));
    }
    useEffect(whoIsLoggedIn, []);

    return (
        <div class="createJob">
            <h3>Create Job:</h3>
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
            <button id="create_job" onClick={() => {
                axios.post('/api/job/createJob', jobData)
                    .then(createJobResponse => {
                        console.log(createJobResponse);
                        let jobId = createJobResponse.data._id;
                        axios.post('/api/user/createCreatedJobOfUser/' + userName + '/' + jobId)
                            .then(userCreatedJob => {
                                console.log(userCreatedJob);
                            })
                            .catch(error => console.error(error));
                        window.location.replace("/jobDetails/" + jobId);
                    })
                    .catch(error => {
                        console.error(error)
                        alert("Missing required information!");
                    });
                
            }}>Create Job</button>
        </div>
    )
}