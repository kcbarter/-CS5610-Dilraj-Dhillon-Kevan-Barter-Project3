import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../styles/FavoriteJobs.css";

export default function YourJobs() {
    let { userName } = useParams();
    const [created, setCreatedJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    const getAllFavoriteIds = () => {
        return axios.get('/api/user/findAllCreatedJobsByUsername/' + userName)
            .then(response => {
                const created = response.data.created;
                setCreatedJobs(created);
                return created;
            })
            .catch(error => console.error(error));
    };

    const getAllJobsByIds = (favs) => {
        return axios.post('/api/job/findAllJobsByIds', { _id: favs })
            .then(response => setAllJobs(response.data))
            .catch(error => console.log(error));
    };

    const getAllData = () => {
        return getAllFavoriteIds()
            .then(favs => getAllJobsByIds(favs));
    };

    useEffect(() => {
        getAllData().then(() => {
            console.log(created);
            console.log(allJobs);
        });
    }, []);

    if (created.length === 0) {
        return (
            <div>
                <h1>You don't have any favorite Jobs yet!</h1>
            </div>
        )
    }

    return (
        <div class="favoritesContainer">
            <h2>Your created jobs:</h2>
            <div id="favoriteJobs">
                {allJobs.map(job =>
                    <Link class="link" to={{ pathname: `/jobDetails/${job._id}` }}>
                        <div class="basicJobInfo">
                            <h1>{job.title}</h1>
                            <h3>Location: {job.location}</h3>
                            <h3>Company: {job.company}</h3>
                        </div>
                    </Link>
                )}
            </div>

        </div>
    )
}