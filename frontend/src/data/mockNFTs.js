const mockNFTs = [
    {
        id: 1,
        title: "Abstract Reverie",
        description: "An abstract art piece from a renowned digital artist.",
        image: "images/mockNFT/MockNFT1.webp",
        price: "0.3",
        creator: "Ava Reynard",
        owner: "Liam Cooper",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 2,
        title: "Digital Landscape",
        description: "Digital rendering of a futuristic landscape.",
        image: "images/mockNFT/MockNFT2.webp",
        price: "0.5",
        creator: "Ethan Vale",
        owner: "Mia Collins",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 3,
        title: "Virtual Sculpture",
        description: "A 3D model of a unique sculpture.",
        image: "images/mockNFT/MockNFT3.webp",
        price: "1.2",
        creator: "Sophia Hawke",
        owner: "Jack Morgan",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 4,
        title: "Cyberpunk Cityscape",
        description: "Explore the neon-lit streets of a cyberpunk city.",
        image: "images/mockNFT/MockNFT4.webp",
        price: "0.8",
        creator: "Zane Bishop",
        owner: "Ella Gray",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 5,
        title: "Mystic Forest",
        description: "A mystical forest scene with animated creatures.",
        image: "images/mockNFT/MockNFT5.webp",
        price: "0.6",
        creator: "Lila Summers",
        owner: "Owen Parker",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 6,
        title: "Space Odyssey",
        description: "Journey through space with this dynamic NFT.",
        image: "images/mockNFT/MockNFT7.webp",
        price: "1.5",
        creator: "Nolan Blake",
        owner: "Chloe Hayes",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 7,
        title: "Underwater Exploration",
        description: "Discover the hidden depths of the ocean.",
        image: "images/mockNFT/MockNFT8.webp",
        price: "0.7",
        creator: "Emma Reed",
        owner: "Logan Cruz",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 8,
        title: "Historic Monuments",
        description: "Iconic monuments from around the world.",
        image: "images/mockNFT/MockNFT9.webp",
        price: "0.4",
        creator: "Aiden Hughes",
        owner: "Maya Flores",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 9,
        title: "Galactic Vistas",
        description: "Stunning views from across the galaxy.",
        image: "images/mockNFT/MockNFT10.webp",
        price: "0.9",
        creator: "Harper Quinn",
        owner: "Mason James",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 10,
        title: "Abstract Harmony",
        description: "A captivating abstract art piece.",
        image: "images/mockNFT/MockNFT11.webp",
        price: "0.4",
        creator: "Olivia Cross",
        owner: "Caleb Ross",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 11,
        title: "Digital Portrait",
        description: "A digital portrait of a futuristic character.",
        image: "images/mockNFT/MockNFT12.webp",
        price: "0.6",
        creator: "Isabella Clarke",
        owner: "Henry Adams",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 12,
        title: "Fantasy Landscape",
        description: "A beautiful fantasy landscape painting.",
        image: "images/mockNFT/MockNFT13.webp",
        price: "0.8",
        creator: "Lucas Ford",
        owner: "Aria Lewis",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 13,
        title: "Virtual Architecture",
        description: "A 3D model of a modern architectural design.",
        image: "images/mockNFT/MockNFT14.webp",
        price: "1.0",
        creator: "Grace Mitchell",
        owner: "Jayden Lee",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 14,
        title: "Surreal Art",
        description: "A surreal piece of digital art.",
        image: "images/mockNFT/MockNFT15.webp",
        price: "1.1",
        creator: "Ella Hart",
        owner: "Alexander Green",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 15,
        title: "Space Exploration",
        description: "A dynamic piece capturing space exploration.",
        image: "images/mockNFT/MockNFT16.webp",
        price: "1.3",
        creator: "Ava Brooks",
        owner: "Ryan Cooper",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 16,
        title: "Urban Art",
        description: "An urban art piece with vibrant colors.",
        image: "images/mockNFT/MockNFT17.webp",
        price: "0.5",
        creator: "Levi Bennett",
        owner: "Lily Scott",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 17,
        title: "Fantasy Character",
        description: "A detailed fantasy character design.",
        image: "images/mockNFT/MockNFT21.webp",
        price: "0.7",
        creator: "Mia Rogers",
        owner: "Benjamin Kelly",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 18,
        title: "Futuristic Vehicle",
        description: "A concept design of a futuristic vehicle.",
        image: "images/mockNFT/MockNFT18.webp",
        price: "0.9",
        creator: "Logan Murphy",
        owner: "Zoe Bennett",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 19,
        title: "Ancient Ruins",
        description: "A painting of ancient ruins.",
        image: "images/mockNFT/MockNFT19.webp",
        price: "0.6",
        creator: "Chloe Howard",
        owner: "Nathan Turner",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    },
    {
        id: 20,
        title: "Mythical Creature",
        description: "A design of a mythical creature.",
        image: "images/mockNFT/MockNFT20.webp",
        price: "1.4",
        creator: "Ella Simmons",
        owner: "Daniel Ward",
        creatorAvatar: "https://via.placeholder.com/50",
        ownerAvatar: "https://via.placeholder.com/50"
    }
];

export default mockNFTs;
