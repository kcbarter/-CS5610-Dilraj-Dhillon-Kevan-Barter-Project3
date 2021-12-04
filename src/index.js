import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import PokemonDetails from './components/PokemonDetails';
import SearchResultsPage from './components/SearchResultsPage.jsx';
import JobSearch from './components/JobSearch.jsx';
import Navbar from './components/Navbar.jsx';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<JobSearch />} />
      <Route path="/searchResults/:jobToSearch" element={<SearchResultsPage />} />
      {/* <Route path="/pokemonSearch" element={<PokemonSearch />} />
      <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} /> */}
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
