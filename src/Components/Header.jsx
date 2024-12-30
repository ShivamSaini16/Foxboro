import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from 'react-router-dom';
import { Grid2, IconButton, InputAdornment, MenuItem, Select, TextField, Typography, InputLabel, FormControl } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  useSelector } from 'react-redux';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useDispatch } from 'react-redux';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import { setSearchValue } from '../Redux/slices/CounterSlice';

const Header = () => {
    const [inputVal, setInputVal] = useState("");
    const dispatch = useDispatch();
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

    //handle the input field of search 
    const handleInput = (e) => {
        setInputVal(e.target.value);
        dispatch(setSearchValue(e.target.value));
     }

    // const cart = useSelector((state) => state)
    // console.log("-------------------", cart)
    return (
        <div>
            <Grid2
                container
                sx={{
                    bgcolor: '#162F4D',
                    color: 'white',
                    padding: '20px',
                    flexWrap: 'wrap',
                }}
            >
                <div className="flex flex-wrap items-center justify-around w-full space-y-4">
                    {/* Contact and Offer Section */}
                    <div className="flex flex-wrap items-center justify-start space-x-10">

                        <div className='flex items-center space-x-2'>
                            <PhoneInTalkIcon sx={{ color: 'white', fontSize: 24 }} />
                            <p className="text-lg">+91 9457889234</p>
                        </div>

                        {/* Email Section */}
                        <div className='flex items-center space-x-2'>
                            <MarkunreadIcon sx={{ color: 'white', fontSize: 24 }} />
                            <p className="text-lg">foxboroinstrument.sales@gmail.com</p>
                        </div>

                        {/* Offer Section */}
                        <div className='flex items-center space-x-2'>
                            <LocalOfferIcon sx={{ color: 'white', fontSize: 24 }} />
                            <p className="text-lg">Offer</p>
                        </div>
                        <p className="text-lg">GST Benefit</p>
                        <p className="text-lg">Become a Seller</p>
                        <p className="text-lg">Bulk Order</p>
                        <p className="text-lg">FAQs</p>

                        {/* Shipping Section */}
                        <div className='flex items-center space-x-2'>
                            <LocalShippingIcon sx={{ color: 'white', fontSize: 24 }} />
                            <p className="text-lg">Track Order</p>
                        </div>

                        {/* App Icons */}
                        <div className='flex items-center space-x-2'>
                            <AppleIcon sx={{ color: 'white', fontSize: 24 }} />
                            <AndroidIcon sx={{ color: 'white', fontSize: 24 }} />
                        </div>
                    </div>
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
                            name='inputVal'
                            value={inputVal}
                            onChange={(e) => handleInput(e)}

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
                                        {/* <Select
                                            value={category} 
                                            onChange={handleCategoryChange}
                                            sx={{
                                                color: 'white',
                                                borderColor: 'white',
                                                height: '40px', 
                                                '& .MuiSvgIcon-root': {
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <MenuItem value="All Categories">All Categories</MenuItem>
                                            <MenuItem value="Electronics">Electronics</MenuItem>
                                            <MenuItem value="Furniture">Furniture</MenuItem>
                                            <MenuItem value="Clothing">Clothing</MenuItem>
                                        </Select> */}
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
