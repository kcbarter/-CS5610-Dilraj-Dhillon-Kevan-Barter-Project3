import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResultsPage() {
    let { userName } = useParams();
    const [favorites, setFavoriteJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    // function getAllFavoriteIds() {
    //     axios.get('/api/user/findAllFavoriteJobsByUsername/' + userName)
    //         .then(response => {
    //             setFavoriteJobs(response.data.favorites)
    //         })
    //         .catch(error => console.error(error));
    // }
    // useEffect(getAllFavoriteIds, []);
    // console.log(favorites);

    // function getAllJobsByIds() {
    //     axios.post('/api/job/findAllJobsByIds', { _id: favorites })
    //         .then(response => setAllJobs(response.data))
    //         .catch(error => console.log(error))
    // }
    // useEffect(getAllJobsByIds, [favorites]);
    // console.log(allJobs);

    const getAllFavoriteIds = () => {
        return axios.get('/api/user/findAllFavoriteJobsByUsername/' + userName)
            .then(response => {
                const favorites = response.data.favorites;
                setFavoriteJobs(favorites);
                return favorites;
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
            console.log(favorites);
            console.log(allJobs);
        });
    }, []);

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