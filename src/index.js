import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import JobDetails from './components/JobDetails';
import SearchResultsPage from './components/SearchResultsPage.jsx';
import JobSearch from './components/JobSearch.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';
import Favorites from './components/Favorites.jsx';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<JobSearch />} />
      <Route path="/searchResults/:jobToSearch" element={<SearchResultsPage />} />
      <Route path="/searchResults/" element={<SearchResultsPage />} />
      <Route path="/jobDetails/:jobId" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorites/:username" element={<Favorites />} />
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);
