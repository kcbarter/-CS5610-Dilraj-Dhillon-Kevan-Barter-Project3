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
import CreateJob from './components/CreateJob.jsx';
import EditJob from './components/EditJob';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<JobSearch />} />
      <Route path="/searchResults/:jobToSearch" element={<SearchResultsPage />} />
      <Route path="/searchResults/" element={<SearchResultsPage />} />
      <Route path="/jobDetails/:jobId" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/favorites/:userName" element={<Favorites />} />
      <Route path="/create_job" element={<CreateJob />} />
      <Route path="/edit_job/:jobId" element={<EditJob />}/>
    </Routes> 
  </Router>
  ,
  document.getElementById('root')
);
