import { useState } from 'react';
import axios from 'axios';
import SearchResultsPage from './SearchResultsPage';
import { Link } from 'react-router-dom';

export default function JobSearch() {
  const [formInput, setFormInput] = useState('');
  // const [job, setPokemon] = useState({
  //   name: 'No pokemon selected', health: -1,
  // })
  const [errorMsg, setError] = useState(null);

  // function onSearchButtonClick() {

  //   if (!formInput) {
  //     setError("Please enter a job you want to search for!");
  //     return;
  //   }


  //   axios.get('http://localhost:8000/api/findJobsByTitle/' + formInput)
  //     .then(response => "")
  //     // .then(response => setPokemon(response.data))
  //     // .catch(error => setPokemon({
  //     //   name: "No pokemon found",
  //     //   health: null,
  //     // }));

  //   // doSomething();
  // }

  return (
    <div>
      {/* {errorMsg} */}
      <h1>Find a job in 30 Days!</h1>
      <input type='text' value={formInput}
        onChange={(e) => {
          setError(null);
          setFormInput(e.target.value);
        }} />
        <Link to={{ pathname: `/searchResults/${formInput}` }}>
          <button>
            Search Job
        </button>
        </Link>
      {/* <div>
        {/* Pokemon Name: {pokemon.name}
      </div>
      <div>
        Pokemon Health: {pokemon.health}
      </div> */} 

    </div>

  )
}