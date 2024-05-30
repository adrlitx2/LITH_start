import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light'); // default theme

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
        setTheme(currentTheme);
        document.body.className = currentTheme; // Apply the theme to the body
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme preference
        document.body.className = newTheme; // Apply the new theme
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default ThemeToggle;
