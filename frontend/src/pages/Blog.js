import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = ({ data }) => (
    <>
        <Helmet>
            <title>{data.title} - NFT Marketplace</title>
            <meta name='description' content={data.description} />
            <meta property='og:title' content={data.title + ' - NFT Marketplace'} />
            <meta property='og:description' content={data.description} />
            <meta property='og:image' content={data.image} />
            <meta property='twitter:title' content={data.title + ' - NFT Marketplace'} />
            <meta property='twitter:description' content={data.description} />
            <meta property='twitter:image' content={data.image} />
        </Helmet>
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    </>
);
export default Blog;
