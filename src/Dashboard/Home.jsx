import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer/Footer';
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import { Grid2, Typography } from '@mui/material';

// const data = [
//     {
//         image: "https://industry.plantautomation-technology.com/articles/images/heat-exchangers.jpg",
//         description: "",
//         titel: "Omron Short bar for XW5T-P1.5 / XW5G-P1.5 24412133 - Made In India",
//         rupees: "Rs. 589 / Piece"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqC_wljD5LD4Wlo0uI5DFsoZ2XicdrnnBS7w&s",
//         description: "",
//         titel: "Omron Soft cover 8589411 - Made In India",
//         rupees: "Rs. 2389 / Piece"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKmh9YCoPsg8obdIa0lmInn7trQBrm7E8XA&s",
//         description: "",
//         titel: "Schneider Electric Kaedra Mini Enclosure 4 to 12 Module 63 A, 13440 Series - Made In India",
//         rupees: "Rs. 1289 / Piece"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODGQsPvvNNLEZpUDvRbKNpyAk0ewPR-YVuQ&s",
//         description: "",
//         titel: "Danfoss VLT Control Panel LCP 12 W Potmeter, 132B0101 - Made In India",
//         rupees: "Rs. 1789 / Piece"
//     }
// ];

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]
    //     () => {
    //     // const savedPosts = localStorage.getItem("posts");
    //     // return savedPosts ? JSON.parse(savedPosts) : [];
    // }
);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
            // localStorage.setItem("posts", JSON.stringify(data)); // Save data to localStorage
        } catch (error) {
            console.log("error");
        }
        setLoading(false);
    }

    useEffect(() => {
        
            fetchProductData();
        
    }, []); // Only fetch data if there are no posts in the state

    return (
        <div>
            <Header />
            {loading ? <Spinner /> : 
            posts.length > 0 ? 
             (
               <Grid2 className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] '>
               {posts.map((post) => (
                 <Product key={post.id} post={post} />
               ))}
             </Grid2>
            ) :
            <Grid2 className='flex justify-center items-center'>
                <Typography>No Data Found</Typography>
            </Grid2>
            }
            {/* <Footer /> */}
        </div>
    );
}

export default Home;

