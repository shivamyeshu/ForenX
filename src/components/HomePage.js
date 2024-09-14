// src/components/HomePage.js
import React from 'react';
import '../css/HomePage.css'; // Import the CSS file for this page

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to the ForenX- Digital Forensics Tool</h1>
                <p>Conduct thorough forensic analysis and streamline data collection to assist investigators in uncovering critical insights.</p>
                <div className="home-buttons">
                    <a href="/upload">Upload Evidence</a>
                    <a href="/analysis">Initiate Analysis</a>
                    <a href="/report">Generate Report</a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
