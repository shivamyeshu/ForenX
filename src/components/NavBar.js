// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">ForenX</Link>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/upload" className="navbar-item">Upload Evidence</Link>
                <Link to="/analysis" className="navbar-item">Analysis</Link>
                <Link to="/report" className="navbar-item">Report</Link>
            </div>
            <div className="navbar-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default NavBar;