import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResultsPage() {
    let { jobToSearch } = useParams();
    const [allJobs, setAllJobs] = useState([]);

    console.log(jobToSearch);
    console.log(typeof(jobToSearch));

    function findAllJobs() {
        if(jobToSearch === undefined){
            axios.get('http://localhost:8000/api/job/findAllJobs')
            .then(response => {
                setAllJobs(response.data)
            })
            .catch(error => console.error(error));
        }
        else{
            axios.get('http://localhost:8000/api/job/findJobsByTitle/' + jobToSearch)
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
                <h1>No jobs found with that search parameter!</h1>
            </div>
        )
    }
    
    console.log(allJobs.companyName);
    console.log(typeof(allJobs));

    return (
        <div>
            {allJobs.map(job => 
                <Link to={{ pathname: `/jobDetails/${job._id}` }}>
                    <div>
                        <h1>{job.title}</h1>
                        <h3>{job.location}</h3>
                        <h3>{job.company}</h3>
                    </div>
                </Link>
            )}
    
        </div>
    )
}