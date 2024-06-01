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
        dots: false,
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
                    dots: false,
                    swipeToSlide: true  // Allows swiping to slide on touch devices
                }
            }
        ]
    };

    // Ensure data fields have defaults
    const { title = "NOANE NFT Marketplace", description = "Create, explore, collect, and sell extraordinary phygital NFTs authenticated with NFC technology.", image = "https://via.placeholder.com/400x300" } = data;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={`${title}`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="twitter:title" content={`${title}`} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
            </Helmet>
            
            <div className="hero">
                <h1>Create, Discover, and Sell Authentic Digital & Physical NFTs</h1>
                <p>Join NOANE, the leading marketplace for phygital items with NFC & RFID authentication, bridging the gap between the digital and physical worlds.</p>
                <button className="cta-button">Get Started</button>
            </div>

            <div className="home-content">
                <section className="featured-nfts">
                    <h2 className="section-title">Featured</h2>
                    <Slider {...settings}>
                        {featuredNFTs.map(nft => (
                            <NFTCard key={nft.id} nft={nft} />
                        ))}
                    </Slider>
                </section>

                <section className="categories">
                    <div className="category-card">
                        <img src="images/MainImages/Art.webp" alt="Art NFTs" />
                        <h3>Art NFTs</h3>
                        <p>Discover unique art pieces authenticated by NFC technology.</p>
                    </div>
                    <div className="category-card">
                        <img src="images/MainImages/Luxury.webp" alt="Luxury Goods" />
                        <h3>Luxury Goods</h3>
                        <p>Find rare luxury items with NFC-authenticated provenance.</p>
                    </div>
                    <div className="category-card">
                        <img src="images/MainImages/Collectibles.webp" alt="Collectibles" />
                        <h3>Collectibles</h3>
                        <p>Explore limited edition collectibles verified with NFC chips.</p>
                    </div>
                </section>

                <section className="trending-nfts">
                    <h2 className="section-title">Trending</h2>
                    <Slider {...settings}>
                        {featuredNFTs.map(nft => (
                            <NFTCard key={nft.id} nft={nft} />
                        ))}
                    </Slider>
                </section>

                <section className="reviews">
                    <h2 className="section-title">Reviews</h2>
                    <div className="review-card">
                        <h4>John Doe</h4>
                        <p>"NOANE is a game-changer for phygital NFTs. The NFC authentication provides peace of mind and ensures authenticity."</p>
                    </div>
                    <div className="review-card">
                        <h4>Jane Smith</h4>
                        <p>"I love the seamless integration of digital and physical assets. NOANE offers a unique and secure marketplace for collectors."</p>
                    </div>
                </section>

                <section className="newsletter">
                    <h2 className="newsletter-title">Stay Updated</h2>
                    <p>Subscribe to our newsletter for the latest updates on phygital NFTs, NFC authentication technology, and exclusive offers.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Home;
