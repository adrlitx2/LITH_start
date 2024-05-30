import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router for navigation

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">NFT Marketplace</Link> {/* Assuming the logo leads to the home page */}
            </div>
            <nav>
                <Link to="/explore">Explore</Link> {/* Changed to /explore assuming it's for browsing NFTs */}
                <Link to="/stats">Stats</Link> {/* Assuming there's a stats page */}
                <Link to="/profile">Profile</Link> {/* Link to the user's profile */}
                {/* Additional links can be added here as needed */}
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="Search items, collections, and accounts" /> {/* Search bar */}
            </div>
        </header>
    );
};

export default Navbar;
