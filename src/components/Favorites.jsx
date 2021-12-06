import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResultsPage() {
    let { userName } = useParams();
    const [favorites, setFavoriteJobs] = useState([]);
    const [allJobs, setAllJobs] = useState([]);

    // console.log(userName)

    // console.log(jobToSearch);
    // console.log(typeof(jobToSearch));

    function getAllFavorites() {
        axios.get('http://localhost:8000/api/user/findAllFavoriteJobsByUsername/' + userName)
            .then(response => {
                setFavoriteJobs(response.data.favorites)
            })
            .catch(error => console.error(error));
    }

    useEffect(getAllFavorites, []);
    // console.log("Favorits: ");
    // console.log(favorites)

    // if(favorites.length === 0){
    //     return(
    //         <div>
    //             <h1>You don't have any favorite Jobs yet!</h1>
    //         </div>
    //     )
    // }

    let tempArray = [];

    for(let i = 0; i < favorites.length; i++){
        axios.get('http://localhost:8000/api/job/findJobById/' + favorites[i])
                .then(response => {
                    console.log(response.data);
                    
                    setAllJobs(allJobs.push(response.data))
                })
                .catch(error => console.error(error));
        console.log(allJobs[i]);
    }

    console.log(allJobs[0]);
    // console.log("Favorite Type of: " + typeof(allJobs));
    
    // console.log(allJobs.companyName);
    // console.log(typeof(allJobs));

    // return(
    //     <div>
    //         {favorites.map(job =>
    //             <div>
    //                 <p>{job}</p>
    //             </div>
    //         )}
    //     </div>
    // )

    return (
        <div>
            {/* {allJobs.map(job => 
                <Link to={{ pathname: `/jobDetails/${job._id}` }}>
                    <div>
                        <h1>{job.title}</h1>
                        <h3>{job.location}</h3>
                        <h3>{job.company}</h3>
                    </div>
                </Link>
            )} */}
    
        </div>
    )
}