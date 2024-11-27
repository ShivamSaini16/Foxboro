import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from 'react-router-dom';
import { Grid2, IconButton, InputAdornment, MenuItem, Select, TextField, Typography, InputLabel, FormControl } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Header = () => {
    // Define state for category and search input
    const { items } = useSelector((state) => state?.cart)
    console.log("----cartSTATE--", items)
    console.log("Number of items in cart:", items.length);
    const [category, setCategory] = useState('');
    const [searchText, setSearchText] = useState('');

    // Handle category selection change
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    // Handle search functionality
    const handleSearch = () => {
        console.log('Category:', category);
        console.log('Search Text:', searchText);
    };


    // const cart = useSelector((state) => state)
    // console.log("-------------------", cart)
    return (
        <div>
            <Grid2 container sx={{ bgcolor: '#162F4D', display:'flex', }}>
                <div className='flex justify-between items-center p-1'>
                    {/* First Section */}
                    {/* <div style={{ backgroundColor: '#3E8DB7', padding: '5px', borderRadius: '5px' }}>
                        <p className='text-white'>
                            Welcome to our <br />
                            <span>New Website</span>
                        </p>
                    </div> */}

                    {/* Second Section (Phone) */}
                    <div className='flex items-center space-x-2 text-cyan-50'>
                        <PhoneInTalkIcon sx={{ color: 'white' }} />
                        <p>+91 9457889234</p>
                    </div>

                    {/* Third Section (Email) */}
                    <div className='flex items-center space-x-2 text-cyan-50'>
                        <MarkunreadIcon sx={{ color: 'white' }} />
                        <p>foxboroinstrument.sales@gmail.com</p>
                    </div>
                </div>

                {/* Fourth Section (Offer and other items) */}
                <div className='flex items-center justify-start text-cyan-50 space-x-4 p-4'>
                    <LocalOfferIcon sx={{ color: 'white' }} />
                    <p>Offer</p>
                    <p>GST Benefit</p>
                    <p>Become a seller</p>
                    <p>Bulk Order</p>
                    <p>FAQs</p>
                    <LocalShippingIcon sx={{ color: 'white' }} />
                    <p>Track Order</p>
                    <AppleIcon sx={{ color: 'white' }} />
                    <AndroidIcon sx={{ color: 'white' }} />
                </div>
            </Grid2>

            <Grid2 container display={'flex'} justifyContent={'space-evenly'} bgcolor={'#3c3154'} p={2} >
                <img src='log.jpg' alt='img' style={{ width: '7%', height: '7%' }} />
                <Typography variant='h4' color='white'>Foxboro Instrument Company</Typography>
                <Grid2 size={{ xs: 12, md: 12, lg: 5 }} display="flex" alignItems="center">
                    <FormControl fullWidth variant="outlined" size="small" sx={{ height: '40px' }}>
                        {/* InputLabel component */}
                        <InputLabel sx={{ color: 'white' }}></InputLabel>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            fullWidth
                            size="small"
                            sx={{
                                height: '40px',
                                input: { color: 'white' }, // Text color
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white', // Border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white', // Border color when focused
                                    },
                                    height: '40px', // Adjust height to match the dropdown
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {/* Dropdown (Select) Component */}
                                        <Select
                                            value={category} // Controlled select input
                                            onChange={handleCategoryChange}
                                            sx={{
                                                color: 'white',
                                                borderColor: 'white',
                                                height: '40px', // Adjust height
                                                '& .MuiSvgIcon-root': {
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            {/* Sample dropdown items */}
                                            <MenuItem value="All Categories">All Categories</MenuItem>
                                            <MenuItem value="Electronics">Electronics</MenuItem>
                                            <MenuItem value="Furniture">Furniture</MenuItem>
                                            <MenuItem value="Clothing">Clothing</MenuItem>
                                        </Select>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleSearch} edge="end">
                                            <SearchIcon sx={{ color: 'white' }} />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormControl>
                </Grid2>



                <Grid2 container>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <Typography variant='h6' color='white'>Login/Signup</Typography>
                    </Link>
                    <NavLink to='/Cart' style={{ position: 'relative', textDecoration: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>

                            <ShoppingCartIcon sx={{ color: 'white', width: '58px', height: '32px' }} />
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 end-0 dark:border-gray-900">{items.length}</div>
                            {/* <div> {
                                cart.items && cart.items.length > 0 && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '-10px',
                                            backgroundColor: 'red',
                                            borderRadius: '50%',
                                            padding: '4px 8px',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {cart.items.length}
                                    </span>
                                )
                            }
                            </div> */}
                        </div>
                    </NavLink>

                </Grid2>
            </Grid2>
        </div>
    );
};

export default Header;
