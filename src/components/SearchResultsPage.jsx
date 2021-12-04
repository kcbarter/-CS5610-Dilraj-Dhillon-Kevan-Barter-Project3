import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SearchResultsPage() {
    let { jobToSearch }= useParams();
    const [allPokemon, setAllPokemon] = useState([]);


    function findAllPokemon() {
        axios.get('http://localhost:8000/api/pokemon/findAll')
            .then(response => {
                setAllPokemon(response.data)
            })
            .catch(error => console.error(error));
    }

    useEffect(findAllPokemon, []);

    const pokemonListComponent = allPokemon.map(pokemon => {
        return (<>
        <p></p>
        <Link to={"pokemon/" + pokemon.name}>{pokemon.name}</Link>
        </>)
    })

    return (
        <div>
           {jobToSearch}
        </div>
    )
}