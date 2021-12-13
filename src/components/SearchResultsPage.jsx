import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../styles/JobResults.css";

export default function SearchResultsPage() {
    let { jobToSearch } = useParams();
    const [allJobs, setAllJobs] = useState([]);

    // console.log(jobToSearch);
    // console.log(typeof(jobToSearch));

    function findAllJobs() {
        if(jobToSearch === undefined){
            axios.get('/api/job/findAllJobs')
            .then(response => {
                setAllJobs(response.data)
            })
            .catch(error => console.error(error));
        }
        else{
            axios.get('/api/job/findJobsByTitle/' + jobToSearch)
                .then(response => {
                    setAllJobs(response.data)
                })
                .catch(error => console.error(error));
        }
    }

    useEffect(findAllJobs, []);

    if(allJobs.length === 0){
        return(
            <div>
                <h1 id="noJobs">No jobs found with that search parameter!</h1>
            </div>
        )
    }
    
    console.log(allJobs[0]);
    // console.log("Type: " + typeof(allJobs));

    return (
        <div class="jobSearchContainer">
            <h2>Search result for: {jobToSearch ? jobToSearch : "All jobs"}</h2>
            <div id="job">
                {allJobs.map(job => 
                    <Link class="link" to={{ pathname: `/jobDetails/${job._id}` }}>
                        <div class="basicJobInfo">
                            <h1>{job.title}</h1>
                            <h3>Location: {job.location}</h3>
                            <h3>company: {job.company}</h3>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
