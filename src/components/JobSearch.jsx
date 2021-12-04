import { useState } from 'react';
import axios from 'axios';
import SearchResultsPage from './SearchResultsPage';
import { Link } from 'react-router-dom';

export default function JobSearch() {
  const [formInput, setFormInput] = useState('');
  const [errorMsg, setError] = useState(null);

  return (
    <div>
      {/* {errorMsg} */}
      <h1>Find a job in 30 Days!</h1>
      <input type='text' value={formInput}
        onChange={(e) => {
          setError(null);
          setFormInput(e.target.value);
        }} />
        <Link to={{ pathname: `/searchResults/${formInput.trim()}` }}>
          <button>
            Search Job
          </button>
        </Link>
        <br />
        <label>Note: Empty string searches for all jobs!</label>
    </div>

  )
}