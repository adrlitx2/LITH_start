import React from 'react';
import { Link } from 'react-router-dom'; // This is assuming you're using react-router for navigation

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 NFT Marketplace. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    {/* Add other links as needed */}
                </div>
                <div className="social-links">
                    {/* Example social media links */}
                    <a href="https://twitter.com/shoplith" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com/lithtoken" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
