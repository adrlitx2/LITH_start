// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingCart, faBars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import useLocation from '../utils/location';
import SearchBar from './Searchbar';
import '../styles/styles.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { city, zipcode } = useLocation();

    const categories = [
        'All',
        'Art',
        'Digital Art',
        'Collectibles',
        'Luxury Apparel',
        'Luxury Items',
        'Sports Memorabilia',
        'Music',
        'Gaming',
        'Virtual Real Estate',
        'Photography',
        'Trading Cards',
        'Domain Names',
        'Metaverse Assets',
        'Avatars',
        'Animations',
        'Film & Entertainment',
        'Literature',
        'Tickets',
        'Utility NFTs',
        'Fashion',
        'Jewelry',
        'Watches',
        'Antiques',
        'Furniture',
        'Vehicles',
        'Electronics',
        'Health & Wellness',
        'Home & Garden',
        'Food & Beverage'
    ];
    

    const handleSearch = (query, category) => {
        console.log(`Searching for ${query} in ${category}`);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="/images/NOANE_full_jade.png" alt="NOANE" className="logo-image" />
                </Link>
            </div>
            <div className="navbar-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                <div className="location-text">
                    <p>Delivering to <span className='location-coordinates'>{city} {zipcode}</span></p>
                    <button className="update-location-button">Update location</button>
                </div>
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
                <SearchBar categories={categories} onSearch={handleSearch} />
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
        </header>
    );
};

export default Navbar;
