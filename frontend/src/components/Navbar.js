import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingCart, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'; // Fixed import

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to handle the toggle
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to handle the search modal

    const toggleSearchModal = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="/images/NOANE_full_jade.png" alt="NOANE" className="logo-image" /> {/* Corrected image path */}
                </Link>
            </div>
            <FontAwesomeIcon icon={faBars} className="hamburger" onClick={() => setIsOpen(!isOpen)} />
            <nav className="main-nav">
                <div className="desktop-links">
                    <Link to="/create">Create</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/stats">Stats</Link>
                </div>
                <div className={`mobile-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/create" onClick={() => setIsOpen(false)}>Create</Link>
                    <Link to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
                    <Link to="/stats" onClick={() => setIsOpen(false)}>Stats</Link>
                    <Link to="/nfts" onClick={() => setIsOpen(false)}>My NFTs</Link>
                    <Link to="/collections" onClick={() => setIsOpen(false)}>Collections</Link>
                    <Link to="/watchlist" onClick={() => setIsOpen(false)}>Watchlist</Link>
                    <Link to="/recommendations" onClick={() => setIsOpen(false)}>Recommendations</Link>
                    <Link to="/account" onClick={() => setIsOpen(false)}>Account</Link>
                    <Link to="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
                    <Link to="/support" onClick={() => setIsOpen(false)}>Support</Link>
                </div>
            </nav>
            <div className="icon-links">
                <div className="search-bar">
                    <input type="text" placeholder="Search items, collections, and accounts" />
                </div>
                <FontAwesomeIcon icon={faSearch} className="icon search-icon" onClick={toggleSearchModal} />
                <FontAwesomeIcon icon={faShoppingCart} className="icon shopping-cart" />
                <div className="profile-dropdown">
                    <FontAwesomeIcon icon={faUserCircle} className="icon profile-icon" alt="Profile" />
                    <div className="dropdown-content">
                        <Link to="/nfts">My NFTs</Link>
                        <Link to="/collections">Collections</Link>
                        <Link to="/watchlist">Watchlist</Link>
                        <Link to="/recommendations">Recommendations</Link>
                        <Link to="/account">Account</Link>
                        <Link to="/settings">Settings</Link>
                        <Link to="/support">Support</Link>
                    </div>
                </div>
            </div>

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="search-modal">
                    <div className="search-modal-content">
                        <span className="close" onClick={toggleSearchModal}>&times;</span>
                        <input type="text" placeholder="Search items, collections, and accounts" className="search-modal-input" />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
