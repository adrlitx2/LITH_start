import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFTCard from '../components/NFTCard';
import mockNFTs from '../data/mockNFTs'; // Your mock NFT data

const Home = ({ data = {}, featuredNFTs = mockNFTs.slice(0, 9) }) => {
    // Slider settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Adjusted from 3 to 4 for desktop view
        slidesToScroll: 4,  // Adjusted from 3 to 4 for consistency
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,  // Adjust breakpoint for medium-sized devices
                settings: {
                    slidesToShow: 3,  // 3 slides for tablets
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,  // Breakpoint for smaller devices
                settings: {
                    slidesToShow: 1,  // 1 slide for mobile devices
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    swipeToSlide: true  // Allows swiping to slide on touch devices
                }
            }
        ]
    };

    // Ensure data fields have defaults
    const { title = "NFT Marketplace", description = "Explore, collect, and sell extraordinary NFTs.", image = "https://via.placeholder.com/400x300" } = data;

    return (
        <>
            <Helmet>
                <title>{title} - NOANE NFT Marketplace</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={`${title} - NFT Marketplace`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="twitter:title" content={`${title} - NFT Marketplace`} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
            </Helmet>
            <div className="home-content">
                <h1 className="main-heading">Welcome to {title}</h1>
                <p className="description-text">{description}</p>
                
                <section className="featured-nfts">
                    <h2 className="sub-heading">Featured NFTs</h2>
                    <Slider {...settings}>
                        {featuredNFTs.map(nft => (
                            <NFTCard key={nft.id} nft={nft} />
                        ))}
                    </Slider>
                </section>

                <section className="trending-nfts">
                    <h2 className="sub-heading">Trending NFTs</h2>
                    <Slider {...settings}>
                        {featuredNFTs.map(nft => (
                            <NFTCard key={nft.id} nft={nft} />
                        ))}
                    </Slider>
                </section>
            </div>
        </>
    );
};

export default Home;
