import React from 'react';
import { Link } from 'react-router-dom'; // This is assuming you're using react-router for navigation

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><Link to="/api-docs">API Documentation</Link></li>
                        <li><Link to="/knowledge-base">Knowledge Base</Link></li>
                        <li><Link to="/authentication">NFC Authentication</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <ul>
                        <li><Link to="/help">Help Center</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Community</h4>
                    <ul>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/forums">Forums</Link></li>
                        <li><Link to="/partners">Partners</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="https://twitter.com/shoplith" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://facebook.com/lithtoken" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://instagram.com/lithtoken" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com/company/lithtoken" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 LITH LLC. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
