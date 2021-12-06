import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResultsPage() {
    let { userName } = useParams();
    const [favorites, setFavoriteJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    function getAllFavorites() {
        axios.get('/api/user/findAllFavoriteJobsByUsername/' + userName)
            .then(response => {
                setFavoriteJobs(response.data.favorites)
            })
            .catch(error => console.error(error));
    }
    useEffect(getAllFavorites, []);
    console.log(favorites);

    // function addJobs() {
    for (let i = 0; i < favorites.length; i++) {
        axios.get('/api/job/findJobById/' + favorites[i])
            .then(response => {
                allJobs.push(response.data);
                setAllJobs([...allJobs]);
            })
            .catch(error => console.error(error));
    }
    // }
    // useEffect(addJobs, []);
    console.log(allJobs);

    if (favorites.length === 0) {
        return (
            <div>
                <h1>You don't have any favorite Jobs yet!</h1>
            </div>
        )
    }

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