import React from 'react';

const NFTCard = ({ nft }) => {
    return (
        <div className="nft-card">
            <img src={nft.image} alt={nft.title} className="nft-image" />
            <div className="nft-details">
                <h3>{nft.title}</h3>
                <p>{nft.description}</p>
                <div className="nft-price">
                    {nft.price} ETH
                </div>
                <button className="buy-btn">Buy</button>
            </div>
        </div>
    );
};

export default NFTCard;
