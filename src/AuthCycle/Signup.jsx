import React, { useState } from 'react';
import { TextField, Button, Grid2, Container, Typography, Link } from '@mui/material';
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';


function Registration() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChanges = (event) => {
        console.log(event.target.value);
    };




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
                        {/* Phone Section */}
                        <div>
                            <p className='text-lg'>FOXBORO INSTRUMENT COMPANY</p>
                        </div>
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

            <div className="flex justify-center items-center h-screen w-screen ">
                <div className="bg-violet-800 w-5/12 h-3/4 flex justify-center items-center rounded-3xl">
                    <Container maxWidth="sm" className="h-4/5 w-80 rounded-2xl bg-white shadow-lg p-6">
                        <Typography variant="h4" align="center" gutterBottom className='text-2xl font-bold'>
                            Foxboro Instrument
                        </Typography>

                        <form>
                            <div className="flex flex-col justify-center gap-8">
                                <p className="w-full flex justify-center text-2xl font-bold">Sign Up</p>

                                <Grid2 item xs={12}>
                                    <TextField
                                        label="Name"
                                        name="name"
                                        fullWidth
                                        onChange={handleChanges}
                                        className='shadow-lg'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle sx={{ color: 'darkblue' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid2>

                                <Grid2 item xs={12}>
                                    <TextField
                                        label="Mobile"
                                        name="mobile"
                                        fullWidth
                                        onChange={handleChanges}
                                        className='shadow-lg'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon sx={{ color: 'darkblue' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid2>

                                <Grid2 item xs={12}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        fullWidth
                                        onChange={handleChanges}
                                        className='shadow-lg'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon sx={{ color: 'darkblue' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid2>

                                <Grid2 container spacing={2} mt={5} >
                                    <Grid2
                                        item
                                        size={{ xs: 12 }}
                                        sx={{ display: 'flex', justifyContent: 'center' }}
                                        className="gap-2"
                                    >
                                        <input type="checkbox" className="size-4" />
                                        <p className="text-blue-900 text-xl">I read and agree Terms and Conditions</p>
                                    </Grid2>

                                    <Grid2 item xs={12} className='w-full ' >
                                        <Button variant='contained' color="primary" type="submit" className="w-full bg-blue-700">
                                            CREATE ACCOUNT
                                        </Button>
                                    </Grid2>

                                    <Grid2
                                        item
                                        size={{ xs: 12 }}
                                        sx={{ display: 'flex', justifyContent: 'center' }}
                                        className="gap-2"
                                    >
                                        <p className="text-blue-900 text-xl">
                                            Already have an account?   <span className="text-blue-700 underline"> <Link to="/ForgotPwd" className="text-sm text-blue-600 hover:underline">
                                                Forgot Password?
                                            </Link></span>
                                        </p>
                                    </Grid2>
                                </Grid2>
                            </div>
                        </form>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Registration;
