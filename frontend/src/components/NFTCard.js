// src/components/NFTCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

const NFTCard = ({ nft }) => (
    <div className="nft-card">
        <div className="image-container">
            <img src={nft.image} alt="NFT" className="nft-image" />
        </div>
        <div className="nft-info">
            <div className="nft-info-background"></div>
            <div className="nft-info-content">
                <h3 className="nft-title">{nft.title}</h3>
                <p className="nft-description">{nft.description}</p>
                <div className="nft-meta">
                    <img src={nft.creatorAvatar} alt="Creator" className="nft-avatar" />
                    <div className="creator-info">
                        <span className="created-by-text">Created by:</span>
                        <span className="creator-name">{nft.creator}</span>
                    </div>
                </div>
                <p className="nft-price">
                    <FontAwesomeIcon icon={faEthereum} /> {nft.price} ETH
                </p>
            </div>
            <button className="buy-button">Buy Now</button>
        </div>
    </div>
);

NFTCard.propTypes = {
    nft: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        creator: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        creatorAvatar: PropTypes.string.isRequired,
        ownerAvatar: PropTypes.string.isRequired,
    }).isRequired,
};

export default NFTCard;
