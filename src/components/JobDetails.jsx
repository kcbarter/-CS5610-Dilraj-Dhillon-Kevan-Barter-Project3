import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function JobDetails () {
    let { jobId } = useParams();

    const [selectedJob, setJob] = useState([]);


    function findJob() {
        axios.get('http://localhost:8000/api/job/findJobById/' + jobId)
            .then(response => {
                setJob(response.data)
            })
            .catch(error => console.error(error));
    }

    useEffect(findJob, []);
    console.log(selectedJob)
    console.log(typeof(selectedJob))

    return (
        <div>
            Got here!
            {/* {selectedJob.map(job =>  */}
                {/* <div> */}
                    <h1>{selectedJob.title}</h1>
                    <p>{selectedJob.location}</p>
                    <p>{selectedJob.company}</p>
                    <p>{selectedJob.location}</p>
                    <p>{selectedJob.description}</p>
                    <p>{selectedJob.email}</p>
                    <p>{selectedJob.date}</p>
                {/* </div> */}
            {/* )} */}
        </div>
    )
}