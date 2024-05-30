import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick'; // Importing Slider component
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Default slick theme
import NFTCard from '../components/NFTCard'; // Assuming you have an NFTCard component

const Home = ({ data, featuredNFTs }) => {
    // Slider settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    swipeToSlide: true
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                <title>{data.title} - NFT Marketplace</title>
                <meta name="description" content={data.description} />
                <meta property="og:title" content={`${data.title} - NFT Marketplace`} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.image} />
                <meta property="twitter:title" content={`${data.title} - NFT Marketplace`} />
                <meta property="twitter:description" content={data.description} />
                <meta property="twitter:image" content={data.image} />
            </Helmet>
            <div className="home-content">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <p>booger</p>
                <Slider {...settings}>
                    {featuredNFTs.map(nft => (
                        <NFTCard key={nft.id} nft={nft} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Home;
