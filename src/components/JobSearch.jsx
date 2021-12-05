import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/JobSearch.css";

export default function JobSearch() {
  const [formInput, setFormInput] = useState('');
  const [errorMsg, setError] = useState(null);

  return (
    <div class="searchContainer">
      {/* {errorMsg} */}
      <h1>Find a job in 30 Days!</h1>
      <input id="jobToSearch" type='text' value={formInput}
        onChange={(e) => {
          setError(null);
          setFormInput(e.target.value);
        }} />
        <Link to={{ pathname: `/searchResults/${formInput.trim()}` }}>
          <button id="searchJob">
            Search Job
          </button>
        </Link>
        <br />
        <label>Note: Empty string searches for all jobs!</label>
    </div>

  )
}