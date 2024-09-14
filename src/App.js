// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import UploadEvidence from './components/UploadEvidence';
import Analysis from './components/Analysis';
import Report from './components/Report';
import HomePage from './components/HomePage'; 
import Footer from './components/Footer'; 
import './App.css';
function App() {
    return (
        <Router>
         
            <div>
                <NavBar />
                <Routes>
                <Route path="/" classname="button" element={<HomePage />} /> 
                    <Route path="/upload" classname="button"  element={<UploadEvidence />} />
                    <Route path="/analysis" classname="button"  element={<Analysis />} />
                    <Route path="/report" classname="button"  element={<Report />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
