import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResultsPage() {
    let { userName } = useParams();
    const [favorites, setAllJobs] = useState([]);

    // console.log(jobToSearch);
    // console.log(typeof(jobToSearch));

    function getAllFavorites() {
        axios.get('http://localhost:8000/api/user/findAllFavoriteJobsByUsername' + userName)
            .then(response => {
                setAllJobs(response.data)
            })
            .catch(error => console.error(error));
        // if(jobToSearch === undefined){
        //     axios.get('http://localhost:8000/api/user/findAllFavoriteJobsByUsername' + userName)
        //     .then(response => {
        //         setAllJobs(response.data)
        //     })
        //     .catch(error => console.error(error));
        // }
        // else{
        //     axios.get('http://localhost:8000/api/job/findJobsByTitle/' + jobToSearch)
        //         .then(response => {
        //             setAllJobs(response.data)
        //         })
        //         .catch(error => console.error(error));
        // }
    }

    useEffect(getAllFavorites, []);

    if(favorites.length === 0){
        return(
            <div>
                <h1>You don't have any favorite Jobs yet!</h1>
            </div>
        )
    }
    
    // console.log(allJobs.companyName);
    // console.log(typeof(allJobs));

    return (
        <div>
            {favorites.map(job => 
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