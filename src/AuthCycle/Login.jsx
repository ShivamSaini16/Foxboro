import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import { Grid2 } from "@mui/material";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-gray-100 shadow-lg rounded-lg space-y-6">
                    {/* Company Logo */}
                    <div className="flex justify-center">
                        <img
                            src="log.jpg"
                            alt="Automation Instruments Logo"
                            className="h-16 w-full"
                        />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800">Foxboro Instrument</h2>
                        <p className="text-gray-600">Sign in to manage your instruments and insights.</p>
                    </div>

                    {/* Login Form */}
                    <form className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700  flex justify-center items-end w-25 h-13"
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                                />
                                <span className="ml-2">Remember Me</span>
                            </label>
                            <Link to="/ForgotPwd" className="text-sm text-blue-600 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer Links */}
                    <div className="text-center">

                        <p className="text-lg text-gray-600">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
