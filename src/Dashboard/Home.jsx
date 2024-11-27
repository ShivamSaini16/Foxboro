import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer/Footer';
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import { Box, Grid2, Typography } from '@mui/material';
import SideBar from '../Components/SideBar/SideBar';
import Banner from '../Components/Banner';


function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]

    );

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
            // localStorage.setItem("posts", JSON.stringify(data)); // Save data to localStorage
        }
        catch (error) {
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
            <Banner />
            <Grid2 container spacing={2} className="min-h-[100vh] p-1">
                <Grid2 item p={3} className='100vh' size={{ lg: 3, md: 4, sm: 12, xs: 12 }}>
                    <SideBar />
                </Grid2>
                <Grid2 size={{ lg: 9, md: 6, sm: 12, xs: 12 }} className='flex justify-center min-h-[100vh]'>
                    {loading ? <Spinner /> :
                        posts.length > 0 ?
                            (
                                <Grid2 className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl space-y-10 space-x-5 h-screen bg-white'>
                                    {posts.map((post) => (
                                        <Product key={post.id} post={post} />
                                    ))}
                                </Grid2>
                            ) :
                            <Grid2 className='flex justify-center items-center'>
                                <Typography>No Data Found</Typography>
                            </Grid2>
                    }
                </Grid2>
                {/* <WhatsApp /> */}
            </Grid2>
            <Footer/>
        </div>
    );
}

export default Home;

