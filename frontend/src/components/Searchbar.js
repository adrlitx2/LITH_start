// src/components/SearchBar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchBar.css';

const SearchBar = ({ categories, onSearch }) => {
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [recommendations, setRecommendations] = useState([]);

    const handleSearch = () => {
        onSearch(query, selectedCategory);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // Fetch recommendations based on the input value
        // This is a placeholder. Replace with actual recommendation fetching logic
        if (value.length > 2) {
            setRecommendations(['Recommendation 1', 'Recommendation 2', 'Recommendation 3']);
        } else {
            setRecommendations([]);
        }
    };

    return (
        <div className="search-bar-container">
            <select 
                className="category-select" 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <input 
                type="text" 
                className="search-input" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search items, collections, and accounts"
            />
            <button className="search-button" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            {recommendations.length > 0 && (
                <div className="recommendations-list">
                    {recommendations.map((recommendation, index) => (
                        <div key={index} className="recommendation-item">
                            {recommendation}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
