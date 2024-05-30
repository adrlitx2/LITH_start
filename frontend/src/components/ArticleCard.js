import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation

const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.summary}</p> {/* Assuming each article has a summary */}
                <Link to={`/articles/${article.id}`} className="read-more">Read More</Link>
            </div>
        </div>
    );
};

export default ArticleCard;
